Feature: Abhibus Home Page Functionality
 @Abhibus
  Scenario: Search for buses and verify details
    Given I open the Abhibus website
    Then I expect the Abhibus logo to be visible
    When I click on "From Station" input
    And I fill in "Hyderabad" in the "From Station" input
    And I select "Hyderabad" from the dropdown
    And I click on "To Station" input
    And I fill in "Chennai" in the "To Station" input
    And I select "Chennai" from the dropdown
    And I click on "Onward Journey Date" input
    And I select the date "30"
    And I click the search button
    Then I expect to see "Showing 29 Buses on this route"
    When I click on "Bus Partner"
    And I select bus operators "1" and "2"
    Then I expect to see "Showing 3 Buses on this route"
    And I expect the bus operator name to be visible
    And I expect the departure time "19:30" to be visible
    And I expect the arrival time "07:30" to be visible
    And I expect the fare "2,730" to be visible