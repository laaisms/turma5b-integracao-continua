/// <reference types="cypress" />
 
context('testar Home Page', () => {
    beforeEach(() => {
      cy.visit('http://www.google.com.br')
    })
  
    it('Pesquisar no Google ', () => {
        cy.get('form input[type="text"]').type('torne se um programador')
        cy.get('form').submit()
      })

    it('Clicar no site correto', () => {
        cy.get('a').eq(1).click()
        //cy.get('a[href*=http://www.torneseumprogramador.com.br/]').click()
    })



    /* it('Deve clicar no primeiro site da busca, () => {
        cy.get('input[name="q"]').type("torne-se um programador")
        cy.get('form input[type="submit"]').click()
      })
    */
})