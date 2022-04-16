/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to top of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    this.size += 1;
    if(!this.first && !this.last) {
      this.first = newNode;
      this.last = newNode;
    };
    newNode.next = this.first;
    this.first = newNode;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(!this.first && !this.last) throw new Error("Stack is empty");
    this.size -= 1;
    const firstValue = this.first.val;
    this.first = this.first.next;
    return firstValue;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this.first && !this.last;
  }
}

module.exports = Stack;
