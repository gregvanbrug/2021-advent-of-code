import { expect } from 'chai';
import { benchmark } from 'kelonio';

import { getInstructions } from './day-02-01';
import { maneuver } from './day-02-02';

describe('Day 02 - Part 2', () => {
  it('should maneuver with aim', async function () {
    const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

    const expected = {
      aim: 10,
      depth: 60,
      horizontalPosition: 15
    };

    const instructions = getInstructions(input);
    const actual = maneuver(instructions);

    expect(actual.aim).to.equal(expected.aim);
    expect(actual.depth).to.equal(expected.depth);
    expect(actual.horizontalPosition).to.equal(expected.horizontalPosition);

    await benchmark.record(() => maneuver(instructions), {
      iterations: 10
    });
  });
});
