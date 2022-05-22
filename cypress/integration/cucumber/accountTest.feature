Feature: Test Account
 
    Test Account

    @test-015
    Scenario: Check page account
    Given The user is on the home page
    When Load web
    Then The user click nav account
    Given The user is on the account page
    When Check account page