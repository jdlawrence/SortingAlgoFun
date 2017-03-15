var swap = require('./helpers.js').swap;
// var swap = require('./helpers.solution.js').swap;

function bubbleSort(arr) {
  // Make a copy of the original array
  var result = arr.slice();

  // Iterate through every element
  for (var i = 0; i < result.length; i++) {
    // At every position, check if the next element is larger than the current.
    // If so, swap
    // After every iteration, the largest element will be at the end of array
    for (var j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        swap(result, j, j + 1);
      }
    }
  }
  return result;
}


module.exports = bubbleSort;
