class landingPage {
    pageBanner() {
        return cy.get('img[title="Automation Test Store"]')
    }

    loginOrRegisterButton() {
        return cy.get('a').contains('Login or register')
    }
}

export default landingPage