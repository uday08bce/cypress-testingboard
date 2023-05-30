// Homepage.js

class Homepage {
    visitHomepage() {
      cy.visit('https://magento.softwaretestingboard.com/');
    }
    verifyExpectedElements() {
      cy.get('h2.title').should('have.text','Hot Sellers')
      
    }
  }
  
  export default new Homepage();
  