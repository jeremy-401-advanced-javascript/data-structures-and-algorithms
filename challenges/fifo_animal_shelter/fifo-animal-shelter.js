'use strict'

let myQ = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');

// Pushing to correct issue
class AnimalShelter{
    constructor(){
        this.dogQueue = new myQ;
        this.catQueue = new myQ;
    };
    enqueue(animal){
        if(animal.species === 'dog'){
            this.dogQueue.enqueue(animal);
            return true
        }
        if(animal.species === 'cat'){
            this.catQueue.enqueue(animal);
            return true
        }
        else{return null};
    };
    dequeue(pref){
        if(pref === 'dog'){
            return this.dogQueue.dequeue();
        }
        if(pref === 'cat'){
            return this.catQueue.dequeue();
        }
        else{return null};
    };
}

module.exports = AnimalShelter;