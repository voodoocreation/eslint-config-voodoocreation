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

const [airbnb] = compat.extends("airbnb-typescript/base");
delete airbnb.plugins;
delete airbnb.rules["@typescript-eslint/lines-between-class-members"];
delete airbnb.rules["@typescript-eslint/no-throw-literal"];

module.exports = [
  airbnb,
  ...compat.extends("plugin:react-hooks/recommended"),
  ...compat.extends("plugin:jsx-a11y/recommended"),
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
