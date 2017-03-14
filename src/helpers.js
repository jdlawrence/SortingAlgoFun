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

  return result;
}

module.exports = {
  merge: merge,
  swap: swap
};
