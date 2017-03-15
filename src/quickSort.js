var partition = require('./helpers').partition;

// Note: quickSort sorts in place and manipulates the input array
function quickSort(arr, left, right) {
  left = left === undefined ? 0 : left;
  right = right === undefined ? arr.length - 1 : right;
  debugger;  
  var pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, left);
  return arr;
}

quickSort([4, 3, 2, 1]);

module.exports = quickSort;




