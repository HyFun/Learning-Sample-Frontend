import { chromium, expect } from "@playwright/test";
import LoginPage from "../pages/Login";
import { retry } from "./helper";
import ConversationPage from "../pages/Conversation";
import testConfig from "./config-helper";

interface Login {
  url: string;
  username: string;
  password: string;
  storage: string;
}

export async function login({ url, username, password, storage }: Login) {
  if (!username || !password) {
    console.error(
      ">>>User name or User password is not defined, agent login is not necessary for this account "
    );
  }
  console.log("Executing login setup");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);

  await retry(
    async () => {
      console.log("Opening " + url);
      await page.goto(url);
      if (page.url() != url) {
        await loginPage.login(username, password);
      }
      await page.waitForResponse(
        (response) =>
          response.url().includes("/apps/conversation") &&
          response.status() === 200,
        { timeout: 45000 }
      );
    },
    3,
    1000
  );

  console.log("Storing login state. Path: " + storage);
  await page.context().storageState({ path: storage });
  await page.close();

  console.log("Finished login setup");
}

type Enter = {
  storage: string;
  use: (r: any) => Promise<void>;
};

export async function enter({ storage, use }: Enter) {
  const url = testConfig.url!;

  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: storage });
  const page = await context.newPage();

  console.log(">>> Opening agent session. Url: " + url);
  await page.goto(url);

  const conversation = new ConversationPage(page);

  await page.waitForLoadState("domcontentloaded");
  try {
    await expect(conversation.newConversationButton).toBeVisible({
      timeout: 30000,
    });
  } catch (error) {
    console.log("The conversation App is loading failed, reload the page!");
    console.log(error);
    await page.reload();
    await expect(conversation.newConversationButton).toBeVisible({
      timeout: 30000,
    });
  }

  await use(page);
}
