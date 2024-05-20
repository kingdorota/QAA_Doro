import LoginPage from "../support/pageObjects/loginPage";
import DashboardPage from "../support/pageObjects/dashboardPage";

describe("Nasz pierwszy blok testów", () => {
  it("Test z wizytą w siedzibie LMS", () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();

    loginPage.visit();
    loginPage.fillEmail("user888@gmail.com");
    loginPage.fillPassword("1234567890");
    loginPage.submit();

    dashboardPage.openNavigationMenu();
    dashboardPage.clickLogout();
  });
});
