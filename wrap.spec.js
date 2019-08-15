const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('Returns the entire string if the string length <= maxLen', () => {
    expect(wrap('This string is smol', 30)).to.equal('This string is smol');
  });

  it('inserts a new line at or before maxLen if the string length > maxLen', () => {
    expect(wrap('This string', 5)).to.equal('This\nstring');
  });

  it('does not separate whole words', () => {
    expect(wrap('Dog days', 6)).to.equal('Dog\ndays');
  });

  it('can wrap whole', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal(`Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.`);
  });

});
