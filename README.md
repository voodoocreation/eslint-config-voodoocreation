eslint-config-voodoocreation
============================

An opinionated ESlint config with TypeScript support.


Usage
-----

### With React support

#### 1. Install peer dependencies
```shell script
npm install --save-dev \
    @typescript-eslint/eslint-plugin@^2.19.0 \
    eslint-config-airbnb-typescript \
    eslint-plugin-import@^2.18.2 \
    eslint-plugin-jsx-a11y@^6.2.3 \
    eslint-plugin-react@^7.15.1 \
    eslint-plugin-react-hooks@^1.7.0 \
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
    @typescript-eslint/eslint-plugin@^2.19.0 \
    eslint-config-airbnb-typescript \
    eslint-plugin-import@^2.18.2 \
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
