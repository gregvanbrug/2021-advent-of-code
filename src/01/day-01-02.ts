// https://adventofcode.com/2021/day/1#part2

import { join } from 'path';

import { getInput, sonarSweep } from './day-01-01';

const file = join(__dirname, 'input.txt');

let input: Array<number>;

try {
  input = getInput(file);

  const groups = createGroups(input);

  const submarine = sonarSweep(groups);
  console.log('Day 01 - 02', submarine);
} catch (error) {
  console.error(error);
}

function createGroups([a, b, c, ...rest]: Array<number>): Array<number> {
  if (rest.length === 0) {
    return [a + b + c];
  }
  return [a + b + c].concat(createGroups([b, c, ...rest]));
}

export { createGroups };
