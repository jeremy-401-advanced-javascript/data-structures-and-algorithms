'use strict';

const HashTable = require('./../hashtable.js');

const hashTable = new HashTable();

console.log('This is the hash table 🤩', HashTable);



describe('Testing hash table functionality', () => {

  it('Should take in a string as a key and reduce to a index number value',  () => {
    let myKey = 'plum';
    expect(typeof hashTable._hash(myKey)).toBe('number');
  })
  
}) 

