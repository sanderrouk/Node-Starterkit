/**
 * Created by S on 6.04.2017.
 */
// This file is not transpiled

//Require babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function () {};
