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

function partition(arr, left, right) {
  var result = arr.slice();
  var pivotIndex = 0;
  var pivotVal = result[left];
  left = left === undefined ? 1 : left;
  right = right === undefined ? arr.length - 1 : right;

  while (left < right) {
    // Move right until you find a value greater than the pivot
    while (result[left] <= pivotVal) {
      left++;
    }

    // Move left until you find a value less than or equal to the pivot
    while (result[right] > pivotVal) {
      right--;
    }

    if (left < right) {
      swap(result, left++, right--);
    } else {
      break;
    }
  }
  swap(result, right, pivotIndex);
  return result;
}

var dummy = [4, 7, 6, 1, 2];

console.log(partition(dummy));
module.exports = {
  merge: merge,
  partition: partition,
  swap: swap
};
