const { fixupConfigRules, fixupPluginRules } = require("@eslint/compat");
const { FlatCompat } = require("@eslint/eslintrc");
const eslint = require("@eslint/js");
const _import = require("eslint-plugin-import");
const jest = require("eslint-plugin-jest");
const preferArrow = require("eslint-plugin-prefer-arrow");
const globals = require("globals");
const tsEslint = require("typescript-eslint");

const compat = new FlatCompat({
  allConfig: eslint.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
});

const [airbnb] = compat.extends("airbnb-typescript/base");
delete airbnb.plugins;

const [prettier] = compat.extends("prettier");

const presets = fixupConfigRules([
  ...compat.extends("plugin:import/typescript"),
  airbnb,
  prettier,
]);

module.exports = tsEslint.config({
  extends: [
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    ...presets,
  ],
  languageOptions: {
    globals: {
      ...jest.environments.globals.globals,
      ...globals.browser,
      ...globals.node,
    },
    parserOptions: {
      project: true,
    },
  },
  plugins: {
    import: fixupPluginRules(_import),
    jest,
    "prefer-arrow": preferArrow,
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-ordering": "error",

    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: ["camelCase"],
        leadingUnderscore: "allow",
        selector: "default",
        trailingUnderscore: "allow",
      },
      {
        format: null,
        selector: "import",
      },
      {
        format: null,
        selector: "objectLiteralProperty",
      },
      {
        format: null,
        selector: "objectLiteralMethod",
      },
      {
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "forbid",
        selector: "memberLike",
        trailingUnderscore: "forbid",
      },
      {
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        selector: "variableLike",
        trailingUnderscore: "allow",
      },
      {
        format: ["PascalCase"],
        selector: "typeLike",
      },
      {
        format: ["PascalCase", "UPPER_CASE"],
        selector: "enum",
      },
    ],

    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",

    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],

    "comma-dangle": "off",
    "consistent-return": "off",
    "default-case": "off",
    "func-names": "off",
    "implicit-arrow-linebreak": "off",

    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "index",
          ["sibling", "parent"],
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],

    "import/prefer-default-export": "off",

    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],

    "no-nested-ternary": "off",

    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],

    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "no-underscore-dangle": "off",

    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        classPropertiesAllowed: true,
        disallowPrototype: true,
        singleReturnOnly: false,
      },
    ],

    "sort-keys": [
      "error",
      "asc",
      {
        natural: true,
      },
    ],
  },
});
