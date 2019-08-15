/* eslint-disable no-undef */

const wrap = (line, maxLen) => {
  let newString = '';
  if (line.length <= maxLen) {
    return line;
  }

  return newString;
};

module.exports = wrap;

console.log('Lorem ipsum dolor'.length);
console.log('sit eu amet, elit na'.length);
console.log('magna sem amet nulla'.length);
console.log('vel purus ac ligula'.length);
