
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }


  push(value) {
    let node = new Node(value)
    if(!this.head){
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  pop() {
    if(!this.head){
      return null;
    } else {
      let node = this.head;
      if(node.next) {
        node = node.next;
        this.head = node;
      } else {
        this.head = null;
        this.tail = null;
      }
      this.size--;
    }
  }

  enqueue(value){
    let node = new Node(value)
    if(!this.head){
      this.head = node;
      this.tail = node;
    }
    while (stack1 !== null) {
      stack2.push(stack1.pop())
    }
    stack1.push(value);
    while (stack2 !== null) {
      stack1.push(stack2.pop());
    }
  }

  dequeue(){
    if(stack1 = null){
      return undefined;
    }
     stack1.pop();
  }


}

let stack1 = new Stack();
let stack2 = new Stack();

// stack1.enqueue(5);
// stack1.enqueue(10);



const myQueue = new Stack();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue);


// console.log(stack1);
// console.log(stack1);



// let pseudoQueue = new PseudoQueue();
// pseudoQueue.enqueue(7);
// pseudoQueue.enqueue(12);
// pseudoQueue.enqueue(4);
// pseudoQueue.dequeue();
// console.log(pseudoQueue);