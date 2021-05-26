# eslint-plugin-cubejs

A plugin to enable [ESLint](https://eslint.org) for [CubeJS](https://cube.dev) projects.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-cubejs`:

```sh
npm install eslint-plugin-cubejs --save-dev
```

## Usage

Add `cubejs` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["cubejs"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "cubejs/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
