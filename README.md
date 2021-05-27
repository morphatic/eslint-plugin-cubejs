# eslint-plugin-cubejs

[![Build Status](https://travis-ci.org/morphatic/eslint-plugin-cubejs.svg?branch=main)](https://travis-ci.org/morphatic/eslint-plugin-cubejs)
[![Coverage Status](https://coveralls.io/repos/github/morphatic/eslint-plugin-cubejs/badge.svg?branch=main)](https://coveralls.io/github/morphatic/eslint-plugin-cubejs?branch=main)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![GitHub issues](https://img.shields.io/github/issues/morphatic/eslint-plugin-cubejs)](https://github.com/morphatic/eslint-plugin-cubejs/issues)
[![GitHub license](https://img.shields.io/github/license/morphatic/eslint-plugin-cubejs)](https://github.com/morphatic/eslint-plugin-cubejs/blob/main/LICENSE)

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
