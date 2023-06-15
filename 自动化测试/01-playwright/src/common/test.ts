import { test as base } from "@playwright/test";
import Session from "./session";
import { Channel } from "../model";

const test = base.extend({
  chatSession: async ({}, use) => {
    await Session.start(Channel.CHAT, use);
  },
});

export default test;
