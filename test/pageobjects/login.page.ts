import Page from "./page.js";

class LoginPage extends Page {
  public get acceptCookiesButton() {
    return $("[data-testid='Button-primary']");
  }

  public get loginButton() {
    return $("[data-testid='sign-in-button']");
  }

  public get inputUsername() {
    return $("#signin-email");
  }

  public get inputPassword() {
    return $("#signin-password");
  }

  public get btnSubmit() {
    return $("[data-testid='Button-primary']");
  }

  public get welcomeMessage() {
    return $("[data-testid='HeaderMyAccount']");
  }

  public get emptyEmailErrorMessage() {
    return $("#signin-email-helper-text");
  }

  public get emptyPasswordErrorMessage() {
    return $("#signin-password-helper-text");
  }

  public async acceptCookies() {
    if (await this.acceptCookiesButton.isExisting()) {
      await this.acceptCookiesButton.click();
      await browser.pause(5000);
    }
  }

  public async clickOnInputField(inputField: string) {
    if (inputField === "email") {
      await this.inputUsername.isExisting();
      await this.inputUsername.click();
    } else {
      await this.inputPassword.isExisting();
      await this.inputPassword.click();
    }
  }

  public async clickOnLoginButton() {
    await this.loginButton.waitForDisplayed();
    await this.loginButton.isExisting();
    await this.loginButton.click();
  }

  public async clickOnSubmitButton() {
    await this.btnSubmit.isExisting();
    await this.btnSubmit.click();
  }

  public async enterWrongInput(inputValue, inputField) {
    if (inputField === "email") {
      await this.inputUsername.isExisting();
      await this.inputUsername.click();
      await this.inputUsername.setValue(inputValue);
    } else {
      await this.inputPassword.isExisting();
      await this.inputPassword.click();
      await this.inputPassword.setValue(inputValue);
    }
  }

  public async login(username: string, password: string) {
    await this.loginButton.click();
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();

    // Trying to check the response of Login API call

    // const mock = await browser.mock(
    //   "https://uk.tommy.com/wcs/resources/store/30027/loginidentity?rememberMe=false&updateCookies=true",
    //   {
    //     method: "post",
    //   }
    // );

    // mock.respond({
    //   status: 201,
    //   statusText: "Created",
    //   httpVersion: "HTTP/1.1",
    //   cookies: [
    //     {
    //       name: "WC_PERSISTENT",
    //       value:
    //         "KiA2aWczTs2giDy9OkAA3EZzBn3d3zRKg26nEvKc6IY%3D%3B2023-01-28+08%3A31%3A49.615_1674737387585-1331272_30027",
    //       path: "/",
    //       expires: "2023-02-27T07:31:49.000Z",
    //       httpOnly: true,
    //       secure: true,
    //       sameSite: "Lax",
    //     },
    //     {
    //       name: "WC_AUTHENTICATION_-1002",
    //       value: "DEL",
    //       path: "/",
    //       expires: "1994-12-01T16:00:00.000Z",
    //       httpOnly: true,
    //       secure: true,
    //       sameSite: "Lax",
    //     },
    //     {
    //       name: "WC_USERACTIVITY_-1002",
    //       value: "DEL",
    //       path: "/",
    //       expires: "1994-12-01T16:00:00.000Z",
    //       httpOnly: true,
    //       secure: true,
    //       sameSite: "Lax",
    //     },
    //     {
    //       name: "WC_GENERIC_ACTIVITYDATA",
    //       value: "DEL",
    //       path: "/",
    //       expires: "1994-12-01T16:00:00.000Z",
    //       httpOnly: true,
    //       secure: true,
    //       sameSite: "Lax",
    //     },
    //     {
    //       name: "WC_AUTHENTICATION_1153811270",
    //       value: "1153811270%2CfaDBT1yOrCpdKuByyw9DFmsnko33ynIWzFQE51w1J3M%3D",
    //       path: "/",
    //       expires: "",
    //       httpOnly: true,
    //       secure: true,
    //       sameSite: "Lax",
    //     },
    //     {
    //       name: "WC_USERACTIVITY_1153811270",
    //       value:
    //         "1153811270%2C30027%2C0%2Cnull%2C1674891109615%2C1674894709615%2Cnull%2Cnull%2Cnull%2Cnull%2C1383256606%2Cver_1674891109595%2CsBVQKoAgr1UjQBblO%2FvNB7wsmgmvmLxoSIXjzIEZnkf7CgwaU21VNrVv6bi1b1bmhilKKtxv%2Fd6TuXHNPGSlgSnosCAiDsJYadlslHqS3ArC3gQbwaiNMY6dWIWVQOhWScPchEZ51EHp%2BMnu8WvrXMtyMemDYJOkDzHPCIr0NipyMl5uG1EWZ2YJRqFtqroxYYE3aLjOpefo5A%2FH3u0Aowtrk2xN1GSWgrYvnM2yHNaEix2txX1bRaU0DtIw7L7nP%2FctSrqmh7nvskBeN%2F4cjxx2cmqbdyZad%2F8v%2FB2z1jo%3D",
    //       path: "/",
    //       expires: "",
    //       httpOnly: true,
    //       secure: true,
    //       sameSite: "Lax",
    //     },
    //     {
    //       name: "_abck",
    //       value:
    //         "A00A8404BBC549A8B1327AC8042A5203~0~YAAQPUMVAvvXZNCFAQAATiVK9wmp5VUeuUEEOlNYF4g1E06Od4P8BX96/SJvyUcDxaZLSL4G0sDQpy0nylJwef6KWG4L9TQTZfWbcgaOM9rKBT7QA59wvleFjkt99uE2+MtXWIZv2nf3w/d7gEYB+8ISgv3tbNBr172iCSkcg/jweDs96SZQ9STsJ8G2rNqYlA14l+W9t9AHBDOfQA4UXPSCRm9kTmzh/Lmzwj2YqrYkpPz3i/NopQRpxglzoHzOcKrTJCBexwV7JqbrPWSqO0ThA9y2+7W64567p8ppjU2/vwXwPs5TBwv5OpCBqKSmRdOD9q0vE5eusEAeHOjo5sEOZfaLX5q1wj1Bqj3k+mddRMEBkMSw1sutAbfGYP5bEfukYKahNP5ieQoM2XdZx5lPxF8PE4la~-1~-1~-1",
    //       path: "/",
    //       domain: ".tommy.com",
    //       expires: "2024-01-28T07:31:44.571Z",
    //       httpOnly: false,
    //       secure: true,
    //     },
    //     {
    //       name: "bm_sv",
    //       value:
    //         "94002DC84576E7F976932EB52467C4EC~YAAQPUMVAvzXZNCFAQAATiVK9xLgCaIsMS/xm3LncIWOwfJ7kakxpA6fL99zoAfHRcdj21IuJZaMQnMutiXidg6HZAb5MPb3QFOgyB3unpzML8wDqP6IO4GBJ6etckbbVtRwMPgd/Kdj0U6Ls1poIaScp/inKe5ku+0nkCQV8iq2mAibMyjZs5kw2M3cv/vqbtJP8x7RNdlRnvTozKHpwCmDvDYNbzUrMQ6y5jiQTDcLTwWTu9S6DtzZj7l79qxh~1",
    //       path: "/",
    //       domain: ".tommy.com",
    //       expires: "2023-01-28T09:17:45.571Z",
    //       httpOnly: false,
    //       secure: true,
    //     },
    //   ],
    //   headers: [
    //     {
    //       name: "Content-Type",
    //       value: "application/json",
    //     },
    //     {
    //       name: "Server-Timing",
    //       value: 'dtSInfo;desc="0", dtRpid;desc="-1696382721", dtTao;desc="1"',
    //     },
    //     {
    //       name: "Content-Encoding",
    //       value: "gzip",
    //     },
    //     {
    //       name: "Content-Language",
    //       value: "en-US",
    //     },
    //     {
    //       name: "Set-Cookiese",
    //       value:
    //         "WC_PERSISTENT=KiA2aWczTs2giDy9OkAA3EZzBn3d3zRKg26nEvKc6IY%3D%3B2023-01-28+08%3A31%3A49.615_1674737387585-1331272_30027; Expires=Mon, 27-Feb-23 07:31:49 GMT; Path=/; Secure; HttpOnly; SameSite=Lax;, WC_AUTHENTICATION_-1002=DEL; Expires=Thu, 01-Dec-94 16:00:00 GMT; Path=/; Secure; HttpOnly; SameSite=Lax;, WC_USERACTIVITY_-1002=DEL; Expires=Thu, 01-Dec-94 16:00:00 GMT; Path=/; Secure; HttpOnly; SameSite=Lax;, WC_GENERIC_ACTIVITYDATA=DEL; Expires=Thu, 01-Dec-94 16:00:00 GMT; Path=/; Secure; HttpOnly; SameSite=Lax;, WC_AUTHENTICATION_1153811270=1153811270%2CfaDBT1yOrCpdKuByyw9DFmsnko33ynIWzFQE51w1J3M%3D; Path=/; Secure; HttpOnly; SameSite=Lax;, WC_USERACTIVITY_1153811270=1153811270%2C30027%2C0%2Cnull%2C1674891109615%2C1674894709615%2Cnull%2Cnull%2Cnull%2Cnull%2C1383256606%2Cver_1674891109595%2CsBVQKoAgr1UjQBblO%2FvNB7wsmgmvmLxoSIXjzIEZnkf7CgwaU21VNrVv6bi1b1bmhilKKtxv%2Fd6TuXHNPGSlgSnosCAiDsJYadlslHqS3ArC3gQbwaiNMY6dWIWVQOhWScPchEZ51EHp%2BMnu8WvrXMtyMemDYJOkDzHPCIr0NipyMl5uG1EWZ2YJRqFtqroxYYE3aLjOpefo5A%2FH3u0Aowtrk2xN1GSWgrYvnM2yHNaEix2txX1bRaU0DtIw7L7nP%2FctSrqmh7nvskBeN%2F4cjxx2cmqbdyZad%2F8v%2FB2z1jo%3D; Path=/; Secure; HttpOnly; SameSite=Lax;, _abck=A00A8404BBC549A8B1327AC8042A5203~0~YAAQPUMVAvvXZNCFAQAATiVK9wmp5VUeuUEEOlNYF4g1E06Od4P8BX96/SJvyUcDxaZLSL4G0sDQpy0nylJwef6KWG4L9TQTZfWbcgaOM9rKBT7QA59wvleFjkt99uE2+MtXWIZv2nf3w/d7gEYB+8ISgv3tbNBr172iCSkcg/jweDs96SZQ9STsJ8G2rNqYlA14l+W9t9AHBDOfQA4UXPSCRm9kTmzh/Lmzwj2YqrYkpPz3i/NopQRpxglzoHzOcKrTJCBexwV7JqbrPWSqO0ThA9y2+7W64567p8ppjU2/vwXwPs5TBwv5OpCBqKSmRdOD9q0vE5eusEAeHOjo5sEOZfaLX5q1wj1Bqj3k+mddRMEBkMSw1sutAbfGYP5bEfukYKahNP5ieQoM2XdZx5lPxF8PE4la~-1~-1~-1; Domain=.tommy.com; Path=/; Expires=Sun, 28 Jan 2024 07:31:49 GMT; Max-Age=31536000; Secure, bm_sv=94002DC84576E7F976932EB52467C4EC~YAAQPUMVAvzXZNCFAQAATiVK9xLgCaIsMS/xm3LncIWOwfJ7kakxpA6fL99zoAfHRcdj21IuJZaMQnMutiXidg6HZAb5MPb3QFOgyB3unpzML8wDqP6IO4GBJ6etckbbVtRwMPgd/Kdj0U6Ls1poIaScp/inKe5ku+0nkCQV8iq2mAibMyjZs5kw2M3cv/vqbtJP8x7RNdlRnvTozKHpwCmDvDYNbzUrMQ6y5jiQTDcLTwWTu9S6DtzZj7l79qxh~1; Domain=.tommy.com; Path=/; Expires=Sat, 28 Jan 2023 09:17:50 GMT; Max-Age=6361; Secure",
    //     },
    //     {
    //       name: "Transfer-Encoding",
    //       value: "Identity",
    //     },
    //     {
    //       name: "Expires",
    //       value: "Thu, 01 Dec 1994 16:00:00 GMT",
    //     },
    //     {
    //       name: "Timing-Allow-Origin",
    //       value: "*",
    //     },
    //     {
    //       name: "Cache-Control",
    //       value: 'no-cache="set-Cookiese, set-Cookiese2"',
    //     },
    //     {
    //       name: "Date",
    //       value: "Sat, 28 Jan 2023 07:31:49 GMT",
    //     },
    //     {
    //       name: "Connection",
    //       value: "keep-alive, Transfer-Encoding",
    //     },
    //     {
    //       name: "Vary",
    //       value: "Accept-Encoding",
    //     },
    //     {
    //       name: "Strict-Transport-Security",
    //       value: "max-age=86400",
    //     },
    //     {
    //       name: "X-OneAgent-JS-Injection",
    //       value: "true",
    //     },
    //   ],
    //   content: {
    //     size: 507,
    //     compression: 77,
    //     mimeType: "application/json",
    //   },
    //   redirectURL: "",
    //   headersSize: 2717,
    //   bodySize: 430,
    //   _transferSize: 3147,
    // });
    //  await browser.refresh();
    // await this.buttonLogin.click();
    // await this.inputUsername.setValue(username);
    // await this.inputPassword.setValue(password);
    // // await browser.debug();
    // await this.btnSubmit.click();
    // await browser.debug();
  }

  public open() {
    return super.open();
  }
}

export default new LoginPage();
