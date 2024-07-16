import config from "./index.cjs";

export default [
  ...config,
  {
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];
