import { readFileSync } from 'fs';
import { join } from 'path';

const file = join(__dirname, 'input.txt');

let input: Array<number>;

try {
  input = readFileSync(file, { encoding: 'utf-8' })
    .split('\n')
    .map(item => +item);

  const submarine = sonarSweep(input);
  console.log(submarine);
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

export default sonarSweep;
