'use strict';
const MCW = require('./../mostCommonWord');

describe('This will should test out from mostCommoWord.js', () => {

  it('Should return most common word in string', () => {
    const myString = 'This will test my test for most common word test';
    expect(MCW(myString)).toEqual('test');
  });
  
  it('Should return null if string is equal to 0', () => {
    const myString = '';
    expect(MCW(myString)).toEqual(null);
  })
});
