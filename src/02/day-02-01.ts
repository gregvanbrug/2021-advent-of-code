// https://adventofcode.com/2021/day/2

import { readFileSync } from 'fs';
import { join } from 'path';

enum Direction {
  'FORWARD' = 'forward',
  'DOWN' = 'down',
  'UP' = 'up'
}

interface Instruction {
  direction: Direction;
  value: number;
}

interface Position {
  depth: number;
  horizontalPosition: number;
}

const file = join(__dirname, 'input.txt');

let input: string;

const actions = {
  [Direction.FORWARD]: (position: Position, value: number) => {
    return (position.horizontalPosition += value);
  },
  [Direction.UP]: (position: Position, value: number) => {
    return (position.depth -= value);
  },
  [Direction.DOWN]: (position: Position, value: number) => {
    return (position.depth += value);
  }
};

try {
  input = getInput(file);

  const instructions = getInstructions(input);
  const submarine = maneuver(instructions);

  console.log('Day 02 - 01', submarine.depth * submarine.horizontalPosition);
} catch (error) {
  console.error(error);
}

function maneuver(instructions: Instruction[]): Position {
  const position: Position = {
    depth: 0,
    horizontalPosition: 0
  };

  for (let i = 0; i < instructions.length; i++) {
    actions[instructions[i].direction](position, instructions[i].value);
  }

  return position;
}

function validInstruction(instruction: string): boolean {
  const allowed: Array<string> = Object.values(Direction);
  return Object.values(allowed).includes(instruction);
}

function getInstructions(input: string): Instruction[] {
  return input
    .split('\n')
    .map((item: string): Instruction => {
      const instruction = item.split(' ');
      return {
        direction: instruction[0] as Direction,
        value: +instruction[1]
      };
    })
    .filter(item => {
      if (validInstruction(item.direction)) {
        return item;
      }
    });
}

function getInput(file: string): string {
  return readFileSync(file, { encoding: 'utf-8' }).trim();
}

export {
  Direction,
  Instruction,
  getInput,
  validInstruction,
  getInstructions,
  maneuver
};
