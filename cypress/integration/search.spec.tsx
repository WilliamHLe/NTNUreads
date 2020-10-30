describe('Search', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('user can input search', () => {
        const search = "Harry Potter"
        cy.get('#search')
            .type(search)
            .should('have.value',search)
    })
    it('user can enter search', () => {
        const search = "Harry Potter"
        cy.get('#search')
            .type(search)
            .type("{enter}")
            .url().should('eq',"http://localhost:3000/results/"+search.replace(/\s/g,'%20'))
    })
    it('correctly return 0 list', () => {
        const search = "s,ldjfnskjdgfsdhgoisdhgioerhjgr"
        cy.get('#search')
            .type(search)
            .type("{enter}")
            .get("Table")
            .get("tr")
            .should("have.length", 1)
    })
    it('can enter detailed page for Harry Potter #5', () => {
        const search = "Harry Potter #5"
        cy.get('#search')
            .type(search)
            .type("{enter}")
            .get("Table")
            .wait(500)
            .get("td").children("Button").contains("Detaljer")
            .click()
            .get("h1")
            .should("have.text", "Harry Potter and the Order of the Phoenix (Harry Potter  #5)")
    })
    it('can press popular search buttons',() => {
        const buttons = ["Harry Potter", "J.R.R. Tolkien", "Oscar Wilde", "Jane Austen"]
        cy.get(".mb-4").children("button")
            .each(($el,index) => {
                cy.wrap($el).should("have.text",buttons[index])
            })
    })
    it('can filter by rating',() => {
        const search = "Harry Potter"
        cy.get('#search')
            .type(search)
            .type("{enter}")
            .get("table")
            .wait(500)
            .get("div").get("form").children("h5").next().last().children().children("input").check("3")
            .get("tr").children("td").first()
            .should("have.text","0826452329")
    })
    it('can sort by author',() => {
        const search = "Harry Potter"
        cy.get('#search')
            .type(search)
            .type("{enter}")
            .get("table")
            .wait(500)
            .get("select")
            .select("Forfatter A-Z")
            .wait(200)
            .get("tr").children("td").first()
            .should("have.text","1569755833")
    })
})