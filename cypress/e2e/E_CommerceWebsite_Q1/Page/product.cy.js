class product {
    searchText() {
        return cy.get('input#filter_keyword')
    }

    searchbutton() {
        return cy.get('div[title="Go"]')
    }

    selectProduct(productname) {
        return cy.get(`a[title="${productname}"]`)
    }

    addToCartButton()
    {
        return cy.get('a').contains('Add to Cart')
    }
}
export default product