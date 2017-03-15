var partition = require('./helpers').partition;

// Note: quickSort sorts in place and manipulates the input array
function quickSort(arr, left, right) {
  if (arr.length === 0) {
    return [];
  }
  if (left >= right) {
    return;
  }
  left = left === undefined ? 0 : left;
  right = right === undefined ? arr.length - 1 : right;
  var pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
  return arr;
}

console.log(quickSort([5, 4, 7, -2, 6]));

module.exports = quickSort;




