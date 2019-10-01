"use strict";

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let myPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * myPrime + value) % this.keyMap.length;
    }
    return total;
  }

  add(key, value) {
    let index = this._hash(key);
    if(!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }
    return undefined;
  }
  
  contains(key) {
    let index = this._hash(key);
    if(this.keyMap[index]) {
      return true;
    } else {
      return false;
    }
  }
}

// let ht = new HashTable(17);
// ht.add('maroon', '#800000');
// ht.add('yellow', '#FFFF00');
// ht.add('olive', '#808000');
// ht.add('lightcoral', '#F08080');
// ht.add('mediumvioletred', '#C71585');
// ht.add('plum', '#DDA0DD');

// console.log(ht.get('salmon'));
// console.log(ht.contains('plum'));


module.exports = HashTable;

