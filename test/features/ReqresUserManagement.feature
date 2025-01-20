Feature: Complete user lifecycle management
    As a system administrator
    I want to manage users in the platform
    In order to maintain an updated user database

    Scenario Outline: successful user creation
        # Create user
        When I create a new user with "<name>" "<job>"
        Then the response should have status code 201
        And the response should contain the created user ID

        Examples:
            | name     | job    |
            | morpheus | leader |

    Scenario: successful user query
        # Get created user
        When I request the user details using the ID 2
        Then the response should have status code 200
        And the user data should be correct

    Scenario Outline: successful user update
        # Update user
        When I update the user data using the ID 2 "<newname>" "<newjob>"
        Then the response should have status code 200
        And the response data should be correct "<newname>" "<newjob>"

        Examples:
            | name     | job           |
            | morpheus | zion resident |

    Scenario: successful delete user
        # Delete user
        When I delete the user using the ID 2
        Then the response should have status code 204

# Scenario: verify user deletion
#     # Verify deletion
#     When I request the deleted user details
#     Then the response should have status code 404
