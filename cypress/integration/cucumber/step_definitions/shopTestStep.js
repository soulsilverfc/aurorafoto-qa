import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import "cypress-real-events/support";
import HomePage from "../../../support/PageObjects/homePage";
import AvisoLegalPage from "../../../support/PageObjects/avisoLegalPage";
import ShopPage from "../../../support/PageObjects/shopPage";
import ProductPage from "../../../support/PageObjects/productPage";
require('cypress-xpath')
const homePage = new HomePage()
const avisoLegalPage = new AvisoLegalPage()
const shopPage = new ShopPage()
const productPage = new ProductPage()

Then('Check elements shop', () => {
    homePage.navTienda().should('be.visible').click()
    cy.url().should('include', '/tienda/')
    cy.title().should('contains', 'Tienda')
    shopPage.tdCarnet().should('be.visible')
    shopPage.tdImpresiones().should('be.visible')
    shopPage.tdTalleres().should('be.visible')
    shopPage.tdRestauraciones().should('be.visible')
    shopPage.tdRegalosPersonalizados().should('be.visible')
    shopPage.tdAlbumes().should('be.visible')
    shopPage.tdReveladoAnalogico().should('be.visible')
})

Given('The user is on the carnet page', () => {
    shopPage.tdCarnet().should('be.visible').click()
    cy.url().should('include', '/categoria-producto/carnet/')
    cy.title().should('contains', 'Fotos de carnet')
})

When('Check carnet and select one product', () => {
    productPage.liCarnet().should('have.length',3)
    productPage.liCarnet().first().click()
})

Then('Is Ok product', () => {
    productPage.titleProduct().should('have.text','8 Fotos de carnet')
    productPage.uploadImage().should('be.visible')
})

Given('The user is on the talleres page', () => {
    shopPage.tdTalleres().should('be.visible').first().click()
    cy.url().should('include', '/talleres/')
    cy.title().should('contains', 'Talleres')
})

When('Check talleres', () => {
    productPage.titleCheck()
        .should('have.text','Debido a la situación actual no podemos ofrecer el servicio de talleres. Lamentamos los inconvenientes.')
})

Given('The user is on the restauraciones page', () => {
    shopPage.tdRestauraciones().should('be.visible').first().click()
    cy.url().should('include', '/restauraciones/')
    cy.title().should('contains', 'Restauraciones')
})

When('Check restauraciones', () => {
    homePage.textContainer().scrollIntoView({ offset: { top:250, left: 0 },duration: 5000 })
    productPage.titleNivel1Check().should('have.text', 'Nivel 1 – Restauración Básica')
    productPage.titleNivel2Check().should('have.text', 'Nivel 2 – Restauración Media')
    productPage.titleNivel3Check().should('have.text', 'Nivel 3 – Restauración Alta')
})

Given('The user is on the albumes page', () => {
    shopPage.tdAlbumes().should('be.visible').first().click()
    cy.url().should('include', '/albumes/')
    cy.title().should('contains', 'Álbumes y comuniones')
})

When('Check albumes', () => {
    homePage.textContainer().scrollIntoView({ offset: { top:250, left: 0 },duration: 5000 })
    productPage.titleCheck()
        .should('have.text','Debido a la situación excepcional provocada por el COVID-19 nos vemos obligados a suspender el servicio de comuniones.')
})

Given('The user is on the revelado analogico page', () => {
    shopPage.tdReveladoAnalogico().should('be.visible').first().click()
    cy.url().should('include', '/revelado-analogico/')
    cy.title().should('contains', 'Revelado analógico')
})

When('Check revelado analogico', () => {
    homePage.textContainer().scrollIntoView({ offset: { top:250, left: 0 },duration: 5000 })
    productPage.titleCheck()
        .should('have.text','Lo retro vuelve a ser trendy. Revela tus carretes analógicos con nosotros y en menos de dos días tendrás disponibles las fotos.')
})

Given('The user is on the impresiones page', () => {
    shopPage.tdImpresiones().should('be.visible').first().click()
    cy.url().should('include', '/categoria-producto/impresiones/')
    cy.title().should('contains', 'Impresiones')
})

When('Check impresiones and select one product', () => {
    homePage.listProdutImpresiones().scrollIntoView({ offset: { top:300, left: 0 },duration: 5000 })
    productPage.liImpresiones()
        .should('have.length',9)
        .first()
        .click()
})

Then('Is Ok product impresiones', () => {
    productPage.titleProduct().should('have.text','Impresiones polaroid')
    productPage.uploadImage().should('be.visible')
})