import { expect } from 'chai';

import { sonarSweep } from './day-01-01';

describe('Day 01 - Part 1', () => {
  let arr: Array<number>;

  it('should count the number of times the current number is larger than the previous', () => {
    arr = [1, 2, 3];

    let expected = 2;
    let actual = sonarSweep(arr);

    expect(expected).to.equal(actual);

    arr = [1, 3, 2];

    expected = 1;
    actual = sonarSweep(arr);

    expect(expected).to.equal(actual);
  });

  it('should not increment if the current number smaller than the previous', () => {
    arr = [3, 2, 1];

    const expected = 0;
    const actual = sonarSweep(arr);

    expect(expected).to.equal(actual);
  });
});
