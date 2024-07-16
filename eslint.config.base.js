import config from "./base.cjs";

export default [
  ...config,
  {
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];
