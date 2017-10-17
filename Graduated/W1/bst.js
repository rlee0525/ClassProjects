function BSTNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

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
}

let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(4);
bst.insert(2);
bst.insert(1);

console.log(bst.root.left);
console.log(bst.min());
console.log(bst.max());
console.log(bst.find(3));











