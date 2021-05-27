/**
 * @fileoverview A plugin to enable ESLint (https://eslint.org) for CubeJS (https://cube.dev) projects
 * @author Morgan Benton
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import path from 'path'
import requireIndex from 'requireindex'

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// cubejs-specific global variables
const globals = {
  CUBE: 'readonly',
  cube: 'readonly',
  FILTER_PARAMS: 'readonly',
  SECURITY_CONTEXT: 'readonly',
  SQL_UTILS: 'readonly',
  TABLE: 'readonly',
  USER_CONTEXT: 'readonly',
}

// import all rules in lib/rules
const rules = requireIndex(path.join(__dirname, '/rules'))

// setup cubejs configs
const configs = {
  recommended: {
    globals,
    plugins: [
      'cubejs',
    ],
    rules: {
      'cubejs/auto-register-schemas': 'error',
    },
  },
}

module.exports = {
  configs,
  rules,
}
