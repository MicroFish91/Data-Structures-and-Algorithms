import { BST, BstNode } from "../BST";

// just using bst shell to create a normal binary tree, then calling
// traversal methods to check

function buildTree(preOrder: number[], inOrder: number[]): BST {
  const bst = new BST();
  bst.root = traverse(0, preOrder.length - 1, 0, inOrder.length - 1);
  return bst;

  function traverse(p1: number, p2: number, i1: number, i2: number): BstNode {
    if (p1 > p2 || i1 > i2) return null;

    const rootValue = preOrder[p1];
    const inOrderIndex = inOrder.indexOf(rootValue);
    const leftNodeCount = inOrderIndex - i1;
    const root = new BstNode(rootValue);

    root.left = traverse(p1 + 1, p1 + leftNodeCount, i1, inOrderIndex - 1);
    root.right = traverse(p1 + leftNodeCount + 1, p2, inOrderIndex + 1, i2);

    return root;
  }
}

console.log(buildTree([1, 2, 4, 5, 3, 6], [4, 2, 5, 1, 3, 6]).dfsInOrder());
