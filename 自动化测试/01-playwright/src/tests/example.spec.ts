import { expect } from "@playwright/test";
import test from "../common/test";

let chatPage;

test.beforeAll(async ({ chatSession }) => {
  chatPage = await chatSession;
});

test("has title", async ({}) => {
  await expect(1 + 1).toBe(2);
});
