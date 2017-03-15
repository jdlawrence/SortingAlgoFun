var assert = require('assert');
var expect = require('chai').expect;
var bubbleSort = require('../src/bubbleSort');
var mergeSort = require('../src/mergeSort');
var swap = require('../src/helpers').swap;
var merge = require('../src/helpers').merge;

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
})