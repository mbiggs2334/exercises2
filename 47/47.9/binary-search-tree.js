class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if(!this.root) {
      this.root = newNode;
      return;
    };
    let currentNode = this.root;
    while(currentNode){
      if(val < currentNode.val) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        };
      };
      if(val > currentNode.val){
        if(!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        };
      };
    };
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);

    if(!this.root) {
      this.root = newNode;
      return;
    };

    function helper(node){
      if(val < node.val) {
        if(node.left){
          helper(node.left);
        } else {
          node.left = newNode;
        };
      } else {
        if(node.right){
          helper(node.right);
        } else {
          node.right = newNode;
        };
      };
    };

    helper(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(!this.root) return;
    let currentNode = this.root;
    while(currentNode){
      if(currentNode.val === val) return currentNode;
      if(val < currentNode.val) currentNode = currentNode.left;
      if(val > currentNode.val) currentNode = currentNode.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(!this.root) return;
    let foundNode;

    function helper(node){
      if(node.val === val) foundNode = node;
      if(val < node.val && node.left) helper(node.left);
      if(val > node.val && node.right) helper(node.right);
    }

    helper(this.root);
    return foundNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let traversedArray = [];

    function helper(node){
      traversedArray.push(node.val);
      if(node.left) helper(node.left);
      if(node.right) helper(node.right);
    };

    helper(this.root);
    return traversedArray;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let traversedArray = [];

    function helper(node){
      if(node.left) helper(node.left);
      traversedArray.push(node.val);
      if(node.right) helper(node.right);
    };

    helper(this.root);
    return traversedArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let traversedArray = [];

    function helper(node){
      if(node.left) helper(node.left);
      if(node.right) helper(node.right);
      traversedArray.push(node.val);
    };

    helper(this.root);
    return traversedArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
