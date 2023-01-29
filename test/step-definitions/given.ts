import { Given } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page.js";

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

Given(/^I accept cookies on the login page$/, async () => {
  await LoginPage.acceptCookies();
});
