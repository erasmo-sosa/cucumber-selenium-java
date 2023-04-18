package StepDefinitions;

import java.util.concurrent.TimeUnit;

//import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import AspirationPages.AspirationMain;
import AspirationPages.OurProducts;
import Utilities.OSUtils;

//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;

//
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
//import junit.framework.Assert;
import static org.junit.Assert.*;

//@SuppressWarnings("deprecation")
public class AspirationProductsValidations {

	private final short shortWait = 16;
	private final short mediumWait = 32;
	private final String URL = "https://www.aspiration.com/";
	
	//private static WebDriver chromeDriver;
	WebDriver driver = null;
	AspirationMain AspirationMainPage = null;
	OurProducts OurProductsPage = null;
	
	@Given("User navigates to the Aspiration website")
	public void user_navigates_to_the_Aspiration_website() {


		String projectLocation = System.getProperty("user.dir");
		System.out.println("projectLocation: " + projectLocation);
		switch (OSUtils.getOS()) {
		
			case WINDOWS:
				System.setProperty("webdriver.chrome.driver","./src/test/resources/drivers/chromedriver_win.exe");
			case MAC:
				System.setProperty("webdriver.chrome.driver","./src/test/resources/drivers/chromedriver_mac");
		}
		//Windows Driver
		//System.setProperty("webdriver.chrome.driver","./src/test/resources/drivers/chromedriver_win.exe");
		//Macos Driver
		//System.setProperty("webdriver.chrome.driver","./src/test/resources/drivers/chromedriver_mac");
		driver = new ChromeDriver();	
		//driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(shortWait,TimeUnit.SECONDS) ;			
		driver.manage().timeouts().pageLoadTimeout(mediumWait, TimeUnit.SECONDS );
		driver.manage().window().maximize();	
		driver.get(URL);
		
		//OurProducts OurProductsPage = new OurProducts(chromeDriver);
		System.out.println(driver.getTitle());		
	}
	
	@When("User clicks on Spend & Save link")
	public void user_clicks_on_Spend_Save_link() {
		AspirationMainPage = new AspirationMain(driver);
		AspirationMainPage.SpendSaveLnk().click();
	}

	@Then("Spend & Save Plans page displays Aspiration card")
	public void spend_Save_Plans_page_displays_Aspiration_card() {
		OurProductsPage = new OurProducts(driver);
		 assertEquals(true, OurProductsPage.GetAspirationBtn().isDisplayed());
		 
	}

	@Then("Spend & Save Plans page displays Aspiration Plus card")
	public void spend_Save_Plans_page_displays_Aspiration_Plus_card() {
		assertEquals(true, OurProductsPage.GetAspirationPlusBtn().isDisplayed());
		driver.close();
	}

	@When("User clicks on Get Aspiration button")
	public void user_clicks_on_Get_Aspiration() {
		OurProductsPage = new OurProducts(driver);
		OurProductsPage.GetAspirationBtn().click();
		//this.driver.findElement(By.xpath("//button[normalize-space()='Get Aspiration']")).click();
	}

	@Then("an input field for an email address to sign up appears")
	public void an_input_field_for_an_email_address_to_sign_up_appears() {
		assertEquals(true, OurProductsPage.AspirationEmailTxt().isDisplayed());
		OurProductsPage.CloseBtn();
		driver.close();
	}

	@When("User clicks on Get Aspiration Plus")
	public void user_clicks_on_Get_Aspiration_Plus() {
		OurProductsPage = new OurProducts(driver);
		OurProductsPage.GetAspirationPlusBtn().click();
	}

	@Then("A modal with monthly and yearly plans appears")
	public void a_modal_with_monthly_and_yearly_plans_appears() {
		assertEquals(true, OurProductsPage.MontlyRdBtn().isDisplayed());
		assertEquals(true, OurProductsPage.YearlyRdBtn().isDisplayed());
	}

	@And("^yearly radio option is (\\d+.\\d+) paid once yearly$")
	public void yearly_radio_option_is_yearlyAmount_paid_once_yearly(String yearlyAmount) {
		assertEquals(true, OurProductsPage.YearlyAmountLbl().isDisplayed());
	}

	@And("^monthly radio option is (\\d+.\\d+) paid monthly$")
	public void monthly_radio_option_is_monthlyAmount_paid_monthly(String monthlyAmount) {
		assertEquals(true, OurProductsPage.MontlyAmountLbl().isDisplayed());
		driver.close();
	}
	
}
