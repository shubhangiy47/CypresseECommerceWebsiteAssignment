class login {
    username() {
        return cy.get('input#loginFrm_loginname')
    }

    password() {
        return cy.get('input#loginFrm_password')
    }

    loginBtn() {
        return cy.get('button').contains('Login')
    }
}
export default login