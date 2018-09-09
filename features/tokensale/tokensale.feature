Feature: TokenSale website checks
  I should be able to go tokensale.melior.ai
  and check its title, links and downloads

Scenario: Get the title of webpage
  Given I go to the website "https://www.tokensale.melior.ai"
  Then I expect the title of the page to be "www.tokensale.melior.ai"

Scenario: Check the whitelist button
    Given I go to the website "https://tokensale.melior.ai"
    When I click a button of "btn-whitelisted" class
    When I wait for "3" seconds
    When I switch to the tab number 2
    Then I expect the url of the page to be "https://tokensale.melior.ai/login"

Scenario: Check the link to MILA's description
    Given I go to the website "https://tokensale.melior.ai"
    When I follow the link "MILA"
    When I wait for "2" seconds
    Then I expect the url of the page to be "https://melior.ai/?mila"

Scenario: Check the link to MAX's description
    Given I go to the website "https://tokensale.melior.ai"
    When I follow the link "MAX"
    When I wait for "2" seconds
    Then I expect the url of the page to be "https://melior.ai/?max"

Scenario: Check the link to MINNIE's description
    Given I go to the website "https://tokensale.melior.ai"
    When I follow the link "MINNIE"
    When I wait for "2" seconds
    Then I expect the url of the page to be "https://melior.ai/?minnie"

Scenario: Check the download links for the whitepaper
    Given I go to the website "https://tokensale.melior.ai"
    When I download the "Full Whitepaper" whitepaper
    Then I expect the md5 of the pdf "Full Whitepaper.pdf" to be "c3abd154a4a2dcf1204d8f7b0bfdbee4"

Scenario: Check the download links for the technical summary
    Given I go to the website "https://tokensale.melior.ai"
    When I download the "Technical Summary" whitepaper
    Then I expect the md5 of the pdf "Technical Summary.pdf" to be "3ba67bff9f2b180e18d75a54ce9e5c46"

Scenario: Check the download links for the token economics
    Given I go to the website "https://tokensale.melior.ai"
    When I download the "Token Economics" whitepaper
    Then I expect the md5 of the pdf "Token Economics.pdf" to be "c0072487e7877e86958915094910a90f"

Scenario: Check the download links for the Executive Summary
    Given I go to the website "https://tokensale.melior.ai"
    When I download the "Executive Summary" whitepaper
    Then I expect the md5 of the pdf "Executive Summary.pdf" to be "c7aabd301310631690e811c515a08855"


