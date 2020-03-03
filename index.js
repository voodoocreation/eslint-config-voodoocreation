module.exports = {
  extends: ["airbnb-typescript", require.resolve("./base.js")],
  rules: {
    "react/state-in-constructor": "off",
    "react/static-property-placement": ["error", "static public field"],
    "react/destructuring-assignment": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/sort-comp": "off"
  }
};
