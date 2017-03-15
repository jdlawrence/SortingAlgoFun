# Getting Started
Welcome to my brief introduction to sorting algorithms!

To get get started, from the command line, please run 
```
npm install 
```

After all dependencies have installed, please run the following.
```
npm test 
```
Observe that many tests are currently failing. Work though helper functions found in `/src/helpers` to make the tests pass.

# Motivation
BubbleSort, mergeSort, and quickSort are the three sort most likely to be appear in interview questions. Behind the scenes, Javascript's V8 engine uses a version of quickSort to implement its native array sort method. Strong familiarity with at least these algorithms, and potentially insertionSort, will provide a solid foundation in sorting.

# Facts:
- The best time known time complexity for ANY sorting algorithm is O(n * log (n)), aka linearithmic, ON AVERAGE.

### BubbleSort: 
Starting on the left, compare adjacent items and keep “bubbling” (swapping) the larger one to the right. Eventually the largest element will be at the end of the array in its final place. Bubble sort the remaining N - 1 items.

- Best Case: O(n)
- Average Case: O(n^2)
- Advantages: Easy to implement

### MergeSort:
Recursively divide the array into subarrays of length 1. Merge them all back together. 
- Best Case: O(n * log (n))
- Average Case: O(n * log (n))
- Advantages: Worse case is O(n * log(n)), which is better than the QuickSort worst case

### QuickSort:
Select a pivot element and organize the array such that all elements left of it are less than or equal to it, and all elements right of it are greater than it. Recurse on the elements to two halves outside of the pivot.
- Best Case O(n * log (n))
- Average Case: O(n * log (n))
- Worst Case: O(n^2);
- Advantages: It can be done in place, using little amount of memory


# References
- Great visualization of several algorithms:
https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html
- BubbleSort: https://en.wikipedia.org/wiki/Bubble_sort
- MergeSort: https://en.wikipedia.org/wiki/Merge_sort
- QuickSort: https://en.wikipedia.org/wiki/Quicksort
 