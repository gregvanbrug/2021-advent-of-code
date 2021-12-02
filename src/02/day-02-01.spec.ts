import { expect } from 'chai';
import { benchmark } from 'kelonio';

import { getInstructions, maneuver, validInstruction } from './day-02-01';

describe('Day 02 - Part 1', () => {
  let input = `forward 1
down 1
up 1`;

  it('should return directions', async function () {
    const expected = [
      { direction: 'forward', value: 1 },
      { direction: 'down', value: 1 },
      { direction: 'up', value: 1 }
    ];
    const actual = getInstructions(input);

    expect(expected).to.deep.equal(actual);

    await benchmark.record(() => getInstructions(input), {
      iterations: 10
    });
  });

  it('should validate an instruction', async function () {
    const forward = validInstruction('forward');
    expect(forward).to.be.true;

    const backward = validInstruction('backward');
    expect(backward).to.be.false;

    await benchmark.record(() => validInstruction('forward'), {
      iterations: 10
    });
  });

  it('should only provide valid instructions', async function () {
    input = `forward 1
backward 1`;

    const expected = [{ direction: 'forward', value: 1 }];
    const actual = getInstructions(input);

    expect(expected).to.deep.equal(actual);

    await benchmark.record(() => getInstructions(input), {
      iterations: 10
    });
  });

  it('should return the depth and horizontal position', async function () {
    input = `forward 1
down 2
up 1`;

    const expected = {
      depth: 1,
      horizontalPosition: 1
    };

    const instructions = getInstructions(input);
    const actual = maneuver(instructions);

    expect(actual.depth).to.equal(expected.depth);
    expect(actual.horizontalPosition).to.equal(expected.horizontalPosition);

    await benchmark.record(() => maneuver(instructions), {
      iterations: 10
    });
  });
});
