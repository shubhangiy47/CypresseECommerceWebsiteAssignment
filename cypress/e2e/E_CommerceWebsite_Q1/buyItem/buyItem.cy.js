import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Login from '../Page/login.cy'
import LandingPage from '../Page/landingPage.cy'
import Product from '../Page/product.cy'
import Cart from '../Page/cart.cy'

const login = new Login()
const loginPage = new LandingPage()
const product = new Product()
const cart = new Cart()

Given('User lauches the e-commerce website', () => {
  cy.visit(Cypress.env("baseUrl"))
  cy.title().should('eq', 'A place to practice your automation skills!')
  loginPage.pageBanner().should('be.visible')
});

//Login into application with user details
When('User logins in with username and password', () => {
  loginPage.loginOrRegisterButton().should('be.visible')
  loginPage.loginOrRegisterButton().click()
  cy.fixture('userLoginDetails').then((user) => {
    login.username().type(user.username);
    login.password().type(user.password);
  })
  login.loginBtn().should('be.visible').click();
});

//Checks user has successfully logged in
Then('User should see text {string} and username {string}', (text, username) => {
  cy.contains(text, { timeout: 1000 }).should('be.visible').should('have.text',text)
  cy.contains(username).should('be.visible')
});

//Add product to cart
When('User adds a product {string} of category {string} to the cart', (productname, productcategory) => {
  product.searchText().type(productcategory)
  product.searchbutton().click()
  product.selectProduct(productname).should('be.visible').scrollIntoView()
  product.selectProduct(productname).click()
  product.addToCartButton().click();
});

//Check product is successfully added to the cart
Then('User should see {string} in the cart', (productname) => {
  cart.productPresenceInCart(productname).should('be.visible').should('have.text', productname)
});

//Checkout products from cart
Then('User should able to checkout the cart', () => {
  cart.checkoutbutton().scrollIntoView()
  cart.checkoutbutton().click({ force: true })
  cart.checkoutConfirmationText().should('be.visible')
  cart.confirmOrderButton().should('be.visible').click()
  cart.orderConfirmationText().should('have.text', ' Your Order Has Been Processed!')
});
