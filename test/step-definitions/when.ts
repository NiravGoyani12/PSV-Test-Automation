import { When } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page.js";
import AddNewAddressPage from "../pageobjects/addNewAddress.page.js";

When(/^I click on (.+) field on login page$/, async (inputField) => {
  await LoginPage.clickOnInputField(inputField);
});

When(/^I click on login button$/, async () => {
  await LoginPage.clickOnLoginButton();
});

When(/^I click on submit button$/, async () => {
  await LoginPage.clickOnSubmitButton();
});

When(
  /^I enter wrong (.+) in (.+) on login page$/,
  async (inputValue, inputField) => {
    await LoginPage.enterWrongInput(inputValue, inputField);
  }
);

When(/^I log in with a valid user:$/, async (data) => {
  const [user] = data.hashes();
  await LoginPage.login(user.email, user.password);
});

When(/^I click on profile$/, async () => {
  await AddNewAddressPage.clickOnProfileButton();
});

When(/^I click on addresses$/, async () => {
  await AddNewAddressPage.clickOnAddresses();
});

When(/^I click on Add new address$/, async () => {
  await AddNewAddressPage.clickOnAddNewAddress();
});

When(/^I click on gender title$/, async () => {
  await AddNewAddressPage.clickOnGenderTitle();
});

When(/^I enter the following details$/, async (data) => {
  const [addressDetails] = data.hashes();
  await AddNewAddressPage.addAddressDetails(
    addressDetails.firstname,
    addressDetails.lastName,
    addressDetails.streetAddress,
    addressDetails.city,
    addressDetails.state,
    addressDetails.zipCode
  );
});

When(/^I select the country$/, async () => {
  await AddNewAddressPage.selectCountry();
});

When(/^I select the delivery and billing address$/, async () => {
  await AddNewAddressPage.selectDeliveryAndBillingAddress();
});

When(/^I click on new address button$/, async () => {
  await AddNewAddressPage.clickOnNewAddress();
});
