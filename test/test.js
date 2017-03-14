var assert = require('assert');
var expect = require('chai').expect;
var bubbleSort = require('../src/bubbleSort');
var merge = require('../src/helpers').merge;

describe('BubbleSort', function () {
  it('Sorts an array in ascending order', () => {
    var unsorted = [5, 3, 1, -6, 7];
    var sorted = bubbleSort(unsorted);
    expect(sorted).to.eql([-6, 1, 3, 5, 7]);
  });
});

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