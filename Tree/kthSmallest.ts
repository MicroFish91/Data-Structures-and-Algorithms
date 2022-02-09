import { BST, BstNode } from "../BST";

function kthSmallest(root: BstNode, k: number): number {
  const inOrder = [];
  traverse(root);
  return inOrder[k - 1];

  function traverse(node: BstNode) {
    if (node.left) traverse(node.left);
    inOrder.push(node.val);
    if (node.right) traverse(node.right);
  }
}

const bst = new BST([5, 3, 6, 2, 4, null, null, 1]);

console.log(kthSmallest(bst.root, 3));
