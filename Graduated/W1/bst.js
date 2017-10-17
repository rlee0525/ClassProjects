function BSTNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new BSTNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (true) {
      if (val <= currentNode.val) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          break;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          break;
        }
      }
    }
  }

  insertRec(val, node = this.root) {
    let newNode = new BSTNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (!node) return newNode;

    if (val <= node.val) {
      node.left = this.insertRec(val, node.left);
    } else {
      node.right = this.insertRec(val, node.right);
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

  find(val, node = this.root) {
    if (!node) return null;
    if (val === node.val) return node;

    if (val < node.val) {
      return this.find(val, node.left);
    } else {
      return this.find(val, node.right);
    }
  }

  height(node = this.root) {
    if (!node) return -1;

    let queue = [node];
    let height = 0;

    while (true) {
      let nodeCount = queue.length;
      if (nodeCount === 0) return height;

      while (nodeCount !== 0) {
        let currentNode = queue[0];
        queue = queue.slice(1, queue.length);

        if (currentNode.left) {
          queue.push(currentNode.left);
        }

        if (currentNode.right) {
          queue.push(currentNode.right);
        }

        nodeCount--;
      }

      height++;
    }
  }

  heightRec(node = this.root) {
    if (!node) return 0;

    return (1 + Math.max(this.heightRec(node.left), this.heightRec(node.right)));
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
      } else {
        node.val = this.min(node.right).val;
        node.right = this.delete(node.val, node.right);
      }
    }

    return node;
  }

  inorder(node = this.root) {
    let res = [];
    let stack = [];

    while (node || stack.length !== 0) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        let currentNode = stack.pop();
        res.push(currentNode.val);
        node = currentNode.right;
      }
    }

    return res;
  }

  inorderRec(node = this.root, arr = []) {
    if (!node) return arr;

    this.inorderRec(node.left, arr);
    arr.push(node.val);
    this.inorderRec(node.right, arr);

    return arr;
  }

  preorder(node = this.root) {
    let res = [];
    let stack = [];

    while (node || stack.length !== 0) {
      if (node) {
        res.push(node.val);
        stack.push(node);
        node = node.left;
      } else {
        let currentNode = stack.pop();
        node = currentNode.right;
      }
    }

    return res;
  }

  preorderRec(node = this.root, arr = []) {
    if (!node) return arr;

    arr.push(node.val);
    this.preorderRec(node.left, arr);
    this.preorderRec(node.right, arr);

    return arr;
  }

  postorder(node = this.root) {
    let res = [];
    let stack = [];

    while (node || stack.length !== 0) {
      if (node) {
        res = [node.val].concat(res);
        stack.push(node);
        node = node.right;
      } else {
        let currentNode = stack.pop();
        node = currentNode.left;
      }
    }

    return res;
  }

  postorderRec(node = this.root, arr = []) {
    if (!node) return arr;

    this.postorderRec(node.left, arr);
    this.postorderRec(node.right, arr);
    arr.push(node.val);

    return arr;
  }
}

let bst = new BinarySearchTree();
bst.insertRec(5);
bst.insertRec(3);
bst.insertRec(7);
bst.insertRec(4);
bst.insertRec(2);
bst.insertRec(1);
bst.insertRec(3.5);
bst.insertRec(4.5);

console.log(bst);
console.log(bst.min());
console.log(bst.max());
console.log(bst.find(4));
console.log(bst.height());
console.log(bst.delete(3));
console.log(bst.inorder());
console.log(bst.inorderRec());
console.log(bst.preorder());
console.log(bst.preorderRec());
console.log(bst.postorder());
console.log(bst.postorderRec());

module.exports = BinarySearchTree;