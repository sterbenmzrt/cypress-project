import {Locator} from './locator'

const locator = new Locator();

export class Method{

    tapNavbar(){

        cy.xpath(locator.navbar_Account).click()
        .should('be.visible');
    }

    tapRegister(){

        cy.xpath(locator.register).click()
        cy.contains('Register Account').should('be.visible');

    }

    tapLogin(){

        cy.xpath(locator.login).click();
        cy.contains('Returning Customer').should('be.visible');
    }

    inputFirstName(fName){

        cy.xpath(locator.input_firstname).type(fName)
        .should('be.visible').and('have.value',fName);
        expect(locator.input_firstname).to.be.a('string');
        
    }

    inputLastName(lName){

        cy.xpath(locator.input_lastname).type(lName)
        .should('be.visible').and('have.value',lName);
        expect(locator.input_lastname).to.be.a('string');
    }

    inputEmail(email){

        cy.xpath(locator.input_email).type(email)
        .should('be.visible').and('have.value',email);
        expect(locator.input_email).to.be.a('string');
    }

    inputTelephone(telephone){

        cy.xpath(locator.input_telephone).type(telephone)
        .should('be.visible').and('have.value',telephone);
        expect(locator.input_telephone).to.be.a('string');
    }

    inputPassword(password){

        cy.xpath(locator.input_password).type(password)
        .should('be.visible').and('have.value',password);
        expect(locator.input_password).to.be.a('string');
    }

    inputPassConfirmation(cPassword,password){

        cy.xpath(locator.input_confirmPass).type(cPassword)
        .should('be.visible').and('have.value',cPassword)
        expect(cPassword).to.be.a('string');
    }

    inputCheckbox(){

        cy.xpath(locator.input_checkbox).check()
        .should('be.checked')
    }

    inputbtnContinue(){

        cy.xpath(locator.input_btnContinue).click();

    }

    verifySuccessCreatedAccount(){

        cy.contains('Your Account Has Been Created!').should('be.visible');
    }

    verifySameEmail(){

        cy.xpath(locator.alert).should('be.visible').and('contain',' E-Mail Address is already registered!')
    }

    verifyDifferentPassword(){

        cy.xpath(locator.text_danger).should('be.visible').and('contain','Password confirmation does not match password!');
    }

    verifyBlankFirstName(){

        cy.xpath(locator.text_danger).should('be.visible').and('contain','First Name must be between 1 and 32 characters!');
    }

    verifyBlankLastName(){

        cy.xpath(locator.text_danger).should('be.visible').and('contain','Last Name must be between 1 and 32 characters!');
    }

    verifyBlankEmail(){

        cy.xpath(locator.text_danger).should('be.visible').and('contain','E-Mail Address does not appear to be valid!');
    }

    verifyBlankPassword(){

        cy.xpath(locator.text_danger).should('be.visible').and('contain','Password must be between 4 and 20 characters!');
    }

    verifyBlankTelephoneNumber(){ 

        cy.xpath(locator.text_danger).should('be.visible').and('contain','Telephone must be between 3 and 32 characters!');
    }

    verifyTermandConditions(){

        cy.xpath(locator.alert).should('be.visible').and('contain','You must agree to the Privacy Policy!');
    }

    inputBtnLogin(){

        cy.xpath(locator.input_btnLogin).click().should('be.visible');
    }

    verifyLogin(){

        cy.contains('My Account').should('be.visible');
    }

    verifyLoginFalsePassword(){

        cy.xpath(locator.alert).should('be.visible').and('contain','No match for E-Mail Address and/or Password.');
    }

    verifyLoginMoreAttempts(){

        cy.xpath(locator.alert).should('be.visible').and('contain','Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
    }

    verifyDropdownLogout(){

        cy.xpath(locator.logout).should('be.visible');
    }  

    inputBtnLogout(){

        cy.xpath(locator.logout).click();
        cy.contains('You have been logged off your account').should('be.visible')
    }

    inputSearch(search){

        cy.xpath(locator.input_search).type(search).should('be.visible');
        //expect(search).to.be
    }

    inputBtnSearch(){

        cy.xpath(locator.input_btnSearch).click();
    }

    verifyLayoutProduct(){

        cy.xpath(locator.layout_product).should('be.visible');
        cy.xpath(locator.layout_product).should('have.class','product-thumb')
    }

    clickMacProduct(){

       cy.xpath(locator.macbook).click();
    }

    detailProduct(){

        cy.xpath(locator.detail_product).should('be.visible').and('contain','MacBook');
        cy.contains('Add to Cart').should('be.visible')
    }

    clickAddToCart(){

        cy.xpath(locator.button_cart).click();
    }

    verifySuccessAddToCart(){

        cy.xpath(locator.alert_success).should('be.visible').and('contain','Success: You have added MacBook to your shopping cart!')
    }
}

