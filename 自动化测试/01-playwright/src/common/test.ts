import { test as base } from "@playwright/test";
import { SessionType } from "../types";
import session from "../session";

const test = base.extend({
  chatSession: async ({}, use) => {
    await session.start(SessionType.CHAT, use);
  },
});

export default test;
