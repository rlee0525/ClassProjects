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

// With parent pointer
// Time: O(h) Space: O(h) - Brute Force
const LCA = (node1, node2) => {
  let seen = {};

  while (node1) {
    seen[node1] = true;
    node1 = node1.parent;
  }

  while (node2) {
    if (seen[node2]) return seen[node2];
    node2 = node2.parent;
  }

  return false;
};

// Time: O(h) Space: O(1) - Depth Method
