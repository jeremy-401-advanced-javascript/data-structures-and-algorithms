class Node {
 constructor(value) {
   this.value = value;
   this.next = null;
 }
}

class PseudoQueue {
 constructor() {
   this.head = null;
   this.tail = null;
   this.size = 0;
 }

 enqueue(value) {
   let node = new Node(value)
   if(!this.head){
     this.head = node;
     this.tail = node;
   } else {
     node.next = this.head;
     this.head = node;
   }
   this.size++;
 }

 dequeue() {
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
}

let pseudoQueue = new PseudoQueue();
pseudoQueue.enqueue(7);
pseudoQueue.enqueue(12);
pseudoQueue.enqueue(4);
pseudoQueue.dequeue();
console.log(pseudoQueue);


module.exports = PseudoQueue;