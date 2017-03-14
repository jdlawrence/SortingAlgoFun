var assert = require('assert');
var expect = require('chai').expect;
var bubbleSort = require('../src/bubbleSort');

describe('BubbleSort', function () {
  it('Sorts an array in ascending order', () => {
    var unsorted = [5, 3, 1, -6, 7];
    var sorted = bubbleSort(unsorted);
    expect(sorted).to.eql([-6, 1, 3, 5, 7]);
  });
});