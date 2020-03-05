module.exports = {
  extends: ["airbnb-typescript", require.resolve("./base.js")],
  rules: {
    "react/destructuring-assignment": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true
      }
    ],
    "react/prop-types": "off",
    "react/sort-comp": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": ["error", "static public field"],
    "react/style-prop-object": "off"
  }
};
