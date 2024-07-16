const { fixupPluginRules } = require("@eslint/compat");
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const react = require("eslint-plugin-react");

const base = require("./base.cjs");

const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends("airbnb-typescript"),
  ...base,
  {
    plugins: {
      react: fixupPluginRules(react),
    },

    rules: {
      "react/destructuring-assignment": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-spreading": "off",

      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          ignoreCase: true,
          shorthandLast: true,
        },
      ],

      "react/jsx-wrap-multilines": "off",

      "react/prop-types": "off",
      "react/sort-comp": "off",
      "react/state-in-constructor": "off",
      "react/static-property-placement": ["error", "static public field"],
      "react/style-prop-object": "off",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
