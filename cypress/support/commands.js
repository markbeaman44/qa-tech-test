// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('iterateOverTable', (row_num, total_column) => {
  let numList = [];
  for (let i = 1; i <= total_column; i++) {
    cy.get(`tbody > tr:nth-child(${row_num}) > td:nth-child(${i})`)
      .then(($info) => {
        let value = parseInt($info.text())
        numList.push(value)

        if (i === total_column) {
          return numList
        }
    })
  }
})

Cypress.Commands.add('calcArray', (arrayList) => {
  let arraySum = (value) => {return value.reduce((a,b) => a + b, 0)}

  for (let i = 1; i <= arrayList.length; i++) {
    let left = arraySum(arrayList.slice(0,i));
    let right = arraySum(arrayList.slice(i+1));

    if (left === right) {
      return i+1;
    }
  }
})
