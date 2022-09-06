import { Purchase } from "../Helper/step";

const purchase = new Purchase();

describe('Add To Cart Testing', () =>{

    beforeEach(() =>{

        cy.visit('https://naveenautomationlabs.com/opencart');

    });

    it('Add to Cart Mac Test', () =>{

        purchase.checkoutMac();
    });
});