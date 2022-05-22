import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import "cypress-real-events/support";
import HomePage from "../../../support/PageObjects/homePage";
import AvisoLegalPage from "../../../support/PageObjects/avisoLegalPage";
import ShopPage from "../../../support/PageObjects/shopPage";
import ProductPage from "../../../support/PageObjects/productPage";
import AboutUsPage from "../../../support/PageObjects/aboutUsPage";
require('cypress-xpath')
const homePage = new HomePage()
const avisoLegalPage = new AvisoLegalPage()
const shopPage = new ShopPage()
const productPage = new ProductPage()
const aboutUsPage = new AboutUsPage()

Then('The user click nav about us', () => {
    homePage.navSobreNosotros().should('be.visible').realHover({ position: "bottomLeft" })
    homePage.navSobreNosotrosContactar().should('be.visible')
    homePage.navSobreNosotros().should('be.visible').click()
})

Given('The user is on the about us page', () => {
    cy.url().should('include', '/sobre-nosotros/')
    cy.title().should('contains', 'Sobre Nosotros')
})

When('Check page about us', () => {
    cy.get('.entry-title').should('contain','Sobre Nosotros')
    aboutUsPage.containerTexts().should('contain','Aurora').and('contain','Lourdes')
})

Then('The user click nav contact us', () => {
    homePage.navSobreNosotros().should('be.visible').realHover({ position: "bottomLeft" })
    homePage.navSobreNosotrosContactar().should('be.visible').click()
})

Given('The user is on the contact us page', () => {
    cy.url().should('include', '/contactar/')
    cy.title().should('contains', 'Contactar')
})

When('Check page contact us', () => {
    cy.get('.wpforms-title').should('contain','Contactar')
    cy.get('.wpb_map_wraper').should('be.visible')
})