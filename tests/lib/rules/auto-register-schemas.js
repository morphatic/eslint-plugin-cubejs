/**
 * @fileoverview automatically add cube schema names to `global` symbols
 * @author Morgan Benton &lt;morgan.benton@gmail.com&gt; (https://morphatic.com)
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/auto-register-schemas')

const RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('auto-register-schemas', rule, {

  valid: [
    `cube('Test', {
      joins: {
        a: { sql: 'a', type: 'sum' },
        b: { sql: \`round(\${a})\` type: 'number' },
      },
    })`,
  ],

  invalid: [
    {
      code: '',
      errors: [{
        message: 'Fill me in.',
        type: 'Me too',
      }],
    },
  ],
})
