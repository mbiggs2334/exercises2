/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head) throw new Error("List is empty");
    let currentNode = this.head;
    let previousNode;
    while(currentNode.next){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.length -= 1;
    if(this.head === this.tail){
      let returnVal = this.head.val;
      this.head = null;
      this.tail = null;
      return returnVal;
    };
    this.tail = previousNode;
    this.tail.next = null;
    return currentNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let currentHead = this.head;
    this.length -= 1;
    if(this.head.next){
      this.head = this.head.next;
      return currentHead.val;
    }
    this.head = null;
    this.tail = null;
    return currentHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    for(let i = 0; i !== idx; i++){
      currentNode = currentNode.next;
      if (!currentNode) throw new Error("Invalid Index");
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    for(let i = 0; i !== idx; i++){
      currentNode = currentNode.next;
      if (!currentNode) throw new Error("Invalid Index");
    }
    currentNode.val = val;
    return currentNode.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    this.length += 1;

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      return;
    };

    let currentNode = this.head;
    let previousNode;
    for(let i = 0; i !== idx; i++){
      previousNode = currentNode;
      if(previousNode === this.tail){
        this.tail.next = newNode;
        this.tail = newNode;
        return
      }
      currentNode = currentNode.next;
      if (!currentNode && previousNode !== this.tail) throw new Error("Invalid Index");
    }
    previousNode.next = newNode;
    newNode.next = currentNode;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    this.length -= 1;

    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
      return null;
    };

    let currentNode = this.head;
    let previousNode;

    for(let i = 0; i !== idx; i++){
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (!currentNode && previousNode !== this.tail) throw new Error("Invalid Index");
    }

    previousNode.next = currentNode.next;
    return currentNode.val;

  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.head) return 0;
    let currentNode = this.head;
    let accum = 0;
    while(currentNode){
      accum += currentNode.val;
      currentNode = currentNode.next;
    }
    return accum / this.length;
  }
}

module.exports = LinkedList;
