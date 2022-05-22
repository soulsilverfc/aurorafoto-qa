Feature: Test Home Page
 
    Test home page
    
    @test-001
    Scenario: Check elements navs
    Given The user is on the home page
    When Load web 10s
    Then Check elements navs

    @test-002
    Scenario: Check aviso legal
    Given The user is on the home page
    When Load web
    Then Click and check aviso legal

    @test-003
    Scenario: Check politica de privacidad
    Given The user is on the home page
    When Load web
    Then Click and check politica de privacidad

    @test-004
    Scenario: Check politica de cookies
    Given The user is on the home page
    When Load web
    Then Click and check politica de cookies