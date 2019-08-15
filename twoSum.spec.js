/* eslint-disable no-undef */
const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty array if empty array was provided', () => {
    expect(twoSum([], 10).length).to.equal(0);
  });

  it('If not empty, the array length should equal 2', () => {
    expect(twoSum([1, 2, 5, 6, 4, 8, 9, 3, 7], 10).length).to.equal(2);
  });

  it('returns the first pair of indices to equal the specified target', () => {
    expect(twoSum([5, 3, 6, 7, 2], 8)).to.eql([0, 1]);
  });

  it('???????', () => {
    expect(twoSum([5, 4, 3, 2, 1], 8)).to.eql([0, 2]);
  });
  it('returns indices as an array', () => {
    expect(twoSum([1, 2, 3, 4, 5], 8)).to.eql([2, 4]);
  });
});
