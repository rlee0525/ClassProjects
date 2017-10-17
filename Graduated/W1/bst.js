function BSTNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  // iter
  // insert(val) {
  //   let newNode = new BSTNode(val);
  //   let currentNode = this.root;

  //   if (!this.root) {
  //     this.root = newNode;
  //     return;
  //   } else {
  //     while (currentNode) {
  //       if (val <= currentNode.val) {
  //         if (!currentNode.left) {
  //           currentNode.left = newNode;
  //           break;
  //         } else {
  //           currentNode = currentNode.left;
  //         }
  //       } else {
  //         if (!currentNode.right) {
  //           currentNode.right = newNode;
  //           break;
  //         } else {
  //           currentNode = currentNode.right;
  //         }
  //       }
  //     }
  //   }
  // }

  // rec
  insert(val, node = this.root) {
    let newNode = new BSTNode(val);
    
    if (!this.root) {
      this.root = newNode;
      return node;
    } else {
      if (!node) return newNode;
      if (val <= node.val) {
        node.left = this.insert(val, node.left);
      } else {
        node.right = this.insert(val, node.right);
      }
    }

    return node;
  }

  min(node = this.root) {
    if (node.left) {
      return this.min(node.left);
    } else {
      return node;
    }
  }

  max(node = this.root) {
    if (node.right) {
      return this.max(node.right);
    } else {
      return node;
    }
  }
}

let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(2);
bst.insert(4);
bst.insert(1);

console.log(bst.root);
console.log(bst.min());
console.log(bst.max());

module.exports = BinarySearchTree;