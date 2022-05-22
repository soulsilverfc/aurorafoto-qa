Feature: Test Blog
 
    Test Blog

    @test-014
    Scenario: Check page blog
    Given The user is on the home page
    When Load web
    Then The user click nav blog
    Given The user is on the blog page
    When Check blog page