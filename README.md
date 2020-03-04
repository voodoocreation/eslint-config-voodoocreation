eslint-config-voodoocreation
============================

An opinionated ESlint config with TypeScript support.


Usage
-----

### With React support

#### 1. Install peer dependencies
```shell script
npm install --save-dev \
    @typescript-eslint/eslint-plugin \
    eslint-config-airbnb-typescript \
    eslint-plugin-import \
    eslint-plugin-jsx-a11y \
    eslint-plugin-react \
    eslint-plugin-react-hooks \
    prettier
```

#### 2. Define your ESLint config
```json
{
  "extends": ["voodoocreation"],
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```

### Without React support

#### 1. Install peer dependencies
```shell script
npm install --save-dev \
    @typescript-eslint/eslint-plugin \
    eslint-config-airbnb-typescript \
    eslint-plugin-import \
    prettier
```

#### 2. Define your ESLint config
```json
{
  "extends": ["voodoocreation/base"],
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```
