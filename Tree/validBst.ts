import { BST, BstNode } from "../BST";

function isValidBST(root: BstNode): boolean {
  let valid = true;
  traverse(root);
  return valid;

  function traverse(node: BstNode) {
    if (!node) return;

    if (node.left) {
      if (node.left.val > node.val) {
        valid = false;
        return;
      }
      traverse(node.left);
    }
    if (node.right) {
      if (node.right.val < node.val) {
        valid = false;
        return;
      }
      traverse(node.right);
    }
  }
}

const bst = new BST([5, 1, 4, null, null, 3, 6]);
const bst2 = new BST([2, 1, 3]);

console.log(isValidBST(bst2.root));
console.log(isValidBST(bst.root));

//           (5)
//        (1)  (4)
//           (3) (6)
