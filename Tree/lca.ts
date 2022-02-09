import { BST, BstNode } from "../BST";

function LCA(root: BstNode, p: number, q: number): number {
  if (p < root.val && q < root.val) {
    return LCA(root.left, p, q);
  }

  if (p > root.val && q > root.val) {
    return LCA(root.right, p, q);
  }

  return root.val;
}

const bst = new BST([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);

console.log(LCA(bst.root, 2, 8));
