@All
Feature: DuckDuckGo Search

  @T01
  Scenario: Visiting the frontpage
    When I visit duckduckgo.com
    Then I should see a search bar

  @T02
  Scenario: Performing a search
    When I visit duckduckgo.com
    Then I search something
