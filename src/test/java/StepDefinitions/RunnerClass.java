package StepDefinitions;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features",
					glue={"StepDefinitions"},
					monochrome = true,
					plugin = {"pretty","html:target/HtmlReports"},
					tags="@XebiaFeature")
					//tags="@XebiaTest_03")
					//Json Reports
					//plugin = {"pretty","json:target/JSONReports/report.json"}
					//XML Reports
					//plugin = {"pretty","junit:target/JUnitReports/report.xml"}
public class RunnerClass {

}
