import {Login} from '..//Helper/step'

const login = new Login();

describe('Login and Logout Testing', () => {

    beforeEach(() =>{

        cy.visit('https://naveenautomationlabs.com/opencart');
    })

    it('Login with Valid credentials', () => {

        login.loginWithValidCredentials();
    });

    it('Login with false password',()=>{

        login.loginWithFalsePassword();
    })

    it('Logout Account', () =>
    {
        login.logoutAccount();
    });

    it('Login with 5 More Attempts', ()=>{

        login.loginWith5MoreAttempts();
    });
});