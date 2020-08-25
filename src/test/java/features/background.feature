Feature: Test Background Feature
# common steps are kept in Background feature which are repeated for every scenario
# in the feature file.

  Background: To  check the usage of background feature
    Given user is already on login page
    When title page is facebook
    Then user enters "<sreekarreddy345>" and "<SuShm>"
    Then user clicks on login button
    Then user is on Home page
    Then close the browser