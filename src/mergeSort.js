var merge = require('./helpers').merge;

function mergeSort(arr, lo, hi) {
  var result = arr.slice(arr);
  lo = lo || 0;
  hi = hi || arr.length - 1;

  // Base case: lo and hi indices are the same
  if (lo >= hi) {
    console.log('end!!', lo, hi);
    return;
  }
  // Find the midpoint index
  var mid = Math.floor((lo + hi) / 2);
  // debugger;

  // Call merge on the left and right halves
  var left = mergeSort(arr.slice(lo, mid + 1), lo, mid);
  var right = mergeSort(arr.slice(mid + 1), mid + 1, hi);
  // Merge the sorted halves back together
  result = merge(left, right);
  return result;
}

var dummy = [1, 4, 7, 3, -5, 2, 0, 9];
var dummy2 = [1, 4, 7, 3];
console.log(mergeSort(dummy2));

console.log([0, 1, 2, 3, 4, 5, 6, 7].slice(0, 4));
console.log([0, 1, 2, 3, 4, 5, 6, 7].slice(4));
