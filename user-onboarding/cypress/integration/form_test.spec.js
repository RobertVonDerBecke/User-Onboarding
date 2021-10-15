////write test here
describe('New User Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    const textInput = () => cy.get('input[name=firstName]')
    const textLastInput = () => cy.get('input[name=lastName]')
    const emailInput = () => cy.get('input[name=email]')
    const passInput = () => cy.get('input[name=password]')
    const checkBox = () => cy.get('[type="checkbox"]')
    const submitBtn = () => cy.get('button');
    const errorDiv = () => cy.get('.errors');
    //test tests
    it('sanity check to make sure test work', () => {
        //its a test
        //expect is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })
    it('Check if name input can receive input', () => {
        textInput().should('exist')
            .type('Robert V')
            .should('have.value', 'Robert V')

    })
    it('Check if the email field does stuff', () => {
        emailInput().should('exist')
            .type('robertvphd@gmail.com')
            .should('have.value', 'robertvphd@gmail.com')
    })
    it('Check if the password field does stuff', () => {
        passInput().should('exist')
            .type('santaluvshoes')
            .should('have.value', 'santaluvshoes')
    })
    it('Check if the check box get check ed by the code check er', () => {
        checkBox().should('exist')
            .check()
            .should('be.checked')
    })
    it('Check to see if the form submits', () => {
        textInput().type('Robert');
        textLastInput().type('Von Der Becke');
        emailInput().type('robertvphd@gmail.com');
        passInput().type('santaluvshoes');
        checkBox().check();
        submitBtn().click();
        textLastInput().should('have.value', '');
    })
    describe('Check for validation message', () => {
        it('Test for validation message', () => {
            textInput().type('hi');
            errorDiv().siblings().should('be.visible');

        })
    })
})