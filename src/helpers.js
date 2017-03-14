function swap(arr, first, second) {
  if (first === undefined || second === undefined) {
    return arr;
  } else {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
  return arr;
}

function merge(left, right) {
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < left.length || rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else if (right[rightIndex] < left[leftIndex]) {
      result.push(right[rightIndex++]);
    } else if (leftIndex === left.length) {
      result.push(right[rightIndex++]);
    } else {
      result.push(left[leftIndex++]);
    }
  }
  return result;
}

var left = [7];
var right = [3];

console.log(merge(left, right));

module.exports = {
  merge: merge,
  swap: swap
};
