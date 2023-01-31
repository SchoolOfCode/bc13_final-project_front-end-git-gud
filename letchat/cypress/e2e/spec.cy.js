describe("Check empty input boxes", () => {
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

describe("Form submit", () => {
  it("user cannot sign-up if they've submitted incorrect or missing information", () => {
    cy.visit("http://localhost:3000");
    cy.get("#phonenumber").type("123");
    cy.get("#email").type("NotAnEmail");
    cy.get("button[type=submit]").click();
  });
});

describe("Footer links", () => {
  it("has all the correct pages into the footer which link to the correct url", () => {
    cy.visit("http://localhost:3000");

    // about us
    cy.contains("About us").click();
    cy.location("pathname").should("eq", "/about");
    cy.go("back");

    // contact
    cy.contains("Contact").click();
    cy.location("pathname").should("eq", "/contact");
    cy.go("back");

    // terms of use
    cy.contains("Terms of use").click();
    cy.location("pathname").should("eq", "/termsofuse");
    cy.go("back");

    // privacy policy
    cy.contains("Privacy policy").click();
    cy.location("pathname").should("eq", "/privacypolicy");
    cy.go("back");

    // cookie policy
    cy.contains("Cookie policy").click();
    cy.location("pathname").should("eq", "/cookiepolicy");
    cy.go("back");
  });
});

describe("Log-in form", () => {
  it(
    "gets the login form and successfully signs in",
    {
      defaultCommandTimeout: 10000,
    },
    () => {
      cy.visit("http://localhost:3000/login");
      cy.get("#email").type(Cypress.env("cypress_email"));
      cy.get("#password").type(Cypress.env("cypress_password"));
      // TODO: error: constantly sends GET requests after log in
      cy.get("button[type=submit]").click();
      cy.location("pathname").should("eq", "/jobboard");
    }
  );
});
