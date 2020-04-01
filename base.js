module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript/base",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",
    "prettier",
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
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
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
