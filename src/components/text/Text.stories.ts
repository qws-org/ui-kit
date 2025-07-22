import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI-Kit typography components/Text",
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    m: 12,
    p: 12,
    content:
      "## 1. Introduction\n1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.\n         \n1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.\n\n## 2. Your Account\n### 2.1 Legal requirements\n2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.\n\n2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France\n\n![welcome-offer-bg](https://jpws-cms-dev-test-test.jack-flush.com/assets/dd95fd77-37b6-418b-a497-bf550a87124f.PNG?width=300&amp)\n## 3. Multi Accounts\n- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.\n- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.\n On your Android device, open Chrome\n\n 1. Tap the ⋮ (three dots) icon to the right of the address bar\n\n 2. Select Clear browsing data\n\n 3. In the Basic settings section:\n\n 4. Choose a time range (default is 15 minutes)\n\n 5. Tap Clear data ",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    content:
      "## 1. Introduction\n1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.\n         \n1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.\n\n## 2. Your Account\n### 2.1 Legal requirements\n2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.\n\n2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France\n\n![welcome-offer-bg](/welcome-offer-bg-desktop.jpg)\n## 3. Multi Accounts\n- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.\n- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.\n",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    content:
      "## 1. Introduction\n1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.\n         \n1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.\n\n## 2. Your Account\n### 2.1 Legal requirements\n2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.\n\n2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France\n\n![welcome-offer-bg](/welcome-offer-bg-desktop.jpg)\n## 3. Multi Accounts\n- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.\n- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.\n",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    content:
      "## 1. Introduction\n1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.\n         \n1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.\n\n## 2. Your Account\n### 2.1 Legal requirements\n2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.\n\n2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France\n\n![welcome-offer-bg](/welcome-offer-bg-desktop.jpg)\n## 3. Multi Accounts\n- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.\n- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.\n",
  },
};
export const DisplayHidden: Story = {
  args: {
    size: "large",
    md: { display: "hidden" },
    d: { display: "block" },
    content: "Content is hidden in tablet screen",
  },
};

export const Table: Story = {
  args: {
    content:
      '<h2 class="info-block-title">Understanding the Betting Actions in 5 Card Omaha</h2>\n' +
      '<div class="info-block-description">\n' +
      "<p>Getting to grips with betting actions is essential to playing poker games well. The main betting choices offered in most poker variations are summarised as follows:</p>\n" +
      "<table>\n" +
      "<thead>\n" +
      "<tr>\n" +
      "<th>Betting Option</th>\n" +
      "<th>Usage</th>\n" +
      "</tr>\n" +
      "</thead>\n" +
      "<tbody>\n" +
      "<tr>\n" +
      "<td>Check</td>\n" +
      "<td>If there isn&rsquo;t a bet in the current betting round, we can use this option to move the action to our left without placing a wager.</td>\n" +
      "</tr>\n" +
      "<tr>\n" +
      "<td>Bet</td>\n" +
      "<td>We placed the first wager in this round of betting, compelling other players to either match it or fold.</td>\n" +
      "</tr>\n" +
      "<tr>\n" +
      "<td>Fold</td>\n" +
      "<td>We refuse to match the bet that is currently in play. Resigning from the pot and forfeiting any claim to it is known as folding.</td>\n" +
      "</tr>\n" +
      "<tr>\n" +
      "<td>Call</td>\n" +
      "<td>If there is an existing wager in the current betting round, &ldquo;calling&rdquo; means precisely matching that stake to remain in the hand.</td>\n" +
      "</tr>\n" +
      "<tr>\n" +
      "<td>Raise</td>\n" +
      "<td>We have the option of raising any wager that is already in place during the current betting round. The first bettor is then required to fold or match our raise.</td>\n" +
      "</tr>\n" +
      "<tr>\n" +
      "<td>Re-raise</td>\n" +
      "<td>We have the option of raising again if a player has already raised on the current street. &ldquo;Re-raises,&rdquo; with names like &ldquo;3-bets,&rdquo; &ldquo;4-bets,&rdquo; and so on, are raises that come after the initial one.</td>\n" +
      "</tr>\n" +
      "</tbody>\n" +
      "</table>",
  },
};
