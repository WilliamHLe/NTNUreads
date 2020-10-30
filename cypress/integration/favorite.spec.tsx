import AddFavorite from "../../src/components/user/AddFavorite"
import * as React from "react";

describe('Favorite', () => {
    before(() => {
        cy.visit('/login')
    })
    beforeEach(() => {
        cy.visit('/')
    })
    it('user cannot add favorite book if not logged in', () => {
        const search = "Harry Potter #4"
        cy.get('#search')
            .type(search)
            .type("{enter}")
            .get("Table")
            .wait(500)
            .get("td").children("Button").contains("Detaljer")
            .click()
            .get(".favoriteDiv")
            .get(".favoriteButton")
            .should("not.exist","Button")
    })
    it('user can add favorite book if logged in', () => {
        const search = "Harry Potter #4"
        cy.get('Nav').children().contains("Logg inn/ut")
            .click()
            .get("form")
            .get("input[type='username'")
            .type("willi1")
            .get("input[type='checkbox']").check()
            .get("input[type='password'")
            .type("willi123")
            .type("{enter}")
            .get('#search')
            .type(search)
            .type("{enter}")
            .get("Table")
            .wait(500)
            .get("td").children("Button").contains("Detaljer")
            .click()
            .get(".favoriteDiv")
            .get(".favoriteButton")
            .click()
            .should("exist","Button")
    })
    it('user can write review',() => {
        const search = "Harry Potter"
        const name = "Cypress"
        const review = "I really like this book"
        cy.get('#search')
            .type(search)
            .type("{enter}")
            .get("Table")
            .wait(500)
            .get("td").children("Button").contains("Detaljer")
            .click()
            .get(".reviewForm").children("form").children("div").children("input")
            .type(name)
            .should("have.value","wdaa"+name)
            .get(".reviewForm").children("form").children("div").last().children("textarea")
            .type(review)
            .should("have.value",review)

    })

})