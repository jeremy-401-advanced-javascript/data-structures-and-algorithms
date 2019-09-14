const insertionSort = require('./../insertionSort.js');

describe('Testing merge sort code', () => {

  it('insertionSort should return an assorted array in ascending order',  () => {
    let myArray = [17, 39, 5, 87, 1];
    expect(insertionSort(myArray)).toStrictEqual([1, 5, 17, 39, 87]);
  })
  
})
