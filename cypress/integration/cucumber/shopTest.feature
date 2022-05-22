Feature: Test Shop
 
    Test Shop
    
    @test-004
    Scenario: Check elements shop
    Given The user is on the home page
    When Load web
    Then Check elements shop

    @test-005
    Scenario: Check page carnet
    Given The user is on the home page
    When Load web
    Then Check elements shop
    Given The user is on the carnet page
    When Check carnet and select one product
    Then Is Ok product

    @test-006
    Scenario: Check page talleres
    Given The user is on the home page
    When Load web
    Then Check elements shop
    Given The user is on the talleres page
    When Check talleres

    @test-007
    Scenario: Check page restauraciones
    Given The user is on the home page
    When Load web
    Then Check elements shop
    Given The user is on the restauraciones page
    When Check restauraciones

    @test-008 @incompleto
    Scenario: Check page regalos personalizados
    Given The user is on the home page
    When Load web
    Then Check elements shop
    Given The user is on the regalos personalizados page
    When Check regalos personalizados

    @test-009
    Scenario: Check page Albumes
    Given The user is on the home page
    When Load web
    Then Check elements shop
    Given The user is on the albumes page
    When Check albumes

    @test-010
    Scenario: Check page revelado analogico
    Given The user is on the home page
    When Load web
    Then Check elements shop
    Given The user is on the revelado analogico page
    When Check revelado analogico

    @test-011
    Scenario: Check page impresiones
    Given The user is on the home page
    When Load web
    Then Check elements shop
    Given The user is on the impresiones page
    When Check impresiones and select one product
    Then Is Ok product impresiones