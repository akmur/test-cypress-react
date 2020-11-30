/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("https://google.com");
});

it("header is visible", () => {
  cy.get("[data-test-id='header']")
    .should("be.visible")
    .should("have.text", "Testing with Cypress");
});

it("form is visible", () => {
  cy.get("input").should("be.visible").type("test");

  cy.get(".sc-jrAGrp > div").should("have.text", "testtest");
});
