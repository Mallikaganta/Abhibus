Feature: Abhibus Home Page Functionality
 @Abhibus
  Scenario: Search for buses and verify details
    Given I open the Abhibus website
    Then I expect the Abhibus logo to be visible
    Then I select "Hyderabad" in the "From Station" in the dropdown
    And I select "Chennai" in the "To Station" from the dropdown
    And I select the date "30" in Onward Journey Date
    And I click the search button
    Then I expect to see "Showing 29 Buses on this route"
    Then I click on "Bus Partner" and I select bus operators "1" and "2"
    Then I expect to see "Showing 3 Buses on this route" after filter
    And I expect the bus operator name to be visible
    And I expect the departure time "19:30" to be visible
    And I expect the arrival time "07:30" to be visible
    And I expect the fare "2,730" to be visible