package stepdefinitions;

import TestRunner.TestRunner;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

public class LoginStepDefinition {
    WebDriver driver;

    //this are called as hooks
    @Before
    public void beforeScenario() {
        System.out.println("This will run before scenario");
    }

    @After
    public void afterScenario() {
        System.out.println("This will run after scenario");
    }

    @Given("^user is already on login page$")
    public void user_is_already_on_login_page() throws InterruptedException {

        System.setProperty("webdriver.chrome.driver", "C:\\SreekarJava\\install\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        Thread.sleep(1000);
        driver.get("https://www.facebook.com");
//        driver.findElement(By.cssSelector(""));
        System.out.println("url is opened");

        TestRunner testRunner = PageFactory.initElements(driver, TestRunner.class);
//      List<String> detailsPageValue =   testRunner.detailsPage();
    }

    @When("^title page is facebook$")
    public void title_page_is_facebook() {
        String title = driver.getTitle();
        Assert.assertEquals("Facebook - Log In or Sign Up", title);
        System.out.println("title is identified");
    }

    @Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_username_and_password(String username, String password) {
        driver.findElement(By.name("email")).sendKeys(username);
        driver.findElement(By.name("pass")).sendKeys(password);

    }

    @Then("^user clicks on login button$")
    public void user_clicks_on_login_button() throws InterruptedException {
        WebElement loginButton = driver.findElement(By.id("u_0_b"));
        Thread.sleep(1000);
        loginButton.click();
//        use javascriptExecutor for elements which can't be navigated through name or id
//        JavascriptExecutor js = (JavascriptExecutor) driver;
//        js.executeScript("arguments[0].click();", loginBtn);
    }

    @Then("^user is on Home page$")
    public void user_is_on_Home_Page() {
        String title = driver.getTitle();
        System.out.println("HomePage title - " + title);
        Assert.assertEquals("Facebook - Log In or Sign Up", title);

    }


    @Then("^close the browser$")
    public void close_the_browser() throws InterruptedException {
        Thread.sleep(1000);
        driver.quit();
    }

}
