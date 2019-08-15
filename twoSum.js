// Given an array of numbers,
// find two distinct elements that sum up to a specified target
// and return their indices as an array.
// You may not use the same element twice (two indices must be distinct).
// If no two indices add up to the target, return an empty array.

//  twoSum([1, 2, 3], 5); // returns [1, 2]

const twoSum = (array, target) => {
  let retArray = [];
  for (let i = 0; i < array.length; i++) {
    retArray.push(array[i]);
  }
  return retArray;
};
module.exports = twoSum;
