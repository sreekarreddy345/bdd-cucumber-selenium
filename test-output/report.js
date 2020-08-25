$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to FaceBook",
  "description": "\r\nScenario : logging into facebook home page using Scenario\r\n  Given user is already on login page\r\n  When title page is facebook\r\n  Then user enters \"\u003caaa@gmail.com\u003e\" and \"\u003c????\u003e\"\r\n  Then user clicks on login button\r\n  Then user is on Home page\r\n  Then close the browser",
  "id": "login-to-facebook",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 12,
      "value": "# Data driven can be achieved using Scenario Outline by passing the multiple row data in Examples"
    }
  ],
  "line": 14,
  "name": "logging into facebook home page using Scenario Outlines",
  "description": "",
  "id": "login-to-facebook;logging-into-facebook-home-page-using-scenario-outlines",
  "type": "scenario_outline",
  "keyword": "Scenario Template",
  "tags": [
    {
      "line": 13,
      "name": "@testt"
    },
    {
      "line": 13,
      "name": "@INT"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-to-facebook;logging-into-facebook-home-page-using-scenario-outlines;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "login-to-facebook;logging-into-facebook-home-page-using-scenario-outlines;;1"
    },
    {
      "cells": [
        "@gmail.com",
        "aaa"
      ],
      "line": 24,
      "id": "login-to-facebook;logging-into-facebook-home-page-using-scenario-outlines;;2"
    },
    {
      "cells": [
        "@gmail.com",
        "aaa"
      ],
      "line": 25,
      "id": "login-to-facebook;logging-into-facebook-home-page-using-scenario-outlines;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 424500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "logging into facebook home page using Scenario Outlines",
  "description": "",
  "id": "login-to-facebook;logging-into-facebook-home-page-using-scenario-outlines;;2",
  "type": "scenario",
  "keyword": "Scenario Template",
  "tags": [
    {
      "line": 13,
      "name": "@INT"
    },
    {
      "line": 13,
      "name": "@testt"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"@gmail.com\" and \"aaa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5335413600,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 80\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-VT78NR3\u0027, ip: \u0027192.168.29.157\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00870C83+1707139]\n\tOrdinal0 [0x007D68F1+1075441]\n\tOrdinal0 [0x0074DFC9+516041]\n\tOrdinal0 [0x006E0554+66900]\n\tOrdinal0 [0x006DCCE2+52450]\n\tOrdinal0 [0x006FBFD7+180183]\n\tOrdinal0 [0x006FBDDD+179677]\n\tOrdinal0 [0x006F9D4B+171339]\n\tOrdinal0 [0x006E1D4A+73034]\n\tOrdinal0 [0x006E2DC0+77248]\n\tOrdinal0 [0x006E2D59+77145]\n\tOrdinal0 [0x007EBB67+1162087]\n\tGetHandleVerifier [0x0090A966+508998]\n\tGetHandleVerifier [0x0090A6A4+508292]\n\tGetHandleVerifier [0x0091F7B7+594583]\n\tGetHandleVerifier [0x0090B1D6+511158]\n\tOrdinal0 [0x007E402C+1130540]\n\tOrdinal0 [0x007ED4CB+1168587]\n\tOrdinal0 [0x007ED633+1168947]\n\tOrdinal0 [0x00805B35+1268533]\n\tBaseThreadInitThunk [0x75EAF989+25]\n\tRtlGetAppContainerNamedObjectPath [0x777C74A4+228]\n\tRtlGetAppContainerNamedObjectPath [0x777C7474+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepdefinitions.LoginStepDefinition.user_is_already_on_login_page(LoginStepDefinition.java:34)\r\n\tat ✽.Given user is already on login page(./src/test/java/features/login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.title_page_is_facebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "@gmail.com",
      "offset": 13
    },
    {
      "val": "aaa",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 164900,
  "status": "passed"
});
formatter.before({
  "duration": 131900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "logging into facebook home page using Scenario Outlines",
  "description": "",
  "id": "login-to-facebook;logging-into-facebook-home-page-using-scenario-outlines;;3",
  "type": "scenario",
  "keyword": "Scenario Template",
  "tags": [
    {
      "line": 13,
      "name": "@INT"
    },
    {
      "line": 13,
      "name": "@testt"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"@gmail.com\" and \"aaa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 2720268100,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 80\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-VT78NR3\u0027, ip: \u0027192.168.29.157\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00870C83+1707139]\n\tOrdinal0 [0x007D68F1+1075441]\n\tOrdinal0 [0x0074DFC9+516041]\n\tOrdinal0 [0x006E0554+66900]\n\tOrdinal0 [0x006DCCE2+52450]\n\tOrdinal0 [0x006FBFD7+180183]\n\tOrdinal0 [0x006FBDDD+179677]\n\tOrdinal0 [0x006F9D4B+171339]\n\tOrdinal0 [0x006E1D4A+73034]\n\tOrdinal0 [0x006E2DC0+77248]\n\tOrdinal0 [0x006E2D59+77145]\n\tOrdinal0 [0x007EBB67+1162087]\n\tGetHandleVerifier [0x0090A966+508998]\n\tGetHandleVerifier [0x0090A6A4+508292]\n\tGetHandleVerifier [0x0091F7B7+594583]\n\tGetHandleVerifier [0x0090B1D6+511158]\n\tOrdinal0 [0x007E402C+1130540]\n\tOrdinal0 [0x007ED4CB+1168587]\n\tOrdinal0 [0x007ED633+1168947]\n\tOrdinal0 [0x00805B35+1268533]\n\tBaseThreadInitThunk [0x75EAF989+25]\n\tRtlGetAppContainerNamedObjectPath [0x777C74A4+228]\n\tRtlGetAppContainerNamedObjectPath [0x777C7474+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepdefinitions.LoginStepDefinition.user_is_already_on_login_page(LoginStepDefinition.java:34)\r\n\tat ✽.Given user is already on login page(./src/test/java/features/login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.title_page_is_facebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "@gmail.com",
      "offset": 13
    },
    {
      "val": "aaa",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 90800,
  "status": "passed"
});
});