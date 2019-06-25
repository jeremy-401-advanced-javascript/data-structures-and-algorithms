'use strict';

function reverse(arr) {
  let start = 0;
  let end = arr.length-1;
  while(start <= end) {
    let temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;
    start++;
    end--;
  }
}

let testArr = ['a', 'b', 'c', 'd', 'e'];

console.log(testArr);

reverse(testArr);

console.log(testArr);