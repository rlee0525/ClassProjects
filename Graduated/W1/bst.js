function BSTNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // rec
  insert(val, node = this.root) {
    let newNode = new BSTNode(val);
    
    if (!this.root) {
      this.root = newNode;
      return node;
    }

    if (!node) return newNode;

    if (val <= node.val) {
      node.left = this.insert(val, node.left);
    } else {
      node.right = this.insert(val, node.right);
    }

    return node;
  }

  // iter
  // insert(val) {
  //   let newNode = new BSTNode(val);
  //   if (!this.root) {
  //     this.root = newNode;
  //     return;
  //   }

  //   let currentNode = this.root;
    
  //   while (currentNode) {
  //     if (val <= currentNode.val) {
  //       if (currentNode.left) {
  //         currentNode = currentNode.left;
  //       } else {
  //         currentNode.left = newNode;
  //         break;
  //       }
  //     } else {
  //       if (currentNode.right) {
  //         currentNode = currentNode.right;
  //       } else {
  //         currentNode.right = newNode;
  //         break;
  //       }
  //     }
  //   }

  //   return newNode;
  // }

  min(node = this.root) {
    if (!node.left) {
      return node;
    } else {
      return this.min(node.left);
    }
  }
  
  max(node = this.root) {
    if (!node.right) {
      return node;
    } else {
      return this.max(node.right);
    }
  }

  find(val, node = this.root) {
    if (node.val === val) return node;
    if (!node) return null;

    if (val < node.val) {
      return this.find(val, node.left);
    } else {
      return this.find(val, node.right);
    }
  }

  // rec
  height(node = this.root) {
    if (!node) return 0;

    return (1 + Math.max(this.height(node.left), this.height(node.right)));
  }

  // iter
  // height(node = this.root) {
  //   if (!node) return -1;

  //   let queue = [];
  //   queue.push(node);
  //   let height = 0;

  //   while (true) {
  //     let nodeCount = queue.length;
  //     if (nodeCount === 0) return height;

  //     height++;

  //     while (nodeCount !== 0) {
  //       let currentNode = queue[0];
  //       queue = queue.slice(1, queue.length);

  //       if (currentNode.left) {
  //         queue.push(currentNode.left);
  //       }

  //       if (currentNode.right) {
  //         queue.push(currentNode.right);
  //       }

  //       nodeCount--;
  //     }
  //   }
  // }

  deleteMin(node = this.root) {
    if (!node) return null;
    if (!node.left) return node.right;

    node.left = this.deleteMin(node.left);

    return node;
  }

  delete(val, node = this.root) {
    if (!this.find(val)) return null;

    if (val < node.val) {
      node.left = this.delete(val, node.left);
    } else if (val > node.val) {
      node.right = this.delete(val, node.right);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      node.val = this.min(node.right).val;
      node.right = this.delete(node.val, node.right);
    }

    return node;
  }
}

let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(4);
bst.insert(2);
bst.insert(1);
bst.insert(3.5);
bst.insert(4.5);

console.log(bst.root);
// console.log(bst.min());
// console.log(bst.max());
// console.log(bst.find(3));

bst.delete(3);
console.log(bst.root);
console.log(bst.height());

module.exports = BinarySearchTree;










