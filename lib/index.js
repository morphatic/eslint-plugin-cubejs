/**
 * @fileoverview A plugin to enable ESLint (https://eslint.org) for CubeJS (https://cube.dev) projects
 * @author Morgan Benton
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



