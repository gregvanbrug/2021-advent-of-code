// https://adventofcode.com/2021/day/3

import { readFileSync } from 'fs';
import { join } from 'path';

interface Diagnostic {
  gammaRate: string;
  epsilonRate: string;
}

const file = join(__dirname, 'input.txt');

let input: string;

try {
  input = getInput(file);

  const report = formatReport(input);
  const diagnostic = readReport(report);

  console.log(
    'Day 03 - 01',
    parseInt(diagnostic.gammaRate, 2) * parseInt(diagnostic.epsilonRate, 2)
  );
} catch (error) {
  console.error(error);
}

function readReport(data: Array<Array<string>>): Diagnostic {
  const diagnostic: Diagnostic = {
    gammaRate: '',
    epsilonRate: ''
  };

  for (let i = 0; i < data.length; i++) {
    const zeros = count(data[i], '0');
    const ones = count(data[i], '1');

    if (zeros > ones) {
      diagnostic.gammaRate += '0';
      diagnostic.epsilonRate += '1';
    } else {
      diagnostic.gammaRate += '1';
      diagnostic.epsilonRate += '0';
    }
  }

  return diagnostic;
}

function count(array: Array<string>, item: string): number {
  return array.filter((currentItem: string) => currentItem == item).length;
}

function formatReport(input: string): Array<Array<string>> {
  const values: Array<Array<string>> = [];

  input.split('\n').map((value: string) => {
    value.split('').forEach((bit: string, index: number) => {
      if (!values[index]) {
        values[index] = [];
      }
      values[index].push(bit);
    });
  });

  return values;
}

function getInput(file: string): string {
  return readFileSync(file, { encoding: 'utf-8' }).trim();
}

export { getInput, count, formatReport, readReport };
