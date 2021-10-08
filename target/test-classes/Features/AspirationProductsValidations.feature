#Author: 				erasmo.m.sosa@gmail.com
#Date:					2021-10-05
#Description:		Test for Xebia application
@XebiaFeature
Feature: Feature to Verify that as a user, they can view our products and prices
  						by navigating from the home page to our products page via 
  						the “Spend & Save” link at the top of the home page

  @XebiaTest
  Scenario: Verify that you see 2 card products,
    			Aspiration and Aspiration Plus

    Given User navigates to the Aspiration website
    When User clicks on Spend & Save link
    Then Spend & Save Plans page displays Aspiration card
    And Spend & Save Plans page displays Aspiration Plus card

  @XebiaTest
  Scenario: Verify that when you click Get Aspiration - A modal 
  containing an input field for an email address to sign up 
  appears. You do not need to sign up.

	Given User navigates to the Aspiration website
    And User clicks on Spend & Save link
    When User clicks on Get Aspiration button
    Then an input field for an email address to sign up appears

  @XebiaTest
  Scenario Outline: Verify that when you click Get Aspiration Plus - A 
  modal with monthly and yearly plans appears

	Given User navigates to the Aspiration website
    And User clicks on Spend & Save link
    When User clicks on Get Aspiration Plus
    Then A modal with monthly and yearly plans appears
    And yearly radio option is <yearlyAmount> paid once yearly
    And monthly radio option is <monthlyAmount> paid monthly

    Examples: 
      | yearlyAmount | monthlyAmount  |
      | 71.88       | 7.99          |
