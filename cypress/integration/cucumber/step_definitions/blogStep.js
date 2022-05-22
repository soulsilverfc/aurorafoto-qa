import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import "cypress-real-events/support";
import HomePage from "../../../support/PageObjects/homePage";
import AvisoLegalPage from "../../../support/PageObjects/avisoLegalPage";
import ShopPage from "../../../support/PageObjects/shopPage";
import ProductPage from "../../../support/PageObjects/productPage";
import AboutUsPage from "../../../support/PageObjects/aboutUsPage";
import BlogPage from "../../../support/PageObjects/blogPage";
require('cypress-xpath')
const homePage = new HomePage()
const avisoLegalPage = new AvisoLegalPage()
const shopPage = new ShopPage()
const productPage = new ProductPage()
const blogPage = new BlogPage()

Then('The user click nav blog', () => {
    homePage.navBlog().should('be.visible').click()
})

Given('The user is on the blog page', () => {
    cy.url().should('include', '/blog/')
    cy.title().should('contains', 'Blog')
})

When('Check blog page', () => {
    blogPage.containerTextsRedesSociales().should('have.text','Redes sociales')
})