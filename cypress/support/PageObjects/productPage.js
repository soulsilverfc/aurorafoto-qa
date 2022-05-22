require('cypress-xpath')

class productPage
{
    liCarnet() { return cy.get('.products li') }
    liImpresiones() { return cy.get('.product_item_inner') }
    titleProduct() { return cy.get('.product_infos > .product_title') }
    uploadImage() { return cy.get('.wcuf_upload_fields_row_element') }
    titleCheck() { return cy.get('[data-cy="title"]') }
    titleNivel1Check() { return cy.get('[data-cy="titleNivel1"]') }
    titleNivel2Check() { return cy.get('[data-cy="titleNivel2"]') }
    titleNivel3Check() { return cy.get('[data-cy="titleNivel3"]') }
}
export default productPage;