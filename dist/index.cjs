'use strict';

const lodashEs = require('lodash-es');

const A = 5;

const func = (a, b) => {
  return a + b;
};
const func1 = (a, b) => {
  lodashEs.map([1, 2], console.log);
};

exports.A = A;
exports.func = func;
exports.func1 = func1;
