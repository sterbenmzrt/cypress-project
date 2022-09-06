import {Method} from './function'

const method = new Method();

export class Register{

    registerWithValidCredentials(){

        method.tapNavbar();
        method.tapRegister();
        method.inputFirstName('Rudi');
        method.inputLastName('Ahmad');
        method.inputEmail('tesregist34@mailnesia.com');
        method.inputTelephone('089612365123')
        method.inputPassword('123456');
        method.inputPassConfirmation('123456');
        method.inputCheckbox();
        method.inputbtnContinue();
        method.verifySuccessCreatedAccount(); 
    }

    registerWithSameEmail(){

        method.tapNavbar();
        method.tapRegister();
        method.inputFirstName('Rudi');
        method.inputLastName('Ahmad');
        method.inputEmail('tesregist34@mailnesia.com');
        method.inputTelephone('089612365123')
        method.inputPassword('123456');
        method.inputPassConfirmation('123456');
        method.inputCheckbox();
        method.inputbtnContinue();
        method.verifySameEmail();
    }

    registerWithDifferentPassword(){

        method.tapNavbar();
        method.tapRegister();
        method.inputFirstName('Rudi');
        method.inputLastName('Ahmad');
        method.inputEmail('tesregist41@mailnesia.com');
        method.inputTelephone('089612365123')
        method.inputPassword('123456');
        method.inputPassConfirmation('123456789');
        method.inputCheckbox();
        method.inputbtnContinue();
        method.verifyDifferentPassword();
    }

    registerWithBlankFirstName() {

        method.tapNavbar();
        method.tapRegister();
        method.inputLastName('Ahmad');
        method.inputEmail('tesregist31@mailnesia.com');
        method.inputTelephone('089612365123')
        method.inputPassword('123456');
        method.inputPassConfirmation('123456');
        method.inputCheckbox();
        method.inputbtnContinue();
        method.verifyBlankFirstName();
     }

     registerWithBlankLastName(){

        method.tapNavbar();
        method.tapRegister();
        method.inputFirstName('Rudi');
        method.inputEmail('tesregist31@mailnesia.com');
        method.inputTelephone('089612365123')
        method.inputPassword('123456');
        method.inputPassConfirmation('123456');
        method.inputCheckbox();
        method.inputbtnContinue();
        method.verifyBlankLastName();
     }

     registWithBlankEmail(){

        method.tapNavbar();
        method.tapRegister();
        method.inputFirstName('Rudi');
        method.inputLastName('Ahmad');
        method.inputTelephone('089612365123')
        method.inputPassword('123456');
        method.inputPassConfirmation('123456');
        method.inputCheckbox();
        method.inputbtnContinue();
        method.verifyBlankEmail(); 
     }

     registWithBlankPassword(){

        method.tapNavbar();
        method.tapRegister();
        method.inputFirstName('Rudi');
        method.inputLastName('Ahmad');
        method.inputEmail('tesregist31@mailnesia.com');
        method.inputTelephone('089612365123')
        method.inputCheckbox();
        method.inputbtnContinue();
        method.verifyBlankPassword();
     }

     registerWithBlankTelephone(){

        
        method.tapNavbar();
        method.tapRegister();
        method.inputFirstName('Rudi');
        method.inputLastName('Ahmad');
        method.inputEmail('tesregist31@mailnesia.com');
        method.inputPassword('123456');
        method.inputPassConfirmation('123456');
        method.inputCheckbox();
        method.inputbtnContinue();        
        method.verifyBlankTelephoneNumber();
     }

     registerWithoutCheckTermConditions(){

        method.tapNavbar();
        method.tapRegister();
        method.inputFirstName('Rudi');
        method.inputLastName('Ahmad');
        method.inputEmail('tesregist31@mailnesia.com');
        method.inputTelephone('089612365123')
        method.inputPassword('123456');
        method.inputPassConfirmation('123456');
        method.inputbtnContinue();
        method.verifyTermandConditions();  
     }
}

export class Login{

   loginWithValidCredentials(){
      
      method.tapNavbar();
      method.tapLogin();
      method.inputEmail('tesregist34@mailnesia.com');
      method.inputPassword('123456');
      method.inputBtnLogin();
      method.verifyLogin();
   }

   loginWithFalsePassword(){

      method.tapNavbar();
      method.tapLogin();
      method.inputEmail('tesregist39@mailnesia.com');
      method.inputPassword('999999');
      method.inputBtnLogin();
      method.verifyLoginFalsePassword();
   }

   logoutAccount(){

      method.tapNavbar();
      method.tapLogin();
      method.inputEmail('tesregist23@mailnesia.com');
      method.inputPassword('123456');
      method.inputBtnLogin();
      method.verifyLogin();
      method.tapNavbar();
      method.verifyDropdownLogout();
      method.inputBtnLogout();
   }

   loginWith5MoreAttempts(){

      method.tapNavbar();
      method.tapLogin();
      method.inputEmail('tesregist22@mailnesia.com');
      method.inputPassword('999999');
      method.inputBtnLogin();
      method.inputBtnLogin();
      method.inputBtnLogin();
      method.inputBtnLogin();
      method.inputBtnLogin();
      method.inputBtnLogin();
      method.verifyLoginMoreAttempts();
      
   }
}

export class Purchase{

   checkoutMac(){

      //login first
      method.tapNavbar();
      method.tapLogin();
      method.inputEmail('tesregist23@mailnesia.com');
      method.inputPassword('123456');
      method.inputBtnLogin();
      method.verifyLogin();

      //searching for 'mac'
      method.inputSearch('Mac')
      method.inputBtnSearch();
      method.verifyLayoutProduct();
      
      //click into detail product 
      method.clickMacProduct();
      method.detailProduct();
      method.clickAddToCart();
      method.verifySuccessAddToCart();
   }
}