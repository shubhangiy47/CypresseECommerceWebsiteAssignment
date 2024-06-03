Feature: Buy items on e-commerce webiste

  I want to log into my account
  I want to select product on three criteria
  I want to add to cart
  I want to checkout and confirm order

  @e2e
  Scenario Outline: Login and add products to cart
    Given User lauches the e-commerce website
    When User logins in with username and password
    Then User should see text " My Account" and username "test fn"
    And User adds a product "<product1>" of category "<category1>" to the cart
    Then User should see "<product1>" in the cart
    And User adds a product "<product2>" of category "<category2>" to the cart
    Then User should see "<product2>" in the cart
    And User adds a product "<product3>" of category "<category3>" to the cart
    Then User should see "<product3>" in the cart
    And User should able to checkout the cart

    Examples:
      | category1 | product1                | category2 | product2                              | category3 | product3                  |
      | Makeup    | Skinsheen Bronzer Stick | fragrance | ck IN2U Eau De Toilette Spray for Him | shampoo   | Curls to straight Shampoo |
