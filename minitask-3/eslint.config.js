import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.js"], languageOptions: { globals: globals.browser } },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      eqeqeq: "error",
      // "stylistic/semi": "error",
      "no-const-assign": "error",
      "no-constant-condition": "error",
      "no-duplicate-case": "error",
      "no-func-assign": "error",
      "no-undef": "error",
    },
  },
]);
