const quickSort = require('./../quickSort.js');

describe('Testing quick sort code', () => {

  it('quickSort should return an assorted array in ascending order',  () => {
    let myArray = [17, 39, 5, 87, 1];
    expect(quickSort(myArray)).toStrictEqual([1, 5, 17, 39, 87]);
  })
  
})
