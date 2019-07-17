const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }


  append(value) {

    if(!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = new Node(value);
    this.tail = current.next;

  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;

    this.head = node;
    return this.head;
  }

  includes(value) {
    let current = this.head;

    while(current) {
      if (current.value === value) {
        console.log(true);
      } else {
        console.log(false);
      }

      current = current.next;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let output = '';

    while(current !== null) {
      output += current.value;
      current = current.next;
    }
    return console.log(output);
  }

  insertBefore(value, newValue){// (14, 'I go before you')
    if(!this.head){
      this.head = new Node(newValue);
      return;
    }
    if(value === this.head.value){
      this.insert(newValue);
      return;
    }
    let current = this.head;

    while(current.next.value !== value){
      current = current.next;
    }
    let node = new Node(newValue);
    node.next = current.next;
    current.next = node;
  }


  insertAfter(value, newValue){

    let current = this.head;
    let newNode = new Node(newValue);
    
    while(current.next) {
      if(current.value === value) {
        let saveNode = current.next;
        current.next = newNode;
        newNode.next = saveNode;
        return;
      }
      current = current.next;
    }
  }
  
  fromEnd(k){
    let current = this.head;
    let count = 0;
    while(current !== null){
      current = current.next;
      count++;
    }
    current = this.head;
    let nodeCompare = 0;
    while(current !== null){
      let target = count - k;
      nodeCompare++;
      if(target === nodeCompare){

        return current.value;
      }
      current = current.next;
    }
  }

}
let list = new LinkedList();
console.log(list.append(1));
console.log(list.append(2));
console.log(list.append(3));

// list.insert('Hello, ');
// console.log(list);

// list.includes('Kyran!!!!');
// list.toString();

console.log(list.insertBefore(1, 10));
console.log(list.insertAfter(2, 9));

console.log(list.fromEnd(3));
// console.log(list);
// list.add(2);
// list.add(2);
console.log(util.inspect(list,{depth:10}));

module.exports = { LinkedList, Node };