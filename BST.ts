export class BstNode {
  public val: number;
  public left: BstNode;
  public right: BstNode;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  public root: BstNode;

  constructor(array?: number[]) {
    this.root = array ? this._arrayToBst(array) : null;
  }

  _arrayToBst(nodeList: number[]): BstNode {
    if (!nodeList.length) return null;
    const newNode = new BstNode(nodeList.shift());

    const root = newNode;
    const treeQueue = [newNode];
    let currentNode = newNode;

    while (nodeList.length) {
      currentNode = treeQueue.shift();

      const leftNode = nodeList.length ? new BstNode(nodeList.shift()) : null;
      const rightNode = nodeList.length ? new BstNode(nodeList.shift()) : null;

      currentNode.left = leftNode;
      currentNode.right = rightNode;

      if (leftNode) treeQueue.push(leftNode);
      if (rightNode) treeQueue.push(rightNode);
    }

    return root;
  }

  insert(val: number): void {
    const newNode = new BstNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (true) {
      if (val < currentNode.val) {
        if (!currentNode?.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode?.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  contains(val: number): boolean {
    if (!this.root) return false;

    let currentNode = this.root;

    while (true) {
      if (val === currentNode.val) {
        return true;
      } else if (val < currentNode.val) {
        if (!currentNode?.left) break;
        currentNode = currentNode.left;
      } else {
        if (!currentNode?.right) break;
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  bfs(): number[] {
    const traversal = [];
    const queue = [];

    queue.push(this.root);

    while (queue.length) {
      const currentNode = queue.shift();
      traversal.push(currentNode.val);

      if (currentNode?.left) queue.push(currentNode.left);
      if (currentNode?.right) queue.push(currentNode.right);
    }

    return traversal;
  }

  dfsPre(): number[] {
    const traversal = [];

    function traverse(node: BstNode) {
      traversal.push(node.val);
      if (node?.left) traverse(node.left);
      if (node?.right) traverse(node.right);
    }

    traverse(this.root);
    return traversal;
  }

  dfsInOrder(): number[] {
    const traversal = [];

    function traverse(node: BstNode) {
      if (node?.left) traverse(node.left);
      traversal.push(node.val);
      if (node?.right) traverse(node.right);
    }

    traverse(this.root);
    return traversal;
  }

  dfsPost(): number[] {
    const traversal = [];

    function traverse(node: BstNode) {
      if (node?.left) traverse(node.left);
      if (node?.right) traverse(node.right);
      traversal.push(node.val);
    }

    traverse(this.root);
    return traversal;
  }

  delete(val: number): boolean {
    let currentNode = this.root;
    let parentNode;

    if (val === currentNode.val) {
      this.root = null;
      return true;
    }

    // Find the node, store in current
    while (true) {
      if (val < currentNode.val) {
        if (currentNode.left) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else {
          return false;
        }
      } else if (val > currentNode.val) {
        if (currentNode.right) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else {
          return false;
        }
      } else {
        break;
      }
    }

    // 1 Leaf node - no children, just delete and update parent
    if (!currentNode?.left && !currentNode?.right) {
      if (val < parentNode.val) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    }
    // 2 Left or Right child only - delete node and swap pointer with child subtree
    else if (!currentNode?.left && currentNode?.right) {
      if (val < parentNode.val) {
        parentNode.left = currentNode.right;
      } else {
        parentNode.right = currentNode.right;
      }
    }
    // 2 Left or Right child only - delete node and swap pointer with child subtree
    else if (currentNode?.left && !currentNode?.right) {
      if (val < parentNode.val) {
        parentNode.left = currentNode.left;
      } else {
        parentNode.right = currentNode.left;
      }
    }
    // 3 if two nodes below, go through right subtree and find smallest number (go all the way left)
    else {
      const [replacement, replacementParent] = findSmallest(currentNode.right);
      if (replacementParent) {
        replacementParent.left = null;
      } else {
        currentNode.right = null;
      }
      currentNode.val = replacement.val;
    }

    return true;

    function findSmallest(node: BstNode) {
      let current = node;
      let parent;
      while (current.left) {
        parent = current;
        current = current.left;
      }
      return [current, parent];
    }
  }
}

// contains?
// delete
// bfs
// dfs - 3x

const bst = new BST([10, 6, 15, 3, 8, 13]);

//           10
//        6      15
//      3   8  13

// console.log(bst.dfsPre());
// console.log(bst.dfsInOrder());
// console.log(bst.dfsPost());

// bst.insert(3);
// bst.insert(2);
// bst.insert(1);
// bst.insert(5);
// bst.insert(6);
// bst.insert(4);

// console.log(bst.bfs());
// console.log(bst.dfsPre());

// console.log(bst.contains(4));
// console.log(bst.contains(-1));

// console.log(bst);
// console.log(bst.bfs());

// console.log(bst.bfs());
// bst.delete(15);
// console.log(bst.bfs());
