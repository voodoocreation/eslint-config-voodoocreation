module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    require.resolve("eslint-config-airbnb-typescript/base"),
    "plugin:import/typescript",
    require.resolve("eslint-config-prettier"),
  ],
  env: {
    "jest/globals": true,
    browser: true,
    node: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest", "import", "prefer-arrow"],
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
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
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "comma-dangle": "off",
    "consistent-return": "off",
    "default-case": "off",
    "func-names": "off",
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": "off",
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "no-nested-ternary": "off",
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "no-underscore-dangle": "off",
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: true,
      },
    ],
    "sort-keys": [
      "error",
      "asc",
      {
        natural: true,
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "index",
          ["sibling", "parent"],
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
};
