function bubbleSort(arr) {
  // Make a copy of the original array
  var result = arr.slice();
  // Variable to hold the largest value so far
  debugger;

  // Iterate through every element
  for (var i = 0; i < result.length; i++) {
    // for every element, check if there's a smaller element in the rest of the array
    // if so, swap that small element with the current one 
    for (var j = i + 1; j < result.length; j++) {
      debugger;
      // var outer = result[i];
      // var inner = result[j];
      if (result[j] < result[i]) {
        swap(result, i, j);
      } 
    }
  } 
  return result;
}

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
var testArr = [6, 10, 4, 5, 7, 2, 9, 8, 3, 1];

console.log(bubbleSort(testArr));
// console.log(swap(testArr, 0, 9));
