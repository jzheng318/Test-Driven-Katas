// Given an array of numbers,
// find two distinct elements that sum up to a specified target
// and return their indices as an array.
// You may not use the same element twice (two indices must be distinct).
// If no two indices add up to the target, return an empty array.

//  twoSum([1, 2, 3], 5); // returns [1, 2]

const twoSum = (array, target) => {
  let retArray = [];
  for (let i = 0; i < array.length; i++) {
    let ele1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let ele2 = array[j];
      if (ele1 + ele2 === target) {
        retArray.push(i, j);
        return retArray;
      }
    }
  }
  return retArray;
  // for (let i = 0; i < array.length; i++) {
  //   retArray.push(array[i]);
  // }
};
module.exports = twoSum;
