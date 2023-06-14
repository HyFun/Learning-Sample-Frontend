import { test as base } from "@playwright/test";

const test = base.extend({
  digital: async ({ page }, use) => {
    console.log(`start digital`);
    await use(page);
  },
});

export default test;
