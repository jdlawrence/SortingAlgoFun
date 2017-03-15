// libraries
var assert = require('assert');
var expect = require('chai').expect;

// sorting Algorithms
var bubbleSort = require('../src/bubbleSort');
var mergeSort = require('../src/mergeSort');
var quickSort = require('../src/quickSort');

// helper functions
var helpers = require('../src/helpers.js');
// var helpers = require('../src/helpers.solution.js');
var swap = helpers.swap;
var merge = helpers.merge;
var partition = helpers.partition;

describe('BubbleSort', function () {
  describe('The swap helper function', () => {
    it('Returns a new array with values swapped at the inputted indices', () => {
      var swapped = swap([1, 2, 3, 4, 5, 6], 2, 5);
      expect(swapped).to.eql([1, 2, 6, 4, 5, 3]);
    });
  });
  describe('The bubbleSort function itself', () => {
    it('Sorts an array in ascending order', () => {
      var sorted = bubbleSort([5, 3, 1, -6, 7]);
      expect(sorted).to.eql([-6, 1, 3, 5, 7]);
    });
  });
});

describe('MergeSort', function () {
  describe('The merge helper function', function () {
    it('Merges in two arrays of a single element each', () => {
      var merged = merge([7], [3])
      expect(merged).to.eql([3, 7]);
    })
    it('Merges arrays of unequal length where the first is longer', () => {
      var merged = merge([0, 1, 1, 2, 3, 5, 8, 13], [-3.1415927]);
      expect(merged).to.eql([-3.1415927, 0, 1, 1, 2, 3, 5, 8, 13]);
    });
    it('Merges arrays of unequal length where the first is shorter', () => {
      var merged = merge([-3.1415927], [0, 1, 1, 2, 3, 5, 8, 13]);
      expect(merged).to.eql([-3.1415927, 0, 1, 1, 2, 3, 5, 8, 13]);
    });
    it('Merges arrays of unequal length where the first is empty', () => {
      var merged = merge([], [0, 1, 1, 2, 3, 5, 8, 13]);
      expect(merged).to.eql([0, 1, 1, 2, 3, 5, 8, 13]);
    });
  })
  describe('The mergeSort function itself', () => {
    it('Sorts an array in ascending order', () => {
      var sorted = mergeSort([5, 3, 1, -6, 7]);
      expect(sorted).to.eql([-6, 1, 3, 5, 7]);
    });
  })
});

describe('QuickSort', function () {
  describe('The partition helper function', function () {
    it('Using the first value as the pivot, puts items less than or equal to pivot on the left and greater than on the right', () => {
      var arr = [4, 1, 2, 3, 5, 6, 7];
      var partitionIndex = partition(arr, 0, 6);
      expect(partitionIndex).to.eql(3);
    });
    it('Test for an array sorted in descending order', () => {
      var arr = [9, 8, 7, 6, 5];
      var partitionIndex = partition(arr, 0, 4);
      expect(partitionIndex).to.eql(4);
    });
    it('Test for an array sorted in ascending order', () => {
      var arr = [5, 6, 7, 8, 9];
      var partitionIndex = partition(arr, 0, 4);
      expect(partitionIndex).to.eql(0);
    })

  })
  describe('The quickSort function itself', () => {
    it('Sorts an array in ascending order', () => {
      var sorted = quickSort([5, 3, 1, -6, 7]);
      expect(sorted).to.eql([-6, 1, 3, 5, 7]);
    });
    it('Given an empty array, returns an empty array', function () {
      var sorted = quickSort([]);
      expect(sorted).to.eql([]);
    })
  })
});


