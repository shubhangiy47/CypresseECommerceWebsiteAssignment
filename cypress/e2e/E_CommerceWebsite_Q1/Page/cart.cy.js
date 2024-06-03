class cart {
    productPresenceInCart(productname) {
        return cy.get('form#cart')
        .find('table')
        .find('tr')
        .find('td')
        .find('a')
        .contains(productname)
    }

    checkoutbutton() {
        return cy.get('a').contains('Checkout')
    }

    checkoutConfirmationText() {
        return cy.contains('Checkout Confirmation')
    }

    confirmOrderButton()
    {
        return cy.get('button[title="Confirm Order"]')
    }

    orderConfirmationText(){
        return cy.get('span.maintext');
    }
}
export default cart