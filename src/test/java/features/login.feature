Feature: Login to FaceBook

  Scenario : logging into facebook home page using Scenario
    Given user is already on login page
    When title page is facebook
    Then user enters "<aaa@gmail.com>" and "<????>"
    Then user clicks on login button
    Then user is on Home page
    Then close the browser


# Data driven can be achieved using Scenario Outline by passing the multiple row data in Examples
  @testt @INT
  Scenario Template: logging into facebook home page using Scenario Outlines
    Given user is already on login page
    When title page is facebook
    Then user enters "<username>" and "<password>"
    Then user clicks on login button
    Then user is on Home page
    Then close the browser

    Examples:
      | username   | password |
      | @gmail.com | aaa      |
      | @gmail.com | aaa      |