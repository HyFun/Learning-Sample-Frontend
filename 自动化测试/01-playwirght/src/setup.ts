import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;

  const browsers = await chromium.launch();
  const page = await browsers.newPage();
  await page.goto(baseURL!);
  await page
    .getByPlaceholder("email@company.com")
    .fill("yongfeng.he@china.talkdesk.com");
  await page.getByPlaceholder("password").fill("1qaz!QAZ");

  // await page.getByText("Login").click();
  await page.locator("button[type='submit']").click();
  await page.waitForResponse(
    (response) => {
      if (response.url() && response.status() === 200) {
        console.log(`url: ${response.url()}; status: ${response.status()}`);
        return true;
      }
      return false;
    },
    { timeout: 45000 }
  );
  console.log(`跳转页面: ${page.url()}`);

  await page.context().storageState({ path: storageState as string });
  await page.close();
}

export default globalSetup;
