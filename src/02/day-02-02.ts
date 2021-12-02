// https://adventofcode.com/2021/day/2#part2

import { join } from 'path';

import { Direction, Instruction, getInput, getInstructions } from './day-02-01';

interface Position {
  aim: number;
  depth: number;
  horizontalPosition: number;
}

const file = join(__dirname, 'input.txt');

let input: string;

const actions = {
  [Direction.FORWARD]: (position: Position, value: number) => {
    position.horizontalPosition += value;
    position.depth += position.aim * value;
    return position;
  },
  [Direction.UP]: (position: Position, value: number) => {
    return (position.aim -= value);
  },
  [Direction.DOWN]: (position: Position, value: number) => {
    return (position.aim += value);
  }
};

try {
  input = getInput(file);

  const instructions = getInstructions(input);
  const submarine = maneuver(instructions);

  console.log('Day 02 - 02', submarine.depth * submarine.horizontalPosition);
} catch (error) {
  console.error(error);
}

function maneuver(instructions: Instruction[]): Position {
  const position: Position = {
    aim: 0,
    depth: 0,
    horizontalPosition: 0
  };

  for (let i = 0; i < instructions.length; i++) {
    actions[instructions[i].direction](position, instructions[i].value);
  }

  return position;
}

export { maneuver };
