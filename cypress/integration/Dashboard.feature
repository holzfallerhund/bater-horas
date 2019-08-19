Feature: Dashboard

    I want to check if dashboad is working

    Scenario: Login
        Given I go to 'http://localhost:8080'
        When I type 'osmarpetry@gmail.com' in 'email'
        And I type '123456' in 'password'
        And I click in 'login'
        Then I should see 'Horário'

    Scenario: I do a a endpoint
        Given I'm in '2019'-'08'-'19' '19':'20'
        And I go to 'http://localhost:8080'
        When I click in link 'do-handpoint'
        Then I should see '2019-09-19 16:20:00'

    Scenario: Do other Handpoint
        Given I'm in '2019'-'08'-'19' '20':'50'
        And I go to 'http://localhost:8080'
        When I click in link 'do-handpoint'
        Then I should see '2019-09-19 17:50:00'
        And I should see '1.5 horas'
        Then I click in link 'exit'
