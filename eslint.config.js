import path from "node:path";
import { fileURLToPath } from "node:url";

import createConfig from "@qws-org/eslint-config-react-typescript-jtym";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default createConfig({
  ts: { tsconfigRootDir: __dirname, project: ["./tsconfig.json"] },
  useReactRules: true,
  ignores: [
    ".storybook/**",
    "storybook-static",
    "vite.config.ts",
    "test.config.ts",
    "./src/icons/*",
  ],
  globs: {
    languageOptions: {
      ExtractArrayItemType: "readonly",
      ID: "readonly",
      DeepPartial: "readonly",
      UiKitFC: "readonly",
      AtLeastOne: "readonly",
    },
  },
});
