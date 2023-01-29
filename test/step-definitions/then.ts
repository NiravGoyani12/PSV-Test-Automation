import { Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page.js";
import AddNewAddressPage from "../pageobjects/addNewAddress.page.js";

Then(/^I should see a welcome message about my account$/, () => {
  expect(LoginPage.welcomeMessage).toHaveText("yuio");
});

Then(
  /^I should see the error (.*) for (.*)$/,
  async (errorMessage, inputField) => {
    if (inputField === "email") {
      await expect(LoginPage.emptyEmailErrorMessage).toHaveTextContaining(
        errorMessage
      );
    } else {
      await expect(LoginPage.emptyPasswordErrorMessage).toHaveTextContaining(
        errorMessage
      );
    }
  }
);

Then(
  /^I should see street address  as (.*) of the new address$/,
  async (streetAddress) => {
    expect(AddNewAddressPage.streetNumberOfAddedAddress).toHaveText(
      streetAddress
    );
  }
);
