import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import "cypress-real-events/support";
import HomePage from "../../../support/PageObjects/homePage";
import AvisoLegalPage from "../../../support/PageObjects/avisoLegalPage";
import ShopPage from "../../../support/PageObjects/shopPage";
import ProductPage from "../../../support/PageObjects/productPage";
import AboutUsPage from "../../../support/PageObjects/aboutUsPage";
import BlogPage from "../../../support/PageObjects/blogPage";
import AccountPage from "../../../support/PageObjects/accountPage";
require('cypress-xpath')
const homePage = new HomePage()
const avisoLegalPage = new AvisoLegalPage()
const shopPage = new ShopPage()
const productPage = new ProductPage()
const blogPage = new BlogPage()
const accountPage = new AccountPage()

Then('The user click nav account', () => {
    homePage.navMiCuenta().should('be.visible').click()
})

Given('The user is on the account page', () => {
    cy.url().should('include', '/mi-cuenta/')
    cy.title().should('contains', 'Mi cuenta')
})

When('Check account page', () => {
    cy.get('.entry-title').should('contain','Mi cuenta')
    accountPage.containerTexts()
        .should('contain','Acceder')
        .and('contain','Registrarse')
    
})