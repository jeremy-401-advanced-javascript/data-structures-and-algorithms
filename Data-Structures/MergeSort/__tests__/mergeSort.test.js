const mergeSort = require('./../mergeSort.js').mergeSort;
const mergeTwoArr = require('./../mergeSort').mergeTwoArr;

describe('Testing merge sort code', () => {

  it('mergeTwoArr should return an array in ascending order',  () => {
    let arr1 = [1,3,5];
    let arr2 = [2,4,6];
    expect(mergeTwoArr(arr1,arr2)).toStrictEqual([1,2,3,4,5,6]);
  })
})


