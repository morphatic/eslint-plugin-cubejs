/**
 * @fileoverview automatically add cube schema names to `global` symbols
 * @author Morgan Benton <morgan.benton@gmail.com> (https://morphatic.com)
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'automatically add cube schema names to `global` symbols',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    const program = context.getScope().getTokens()
    console.log(program)
    const src = context.getSourceCode()
    const cubeTokenIndex = src.tokensAndComments.findIndex(t => t.type === 'Identifier' && t.value === 'cube')
    const slicedTokens = src.tokensAndComments.slice(cubeTokenIndex)
    const cubeName = slicedTokens.filter(t => t.type === 'String')[0].value
    console.log('Cube:', cubeName)
    return {
      'Program'(/* node */) {
        // get the global scope
        const globalScope = context.getScope()
        // get the tokens
        const tokens = context.getSourceCode().getTokens()
        globalScope.through.forEach(ref => {
          const identifier = ref.identifier

          if (!considerTypeOf && hasTypeOfOperator(identifier)) {
            return
          }

          context.report({
            node: identifier,
            messageId: 'undef',
            data: identifier,
          })
        })
      },
    }
  },
}
