import config from "./index.cjs";

export default [
  ...config,
  {
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
