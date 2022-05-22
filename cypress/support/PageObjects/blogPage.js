require('cypress-xpath')

class blogPage
{
    containerTextsRedesSociales() { return cy.get('.widget-title') }
}
export default blogPage;