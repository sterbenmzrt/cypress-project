/// <reference types="cypress" />
import {Register} from '../Helper/step';

const regist = new Register();

describe('Register Testing', () => {

    beforeEach(() =>{

        cy.visit('https://naveenautomationlabs.com/opencart')

    });

    it('Register with Valid Credentials', () => {

        regist.registerWithValidCredentials();

    });

    it('Register with same email', () => {

        regist.registerWithSameEmail();
    });

    it('Register with different password', () => {

        regist.registerWithDifferentPassword();
    });

    it('Register with Blank First Name', () => {

        regist.registerWithBlankFirstName();
    });

    it('Register with Blank Last Name', () => {

        regist.registerWithBlankLastName(); 
    });

    it('Register with Blank Password', () => {

        regist.registWithBlankPassword(); 

    });

    it('Register with Blank Email', () => {

        regist.registWithBlankEmail();
    });

    it('Register with Blank Telephone Number', () => {

        regist.registerWithBlankTelephone();

    });

    it('Register without Check Term and Conditions', () =>{

        regist.registerWithoutCheckTermConditions();

    });
});