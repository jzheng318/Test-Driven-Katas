/* eslint-disable no-undef */
const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty array if empty array was provided', () => {
    expect(twoSum([], 10).length).to.equal(0);
  });

  it('If not empty, the array length should equal 2', () => {
    expect(twoSum([3, 7], 10).length).to.equal(2);
  });

  it('returns indices as an array yo.', () => {
    expect(twoSum([3, 7], 10).length).to.equal(2);
  });
});
