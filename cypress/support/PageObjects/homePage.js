require('cypress-xpath')

class homePage
{

    navTienda() { return cy.xpath("(//a[contains(text(),'Tienda')])[1]") }
    navTiendaFotosCarnet() { return cy.xpath("(//a[contains(text(),'Fotos de carnet')])[1]") }
    navTiendaImpresiones() { return cy.xpath("(//a[contains(text(),'Impresiones')])[1]") }
    navTiendaRestauraciones() { return cy.xpath("(//a[contains(text(),'Restauraciones')])[1]") }
    navTiendaRegalosPersonales() { return cy.xpath("(//a[contains(text(),'Regalos personales')])[1]") }
    navTiendaAlbumesComuniones() { return cy.xpath("(//a[contains(text(),'Álbumes y comuniones')])[1]") }
    navTiendaReveladoAnalogico() { return cy.xpath("(//a[contains(text(),'Revelado analógico')])[1]") }
    navTiendaTalleres() { return cy.xpath("(//a[contains(text(),'Talleres')])[1]") }
    navSobreNosotros() { return cy.xpath("(//a[contains(text(),'Sobre Nosotros')])[1]") }
    navSobreNosotrosContactar() { return cy.xpath("(//a[contains(text(),'Contactar')])[1]") }
    navBlog() { return cy.xpath("(//a[contains(text(),'Blog')])[1]") }
    navMiCuenta() { return cy.xpath("(//a[contains(text(),'Mi cuenta')])[1]") }
    navAvisoLegal() { return cy.xpath("(//a[contains(text(),'Aviso legal')])[1]") }
    navPoliticaPrivacidad() { return cy.xpath("(//a[contains(text(),'Política de privacidad')])[1]") }
    navPoliticaCookies() { return cy.xpath("(//a[contains(text(),'Política de cookies')])[1]") }
    slider() { return cy.get('.swiper-slide-active > .slider-content') }
}
export default homePage;