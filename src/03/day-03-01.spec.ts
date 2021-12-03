import { expect } from 'chai';
import { benchmark } from 'kelonio';

import { count, formatReport, readReport } from './day-03-01';

describe('Day 03 - Part 1', () => {
  it('should format the report', async function () {
    const input = `00100
11110
00110`;

    const expected = [
      ['0', '1', '0'],
      ['0', '1', '0'],
      ['1', '1', '1'],
      ['0', '1', '1'],
      ['0', '0', '0']
    ];

    const actual = formatReport(input);

    expect(expected).to.deep.equal(actual);

    await benchmark.record(() => formatReport(input), {
      iterations: 10
    });
  });

  it('should count the number of occurances in an array', async function () {
    const input = ['0', '1', '0'];

    let expected = 2;
    let actual = count(input, '0');

    expect(expected).to.equal(actual);

    expected = 1;
    actual = count(input, '1');

    expect(expected).to.equal(actual);

    await benchmark.record(() => count(input, '0'), {
      iterations: 10
    });
  });

  it('should return the gamma rate and epsilon rate', async function () {
    const input = `00100
11110
00110`;

    const expected = {
      gammaRate: '00110',
      epsilonRate: '11001'
    };

    const report = formatReport(input);
    const actual = readReport(report);

    expect(expected.gammaRate).to.equal(actual.gammaRate);
    expect(expected.epsilonRate).to.equal(actual.epsilonRate);

    await benchmark.record(() => readReport(report), {
      iterations: 10
    });
  });
});
