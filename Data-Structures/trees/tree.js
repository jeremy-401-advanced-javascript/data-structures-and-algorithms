'use strict';

const pseudoQueue = require('./../stacksAndQueues/stacks-and-queues.js');



class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

class BinarySearchTree{

  constructor() {

    this.root = null;
    
  }

  insert(value) {

    var newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if(value === current.value) return undefined;

        if(value < current.value) {
          if(current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          } 
        } else if(value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  preOrder() {
    
    let current  = this.root;
    let list = new pseudoQueue();
    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      list.enqueue(node.value);
    }
    traverse(current);
    return list;
  }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(6);
tree.insert(2);
tree.insert(11);

console.log('This is the tree 😍', tree);
console.log('This is the PreOrder list 😎', tree.preOrder());



