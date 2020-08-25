package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "./src/test/java/features/login.feature",
        glue = {""},
        format = {"pretty", "html:test-output"},
        tags = {"@testt"},// used to run specific feature file which has same tag put on it.
        monochrome = true,// to get the console output in readable format.
        strict = true, //it will check if any step is not defined in step definitions file.
        dryRun = false // to check all features are implemented correctly in step definitions.
)
public class TestRunner {

}
