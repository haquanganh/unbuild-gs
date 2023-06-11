import { map } from 'lodash-es';

const A = 5;

const func = (a, b) => {
  return a + b;
};
const func1 = (a, b) => {
  map([1, 2], console.log);
};

export { A, func, func1 };
