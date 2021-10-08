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
  "status": "passed"
});
formatter.step({
  "name": "Spend \u0026 Save Plans page displays Aspiration card",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.spend_Save_Plans_page_displays_Aspiration_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spend \u0026 Save Plans page displays Aspiration Plus card",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.spend_Save_Plans_page_displays_Aspiration_Plus_card()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Get Aspiration button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.user_clicks_on_Get_Aspiration()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an input field for an email address to sign up appears",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.an_input_field_for_an_email_address_to_sign_up_appears()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Get Aspiration Plus",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.user_clicks_on_Get_Aspiration_Plus()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A modal with monthly and yearly plans appears",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.a_modal_with_monthly_and_yearly_plans_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "yearly radio option is 71.88 paid once yearly",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.yearly_radio_option_is_yearlyAmount_paid_once_yearly(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "monthly radio option is 7.99 paid monthly",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AspirationProductsValidations.monthly_radio_option_is_monthlyAmount_paid_monthly(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});