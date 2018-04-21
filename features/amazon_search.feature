@amazon
Feature: Google search
  In order to retrieve search results that are relevant
  As a user
  I want to be able to enter a filter

  Background:
    Given I have opened Amazon

  @complete
  Scenario: Users can perform a search
    When I search for "Test Automation"
    Then I should see the results page
