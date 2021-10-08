package AspirationPages;

//import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;

public class AspirationMain {

	//private static WebDriver driver;
	WebDriver driver;
	//private static WebElement genericElement =  null;
	WebElement genericElement =  null;
	
    //Constructor
    public AspirationMain(WebDriver ParamDriver) {
    	this.driver = ParamDriver;
    }
    
	//ObjectProperties
	private static By BylnkSpendSave = By.xpath("(//a[@href='https://www.aspiration.com/our-products'])[1]");
	
	public WebElement SpendSaveLnk() {
		//By BylnkSpendSave = By.xpath("(//a[@href='https://www.aspiration.com/our-products'])[1]");
		genericElement = driver.findElement( BylnkSpendSave);
		return genericElement;
	}	
	//Assert.assertEquals(true, SpendSaveLnk.isDisplayed());

	
}
