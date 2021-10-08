package AspirationPages;

import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;

public class OurProducts {

	//private static WebDriver driver;
	protected WebDriver driver;
	
	//private static WebElement genericElement = null;
	private WebElement genericElement = null;
	
	//By BylnkSpendSave = By.xpath("(//a[@href='https://www.aspiration.com/our-products'])[1]");
    private By BybtnGetAspiration = By.xpath("//button[normalize-space()='Get Aspiration']");
    private By BybtnGetAspirationPlus = By.xpath("//button[normalize-space()='Get Aspiration Plus']");
    private By BytxtAspirationEmail = By.id("join-waitlist-input");
    private By BybtnClose = By.className("close");
    private By ByRdBtnYearly =  By.xpath("//div[normalize-space(@class)='modal-dialog']/descendant::div[@ng-click=\"selectPlan('monthly')\"]");
    private By ByRdBtnMontly =  By.xpath("//div[normalize-space(@class)='modal-dialog']/descendant::div[@ng-click=\"selectPlan('yearly')\"]");
    private By ByRdBtnYearlyAmount =  By.xpath("//div[normalize-space(@class)='modal-dialog']/descendant::div[@ng-click=\"selectPlan('yearly')\"]/descendant::b[text()='$71.88']");
    private By ByRdBtnMontlyAmount =  By.xpath("//div[normalize-space(@class)='modal-dialog']/descendant::div[@ng-click=\"selectPlan('monthly')\"]/descendant::b[text()='$7.99']");
    private By ByModalBackdrop = By.xpath("//div[@uib-modal-backdrop='modal-backdrop']");
    
    //Constructor
    public OurProducts( WebDriver ParamDriver) {
    	driver = ParamDriver;
    }
    
	public WebElement GetAspirationBtn() {
		//System.out.println("before finding element");
		genericElement = driver.findElement(BybtnGetAspiration);
		//System.out.println("after finding element");
		//((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();", genericElement);
		return genericElement;
	}
	public WebElement GetAspirationPlusBtn() {
		genericElement = driver.findElement( BybtnGetAspirationPlus);
		//((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();", genericElement);
		return genericElement;
	}
	public WebElement AspirationEmailTxt() {
		genericElement = driver.findElement( BytxtAspirationEmail);
		return genericElement;
	}
	public WebElement CloseBtn() {
		genericElement = driver.findElement( BybtnClose);
		return genericElement;
	}
	public WebElement YearlyRdBtn() {
		genericElement = driver.findElement( ByRdBtnYearly);
		return genericElement;
	}
	public WebElement MontlyRdBtn() {
		genericElement = driver.findElement( ByRdBtnMontly);
		return genericElement;
	}
	public WebElement YearlyAmountLbl() {
		genericElement = driver.findElement( ByRdBtnYearlyAmount);
		return genericElement;
	}
	public WebElement MontlyAmountLbl() {
		genericElement = driver.findElement( ByRdBtnMontlyAmount);
		return genericElement;
	}
	public WebElement ModalBackdrop() {
		genericElement = driver.findElement( ByModalBackdrop);
		return genericElement;
	}
}
