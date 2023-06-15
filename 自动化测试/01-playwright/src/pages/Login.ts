import { Page, Locator } from "@playwright/test";

export default class LoginPage {
  accountNameInput: Locator;
  submitButton: Locator;
  userEmailField: Locator;
  userPasswordField: Locator;

  constructor(page: Page) {
    this.accountNameInput = page.locator('//input[@data-id="accountName"]');
    this.submitButton = page.locator('//button[@type="submit"]');
    this.userEmailField = page.locator('//input[@type="email"]');
    this.userPasswordField = page.locator('//input[@type="password"]');
  }

  async login(username: string, password: string) {
    if (!username || !password) {
      console.warn(">>> Login: username or password is empty!");
      return;
    }
    await this.userEmailField.fill(username);
    await this.userPasswordField.fill(password);
    await this.submitButton.click();
    console.log(`>>> Login: login complete`);
  }
}
