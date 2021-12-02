import { expect } from 'chai';
import { benchmark } from 'kelonio';

import { sonarSweep } from './day-01-01';
import { createGroups } from './day-01-02';

describe('Day 01 - Part 2', () => {
  let arr: Array<number>;

  it('should count the number of times the sum of the current group is more than the previous', () => {
    arr = [1, 2, 3, 4, 5, 6];
    // 6, 9, 12, 15

    const expected = 3;

    const groups = createGroups(arr);
    const actual = sonarSweep(groups);

    expect(expected).to.equal(actual);
  });

  it('should not increment if the current sum is smaller than the previous', () => {
    arr = [6, 5, 4, 3, 2, 1];
    // 15, 12, 9, 6

    const expected = 0;

    const groups = createGroups(arr);
    const actual = sonarSweep(groups);

    expect(expected).to.equal(actual);
  });

  afterEach(async () => {
    await benchmark.record(() => sonarSweep(arr), {
      iterations: 10
    });
  });
});
