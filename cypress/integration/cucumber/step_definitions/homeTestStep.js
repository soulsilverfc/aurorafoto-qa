import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import "cypress-real-events/support";
import HomePage from "../../../support/PageObjects/homePage";
import AvisoLegalPage from "../../../support/PageObjects/avisoLegalPage";
require('cypress-xpath')
const homePage = new HomePage()
const avisoLegalPage = new AvisoLegalPage()

Given('The user is on the home page', () => {
    cy.visit('https://aurorafoto.es')
})

When('Load web 10s', ()=>{
    cy.title().should('eq', 'AuroraFoto')
    cy.wait(10000)
    homePage.slider().realHover().should('be.visible')
})

When('Load web', ()=>{
    cy.title().should('eq', 'AuroraFoto')
})

Then('Check elements navs',()=>{
    homePage.navTienda().should('be.visible').realHover({ pointer:"mouse",position:"bottomLeft" })
    homePage.navTiendaFotosCarnet().should('be.visible')
    homePage.navTiendaImpresiones().should('be.visible')
    homePage.navTiendaRestauraciones().should('be.visible')
    homePage.navTiendaRegalosPersonales().should('be.visible')
    homePage.navTiendaAlbumesComuniones().should('be.visible')
    homePage.navTiendaReveladoAnalogico().should('be.visible')
    homePage.navTiendaTalleres().should('be.visible')
    homePage.slider().realHover()
    homePage.navSobreNosotros().should('be.visible').realHover({ position: "bottomLeft" })
    homePage.navSobreNosotrosContactar().should('be.visible')
    homePage.slider().realHover()
    homePage.navBlog().should('be.visible')
    homePage.navMiCuenta().should('be.visible')
    homePage.navAvisoLegal().should('be.visible')
    homePage.navAvisoLegal().should('be.visible')
    homePage.navPoliticaPrivacidad().should('be.visible')
})

Then('Click and check aviso legal',()=>{
    homePage.navAvisoLegal().should('be.visible').click()
    cy.url().should('include', '/aviso-legal/')
    cy.title().should('contains', 'Aviso legal')
    avisoLegalPage.containerTexts().should('contain', 'DATOS IDENTIFICATIVOS DEL TITULAR DEL SITIO WEB')
    cy.wait(2000)
    avisoLegalPage.containerTexts().scrollIntoView({ offset: { top:2500, left: 0 },duration: 10000 })
    cy.wait(2000)
    avisoLegalPage.containerTexts().then(($items) => {
        expect($items).to.contain('NOTIFICACIONES');
        expect($items).to.contain('JURISDICCIÓN');
        expect($items).to.contain('LEGISLACIÓN APLICABLE');
    });
})

Then('Click and check politica de privacidad',()=>{
    homePage.navPoliticaPrivacidad().should('be.visible').click()
    cy.url().should('include', '/privacidad/')
    cy.title().should('contains', 'Política de privacidad')
    avisoLegalPage.containerTexts().should('contain', 'INTRODUCCIÓN')
    cy.wait(2000)
    avisoLegalPage.containerTexts().scrollIntoView({ offset: { top:2500, left: 0 },duration: 10000 })
    cy.wait(2000)
    avisoLegalPage.containerTexts().should('contain', 'DERECHOS DE LOS INTERESADOS')
})

Then('Click and check politica de cookies',()=>{
    homePage.navPoliticaCookies().should('be.visible').click()
    cy.url().should('include', '/cookies/')
    cy.title().should('contains', 'Política de cookies')
    avisoLegalPage.containerTexts().should('contain', 'Este sitio utiliza cookies')
    cy.wait(2000)
    avisoLegalPage.containerTexts().scrollIntoView({ offset: { top:2500, left: 0 },duration: 10000 })
    cy.wait(2000)
    avisoLegalPage.containerTexts().should('contain', 'Actualizaciones y modificaciones en la política de cookies')
})