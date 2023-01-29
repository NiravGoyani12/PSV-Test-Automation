import Page from "./page.js";

class addNewAddress extends Page {
  public get profileButton() {
    return $("[data-testid='HeaderMyAccount']");
  }

  public get addressButton() {
    return $("[data-testid='pvh-ResponsiveNavListItem']");
  }

  public get addNewAddressButton() {
    return $("[data-testid='create-address-pvh-icon-button']");
  }

  public get genderTitleButton() {
    return $("[data-testid='pvh-ToggleButton']");
  }

  public get firstNameInput() {
    return $("[data-testid='firstName-inputField']");
  }

  public get lastNameInput() {
    return $("[data-testid='lastName-inputField']");
  }

  public get streetAddressInput() {
    return $("[data-testid='address1-inputField']");
  }

  public get cityInout() {
    return $("[data-testid='city-inputField']");
  }

  public get stateInput() {
    return $("[data-testid='address2-inputField']");
  }

  public get zipcodeInput() {
    return $("[data-testid='zipCode-inputField']");
  }

  public get selectCountryDropdown() {
    return $("[data-testid='addressCountry-select-component']");
  }

  public get selectCountryFromDropDown() {
    return $("[id='downshift-2-item-14']");
  }

  public get selectAddressTypeDropdown() {
    return $("[data-testid='addressType-select-component']");
  }

  public get selectBillingAddressDropdown() {
    return $("[id='downshift-1-item-2']");
  }

  public get newAddressButton() {
    return $("[data-testid='address-form-add-pvh-button']");
  }

  public get streetNumberOfAddedAddress() {
    return $("[data-testid='address-line']");
  }

  public async clickOnProfileButton() {
    await this.profileButton.click();
  }

  public async clickOnAddresses() {
    await this.addressButton.click();
  }

  public async clickOnAddNewAddress() {
    await this.addNewAddressButton.click();
  }

  public async clickOnGenderTitle() {
    await this.genderTitleButton.click();
  }

  public async addAddressDetails(
    firstname: string,
    lastName: string,
    streetAddress: string,
    city: string,
    state: string,
    zipCode: string
  ) {
    await this.firstNameInput.setValue(firstname);
    await this.lastNameInput.setValue(lastName);
    await this.streetAddressInput.setValue(streetAddress);
    await this.cityInout.setValue(city);
    await this.stateInput.setValue(state);
    await this.zipcodeInput.setValue(zipCode);
  }

  public async selectCountry() {
    await this.selectCountryDropdown.click();
    await this.selectCountryFromDropDown.click();
  }

  public async selectDeliveryAndBillingAddress() {
    await this.selectAddressTypeDropdown.click();
    await this.selectBillingAddressDropdown.click();
  }

  public async clickOnNewAddress() {
    await this.newAddressButton.click();
  }
}

export default new addNewAddress();
