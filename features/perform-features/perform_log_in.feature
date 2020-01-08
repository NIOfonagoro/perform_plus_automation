@test
Feature: title
    In order to test LogIn credential
    As a coach/admin/team manager/team leader/employee
    I want log in to all environments

    Scenario: Log In
        Given I go to the Perform environment
        When I enter valid Login credentials <email> <password>
        Then I should land on the Perform Homepage
    
    