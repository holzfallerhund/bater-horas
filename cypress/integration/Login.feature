Feature: Login

    I want to check if login is working

    Background:
        Given I go to 'http://localhost:8080'

    Scenario: I unable to login because is disabled without fill fields
        Then I should see the button 'login' disabled

    Scenario: I should login and go to dashboard
        When I type 'osmarpetry@gmail.com' in 'email'
        And I type '123456' in 'password'
        And I click in 'login'
        Then I should see 'Horário'

    Scenario: I ask for new password
        When I click in link 'forget-password'
        Then I should see 'Troque a sua senha'
        When I type 'osmarpetry@gmail.com' in 'email'
        And I click in 'send-password'
        Then I should see 'email' empty

    # TODO: Use a admin SDK to delete user before try to recreate to test
    #Scenario: I create new user and should be logged in
    #    When I click in link 'sign-up'
    #    And I type 'username@email.com' in 'email'
    #    And I type 'username' in 'username'
    #    And I type '123456' in 'passwordOne'
    #    And I type '123456' in 'passwordTwo'
    #    And I click in 'sign-up'
    #    And I wait '3' seconds
    #    And I click in link 'logo'
    #    Then I should see 'Horário'