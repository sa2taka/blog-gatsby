// reffer: https://qiita.com/Takepepe/items/144209f860fbe4d5e9bb#gatsby-nodejs-%E3%82%92-ts%E5%8C%96%E3%81%99%E3%82%8B

'use strict';
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});
exports.createPages = require('./gatsby-node/index').createPages;
