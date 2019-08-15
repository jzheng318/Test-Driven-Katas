/* eslint-disable no-undef */

// const wrap = (line, maxLen) => {
//   let newString = '';
//   if (line.length <= maxLen) {
//     return line;
//   }
//   else {
//     // newString = line.slice(0, maxLen) + '\n' + line.slice(maxLen);
//     line = line.split(' ');
//     let max = maxLen
//     for(let i = 0; i < line.length; i++) {
//       if(newString.length + line[i].length > max) {
//         newString += '\n';
//         newString += line[i]
//         max = max + max;
//       }
//       else {
//         newString += line[i] + ' '
//       }
//     }
//   }
//   console.log(newString);
//   return newString;
// };

function wrap(line, maxLen) {
  if(line.length <= maxLen) {
    return line;
  }

  const indexOfBlank = line.lastIndexOf(' ', maxLen);
  let split;
  let offset;
  if(indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = maxLen;
    offset = 0;
  }

  return line.substring(0, split) + '\n' + wrap(line.substring(split + offset), maxLen);
}

module.exports = wrap;
