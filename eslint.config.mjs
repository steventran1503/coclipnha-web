// @ts-check
import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    // Frontmatter + <script> trong .astro dùng TypeScript (interface, kiểu,
    // "as") — cần parser TS thay vì espree mặc định để không báo lỗi parse.
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
];
