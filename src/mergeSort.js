var merge = require('./helpers.js').merge;
// var merge = require('./helpers.solution.js').merge;

function mergeSort(arr, lo, hi) {
  var result = arr.slice(arr);
  lo = lo === undefined ? 0 : lo;
  hi = hi === undefined ? arr.length - 1 : hi;

  // Base case: if lo and hi indices are the same
  // slice off the element at the index
  if (lo >= hi) {
    return arr.slice(lo, lo + 1);
  }
  // Find the midpoint index
  var mid = Math.floor((lo + hi) / 2);

  // Call merge on the left and right halves
  var left = mergeSort(arr, lo, mid);
  var right = mergeSort(arr, mid + 1, hi);
  // Merge the sorted halves back together
  result = merge(left, right);
  return result;
}

module.exports = mergeSort;




