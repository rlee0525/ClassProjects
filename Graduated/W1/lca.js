// Given two nodes in a binary tree, design an algorithm that computes their Least Common Ancestor (LCA). Assume that each node has a parent pointer.

// For example, given this BST:

//            (A)
//           /   \
//         (B)   (F)
//        /   \
//     (C)    (E)
//     /
//   (D)
// The LCA of D and E would be B.

const BinarySearchTree = require('./bst.js');

const LCA = (node1, node2) => {

};

let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(2);
bst.insert(4);
bst.insert(1);

console.log(bst.root);