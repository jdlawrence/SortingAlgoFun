var partition = require('./helpers.js').partition;
// var partition = require('./helpers.solution.js').partition;

// Note: quickSort sorts in place and manipulates the input array
function quickSort(arr, left, right) {
  // Initial conditions for left and right if they're not passed in
  left = left === undefined ? 0 : left;
  right = right === undefined ? arr.length - 1 : right;

  // If the array is empty return an empty array
  if (arr.length === 0) {
    return [];
  }

  // Base case: You have 0 or elements left to pivot
  if (left >= right) {
    return;
  }

  // Find the index which separates into a low and higher array
  var pivotIndex = partition(arr, left, right);

  // Sort the elements on either side of the pivot
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);

  return arr;
}

module.exports = quickSort;




