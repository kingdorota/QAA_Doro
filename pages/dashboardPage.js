class DashboardPage {
  openNavigationMenu() {
    cy.get("#open-navigation-menu-mobile").click();
  }

  clickLogout() {
    cy.get(":nth-child(12) > .next-bve2vl").click();
  }
}

export default DashboardPage;
