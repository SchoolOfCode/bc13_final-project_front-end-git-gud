describe("Check empty input boxes spec", () => {
  it("has a form which is empty", () => {
    cy.visit("http://localhost:3000");
    cy.get("#firstname").should("have.value", "");
    cy.get("#surname").should("have.value", "");
    cy.get("#phonenumber").should("have.value", "");
    cy.get("#email").should("have.value", "");
    cy.get("#password").should("have.value", "");
  });
});

describe("User can type", () => {
  it("user can fill in form", () => {
    cy.visit("http://localhost:3000");
    cy.get("#firstname").type("Test First Name");
    cy.get("#firstname").should("have.value", "Test First Name");

    cy.get("#surname").type("Test Surname");
    cy.get("#surname").should("have.value", "Test Surname");

    cy.get("#phonenumber").type("Test Phone Number");
    cy.get("#phonenumber").should("have.value", "Test Phone Number");

    cy.get("#email").type("email");
    cy.get("#email").should("have.value", "email");

    cy.get("#password").type("Test Password");
    cy.get("#password").should("have.value", "Test Password");
  });
});
