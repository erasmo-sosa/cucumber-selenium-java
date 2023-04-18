$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/AspirationProductsValidations.feature");
formatter.feature({
  "name": "Feature to Verify that as a user, they can view our products and prices",
  "description": "  \t\t\t\t\t\tby navigating from the home page to our products page via \n  \t\t\t\t\t\tthe �Spend \u0026 Save� link at the top of the home page",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@XebiaFeature"
    }
  ]
});
formatter.scenario({
  "name": "Verify that you see 2 card products,",
  "description": "    \t\t\tAspiration and Aspiration Plus",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@XebiaFeature"
    },
    {
      "name": "@XebiaTest"
    }
  ]
});
formatter.step({
  "name": "User navigates to the Aspiration website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.user_navigates_to_the_Aspiration_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Spend \u0026 Save link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.user_clicks_on_Spend_Save_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[@href\u003d\u0027https://www.aspiration.com/our-products\u0027])[1]\"}\n  (Session info: chrome\u003d112.0.5615.49)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027localhost\u0027, ip: \u00272601:c6:cc00:9820:0:0:0:5def%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027aarch64\u0027, os.version: \u002713.0.1\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d111.0.5563.64 (c710e93d5b63b7095afe8c2c17df34408078439d-refs/branch-heads/5563@{#995}), userDataDir\u003d/var/folders/vc/xgn6m6q97cv67v4j3jscylr00000gn/T/.com.google.Chrome.TjYbac}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:60098}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d112.0.5615.49, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dmac os x, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 02fec851c2baff82c5d91b60b2b469d3\n*** Element info: {Using\u003dxpath, value\u003d(//a[@href\u003d\u0027https://www.aspiration.com/our-products\u0027])[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat AspirationPages.AspirationMain.SpendSaveLnk(AspirationMain.java:26)\n\tat StepDefinitions.AspirationProductsValidations.user_clicks_on_Spend_Save_link(AspirationProductsValidations.java:59)\n\tat ✽.User clicks on Spend \u0026 Save link(file:///Users/erasmososa/workspace/java/cucumber-selenium-java/src/test/resources/Features/AspirationProductsValidations.feature:14)\n",
  "status": "failed"
});
formatter.step({
  "name": "Spend \u0026 Save Plans page displays Aspiration card",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.spend_Save_Plans_page_displays_Aspiration_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Spend \u0026 Save Plans page displays Aspiration Plus card",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.spend_Save_Plans_page_displays_Aspiration_Plus_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that when you click Get Aspiration - A modal",
  "description": "  containing an input field for an email address to sign up \n  appears. You do not need to sign up.",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@XebiaFeature"
    },
    {
      "name": "@XebiaTest"
    }
  ]
});
formatter.step({
  "name": "User navigates to the Aspiration website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.user_navigates_to_the_Aspiration_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Spend \u0026 Save link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.user_clicks_on_Spend_Save_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to send message to renderer\n  (failed to check if window was closed: disconnected: not connected to DevTools)\n  (Session info: chrome\u003d112.0.5615.49)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027localhost\u0027, ip: \u00272601:c6:cc00:9820:0:0:0:5def%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027aarch64\u0027, os.version: \u002713.0.1\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d111.0.5563.64 (c710e93d5b63b7095afe8c2c17df34408078439d-refs/branch-heads/5563@{#995}), userDataDir\u003d/var/folders/vc/xgn6m6q97cv67v4j3jscylr00000gn/T/.com.google.Chrome.fzk7dN}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:60278}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d112.0.5615.49, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dmac os x, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: ebb2eac7d8f1161000e142817587821c\n*** Element info: {Using\u003dxpath, value\u003d(//a[@href\u003d\u0027https://www.aspiration.com/our-products\u0027])[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat AspirationPages.AspirationMain.SpendSaveLnk(AspirationMain.java:26)\n\tat StepDefinitions.AspirationProductsValidations.user_clicks_on_Spend_Save_link(AspirationProductsValidations.java:59)\n\tat ✽.User clicks on Spend \u0026 Save link(file:///Users/erasmososa/workspace/java/cucumber-selenium-java/src/test/resources/Features/AspirationProductsValidations.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on Get Aspiration button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.user_clicks_on_Get_Aspiration()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an input field for an email address to sign up appears",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.an_input_field_for_an_email_address_to_sign_up_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Verify that when you click Get Aspiration Plus - A",
  "description": "  modal with monthly and yearly plans appears",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@XebiaTest"
    }
  ]
});
formatter.step({
  "name": "User navigates to the Aspiration website",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on Spend \u0026 Save link",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Get Aspiration Plus",
  "keyword": "When "
});
formatter.step({
  "name": "A modal with monthly and yearly plans appears",
  "keyword": "Then "
});
formatter.step({
  "name": "yearly radio option is \u003cyearlyAmount\u003e paid once yearly",
  "keyword": "And "
});
formatter.step({
  "name": "monthly radio option is \u003cmonthlyAmount\u003e paid monthly",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "yearlyAmount",
        "monthlyAmount"
      ]
    },
    {
      "cells": [
        "71.88",
        "7.99"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that when you click Get Aspiration Plus - A",
  "description": "  modal with monthly and yearly plans appears",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@XebiaFeature"
    },
    {
      "name": "@XebiaTest"
    }
  ]
});
formatter.step({
  "name": "User navigates to the Aspiration website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.user_navigates_to_the_Aspiration_website()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d112.0.5615.49)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027localhost\u0027, ip: \u00272601:c6:cc00:9820:0:0:0:5def%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027aarch64\u0027, os.version: \u002713.0.1\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d111.0.5563.64 (c710e93d5b63b7095afe8c2c17df34408078439d-refs/branch-heads/5563@{#995}), userDataDir\u003d/var/folders/vc/xgn6m6q97cv67v4j3jscylr00000gn/T/.com.google.Chrome.a2UiOE}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:60564}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d112.0.5615.49, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dmac os x, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 7e182e4ea465f395dd21d59e14bcc3e4\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:368)\n\tat StepDefinitions.AspirationProductsValidations.user_navigates_to_the_Aspiration_website(AspirationProductsValidations.java:53)\n\tat ✽.User navigates to the Aspiration website(file:///Users/erasmososa/workspace/java/cucumber-selenium-java/src/test/resources/Features/AspirationProductsValidations.feature:32)\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on Spend \u0026 Save link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.user_clicks_on_Spend_Save_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Get Aspiration Plus",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.user_clicks_on_Get_Aspiration_Plus()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A modal with monthly and yearly plans appears",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.a_modal_with_monthly_and_yearly_plans_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "yearly radio option is 71.88 paid once yearly",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.yearly_radio_option_is_yearlyAmount_paid_once_yearly(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "monthly radio option is 7.99 paid monthly",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.monthly_radio_option_is_monthlyAmount_paid_monthly(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});