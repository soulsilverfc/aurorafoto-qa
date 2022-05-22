require('cypress-xpath')

class shopPage
{
    tdCarnet() { return cy.get('[data-cy="carnet"]') }
    tdTalleres() { return cy.get('[data-cy="talleres"]') }
    tdRestauraciones() { return cy.get('[data-cy="restauraciones"]') }
    tdRegalosPersonalizados() { return cy.get('[data-cy="regalos-personalizados"]') }
    tdAlbumes() { return cy.get('[data-cy="albumes"]') }
    tdReveladoAnalogico() { return cy.get('[data-cy="revelado-analogico"]') }
    tdImpresiones() { return cy.get('[data-cy="impresiones"]') }
    
}
export default shopPage;