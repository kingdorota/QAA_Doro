describe("Nasz pierwszy blok testów", () => {
  it("Test z wizytą w siedzibie LMS", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").type("user888@gmail.com");
    cy.get("#user_password").type("1234567890");
    cy.get(".eckniwg2").click();
    cy.get("#open-navigation-menu-mobile").click();
    cy.get(":nth-child(12) > .next-bve2vl").click();
  });
});

describe("Drugi blok testów", () => {
  it("Test z wizytą w siedzibie LMS", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").type("testowyqa@qa.team");
    cy.get("#user_password").type("QA!automation-1");
    cy.get(".eckniwg2").click();
    cy.get("#open-navigation-menu-mobile").click();
    cy.get(":nth-child(8) > .next-bve2vl").click();
  });
});
