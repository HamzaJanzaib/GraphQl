
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["**/node_modules/**", "dist/**"],
    plugins: {
      import: importPlugin,
    },
    rules: {
      "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
      "import/extensions": ["error", "ignorePackages", { js: "always" }],
    },
  },
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
