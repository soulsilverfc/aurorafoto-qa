Feature: Test About Us
 
    Test About Us

    @test-012
    Scenario: Check page about us
    Given The user is on the home page
    When Load web
    Then The user click nav about us
    Given The user is on the about us page
    When Check page about us

    @test-013
    Scenario: Check page contact us
    Given The user is on the home page
    When Load web
    Then The user click nav contact us
    Given The user is on the contact us page
    When Check page contact us