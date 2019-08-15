const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  //   it('Takes in two arguments', () => {
  //     expect(wrap('', 10)).to.equal('');
  //   });

  it('Returns the entire string if the string length <= maxLen', () => {
    expect(wrap('This string is smol', 30)).to.equal('This string is smol');
  });

  it('inserts a new line at or before maxLen if the string length > maxLen', () => {
    expect(wrap('This string', 5)).to.equal('This \nstring');
  });

  //   it('Returns a string of maxLen before/between new line', () => {
  //     expect(wrap('', 10)).to.equal('');
  //   });
});
