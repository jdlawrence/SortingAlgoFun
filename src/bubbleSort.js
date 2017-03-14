var swap = require('./helpers').swap;

function bubbleSort(arr) {
  // Make a copy of the original array
  var result = arr.slice();
  // Variable to hold the largest value so far

  // Iterate through every element
  for (var i = 0; i < result.length; i++) {
    // for every element, check if there's a smaller element in the rest of the array
    // if so, swap that small element with the current one
    for (var j = i + 1; j < result.length; j++) {
      if (result[j] < result[i]) {
        swap(result, i, j);
      }
    }
  }
  return result;
}


module.exports = bubbleSort;
