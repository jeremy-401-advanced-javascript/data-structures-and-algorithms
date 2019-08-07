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

  insert(value){
    var newNode = new Node(value);
    if(this.root === null){
        this.root = newNode;
        return this;
    }
    var current = this.root;
    while(true){
        if(value === current.value) return undefined;
        if(value < current.value){
            if(current.left === null){
                current.left = newNode;
                return this;
            }
            current = current.left;
        } else {
            if(current.right === null){
                current.right = newNode;
                return this;
            } 
            current = current.right;
        }
        if(value === current.value) return undefined;
        if(value > current.value){
            if(current.right === null){
                current.right = newNode;
                return this;
            }
            current = current.right;
        } else {
            if(current.left === null){
                current.left = newNode;
                return this;
            } 
            current = current.left;
        }
    }
  }

  preOrder(){
    // var data = [];
    let list = new pseudoQueue();
    function traverse(node){
      list.enqueue(node.value)
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      // data.push(node.value);
    }
    traverse(this.root);
    return list;
  }

  fizzBuzz(tree){
    function traverse(node){
      if(node.value % 5 === 0 && node.value % 3 === 0) {
        node.value = 'fizzbuzz';
      } else if(node.value % 5 === 0) {
        node.value = 'buzz';
      } else if(node.value % 3 === 0) {
        node.value = 'fizz';
      } else {
        node.value = node.value;
      }
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
     traverse(tree.root);
     return tree;
  }
}


var tree = new BinarySearchTree();
tree.insert(8);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//for submission
console.log(tree.fizzBuzz(tree));

// console.log('This is the tree 😍', tree);
console.log('This is the PreOrder list 😎', tree.preOrder());



