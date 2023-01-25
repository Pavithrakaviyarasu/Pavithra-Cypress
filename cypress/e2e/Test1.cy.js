/// <reference types="cypress"/>

describe('Testcase1',()=>{

    it('pavithra',()=>{

        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type("Pavithra oru loose")
    })
})