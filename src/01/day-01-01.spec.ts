import sonarSweep from './day-01-01';
import { expect } from 'chai';

describe('Day 01', () => {
  let arr: Array<number>;

  describe('sonarSweep', () => {
    it('should count the number of times the current number is larger than the previous', () => {
      arr = [1, 2, 3];

      const expected = 2;
      const actual = sonarSweep(arr);

      expect(expected).to.equal(actual);
    });

    it('should not increment if the current number smaller than the previous', () => {
      arr = [3, 2, 1];

      const expected = 0;
      const actual = sonarSweep(arr);

      expect(expected).to.equal(actual);
    });
  });
});
