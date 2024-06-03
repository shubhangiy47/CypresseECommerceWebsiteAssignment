Cypress.Commands.add('login', ({username,password}) => {
    cy.get('form').eq(2).within(($form) => {
        cy.get('input[name="loginname"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.root().submit()
    })

})