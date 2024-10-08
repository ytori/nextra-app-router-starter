// @ts-check

import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";
import prettierConfig from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const nextConfig = fixupConfigRules([
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/_meta.js"],
    rules: {
      "import/no-anonymous-default-export": ["off"],
    },
  },
]);

/** @type {(import("eslint").Linter.Config)[]} */
const config = [
  {
    ignores: [
      "pnpm-lock.yaml",
      ".pnpm-store/*",
      ".next/*",
      "public/*",
      "out/*",
      ".vercel/*",
    ],
  },
  ...nextConfig,
  prettierConfig,
];

export default config;
