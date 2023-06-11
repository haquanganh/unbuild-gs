import { map } from 'lodash-es';
import { A } from './module/refer';
const func = (a: number, b: number) => {
  return a + b;
};

const func1 = () => {
  map([1, 2], console.log);
};

export { func, func1, A };
