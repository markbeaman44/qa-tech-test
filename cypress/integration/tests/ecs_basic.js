context('ECS Basic Test', () => {

  beforeEach(() => {
    cy.visit('/')
  })


  it('Complete Test tech test', () => {

    cy.get('button[data-test-id=render-challenge]')
      .click()

    let total_column=9;
    for (let row_num=1; row_num <= 3; row_num++) {
      cy.wait(1000)
      cy.iterateOverTable(row_num, total_column)
        .then(($res) => {
          cy.calcArray($res)
            .then(($res) => {
              cy.get(`input[data-test-id=submit-${row_num}]`).type($res)
            })
        })      
    }

    cy.get('input[data-test-id=submit-4')
      .type('USERNAME')
    
    cy.get('button[data-test-id=submit]')
      .click()

  })
});
