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
        return true;
      } 

    current = current.next

    }
    return false;
  }

  toString() {
    let current = this.head;
    let output = '';
    
    while(current !== null) {
      output += current.value;
      current = current.next;
    }
    return output;
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
  
  
  insertBefore(value, newValue){// (14, 'I go before you')
  if(!this.head){
    this.head = new Node(newValue);
    return;
  }

    let current = this.head;

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
}

function mergeLinkedLists(l1, l2){

  let current1 = l1.head;
  let current2 = l2.head;
  let mergeList = new LinkedList();

  while(current1 || current2){
    if(current1){
      mergeList.append(current1.value);
      current1 = current1.next;
    }

    if(current2){
      mergeList.append(current2.value);
      current2 = current2.next;
    }
  }
  return mergeList.head;
}


let list = new LinkedList();
list.append('my ');
list.append('name ');
list.append('is ');
list.append('Kyran!!!!');
list.insert('Hello, ');

list.includes('Kyran!!!!');
list.toString();
// list.add(2);
// list.add(2);
console.log(util.inspect(list,{depth:10}));

module.exports = {LinkedList, mergeLinkedLists};