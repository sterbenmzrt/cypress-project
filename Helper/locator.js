export class Locator{

    //navbar
    navbar_Account = '//a[@title="My Account"]'
    register = '//a[.="Register"]'
    login = '//a[.="Login"]'

    //fields
    input_firstname = '//input[@id="input-firstname"]'
    input_lastname = '//input[@id="input-lastname"]'
    input_email = '//input[@id="input-email"]'
    input_telephone = '//input[@id="input-telephone"]'
    input_password = '//input[@id="input-password"]'
    input_confirmPass = '//input[@id="input-confirm"]' 
    input_checkbox = '//input[@name="agree"]'
    input_btnContinue = '//input[@value="Continue"]'

    //login
    input_btnLogin = '//input[@value="Login"]'
    logout = '//ul[@class="dropdown-menu dropdown-menu-right"]//a[normalize-space()="Logout"]'

    //alert
    alert = '//div[@class="alert alert-danger alert-dismissible"]'
    alert_success = '//div[@class="alert alert-success alert-dismissible"]'
    text_danger = '//div[@class="text-danger"]'
    
    //search bar
    input_search = '//input[@placeholder="Search"]'
    input_btnSearch = '//button[@class="btn btn-default btn-lg"]'

    //layout product
    layout_product = '//body[1]/div[2]/div[1]/div[1]/div[3]/div[2]/div[1]'
    //link detail macbook
    macbook = '//div[@id="content"]//a[.="MacBook"]'
    detail_product = '//div[@id="content"]/div[@class="row"]'
    button_cart = '//button[@id="button-cart"]'
}