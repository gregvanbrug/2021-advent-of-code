// https://adventofcode.com/2021/day/1

import { readFileSync } from 'fs';
import { join } from 'path';

const file = join(__dirname, 'input.txt');

let input: Array<number>;

try {
  input = getInput(file);
  const submarine = sonarSweep(input);
  console.log('Day 01 - 01', submarine);
} catch (error) {
  console.error(error);
}

function sonarSweep(input: Array<number>): number {
  return input.reduce(
    (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Array<number>
    ) => {
      const count =
        currentValue > array[currentIndex - 1]
          ? ++previousValue
          : previousValue;

      return count;
    },
    0
  );
}

function getInput(file: string): Array<number> {
  return readFileSync(file, { encoding: 'utf-8' })
    .trim()
    .split('\n')
    .map(item => +item);
}

export { getInput, sonarSweep };
