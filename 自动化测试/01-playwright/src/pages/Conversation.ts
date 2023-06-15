import { Page, Locator, FrameLocator } from "@playwright/test";

export default class ConversationPage {
  conversationFrame: FrameLocator;
  newConversationButton: Locator;

  constructor(page: Page) {
    this.conversationFrame = page.frameLocator(
      '[data-testid="frame-conversation"]'
    );
    this.newConversationButton = this.conversationFrame.locator(
      '//*[text()="New conversation"]/ancestor::button'
    );
  }
}
