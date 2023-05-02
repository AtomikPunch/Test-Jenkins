exports.testPage = class testPage{

    get search_bar(){
        return cy.get('input', {timeout : 5000});
    }
}