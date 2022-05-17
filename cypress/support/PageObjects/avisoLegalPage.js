require('cypress-xpath')

class avisoLegalPage
{
    containerTexts() { return cy.get('.content_wrapper') }
}
export default avisoLegalPage;