export class SLLNode {
  public val: number;
  public next: SLLNode;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(head: SLLNode) {
  let slowNode = head;
  let fastNode = head;

  while (fastNode) {
    slowNode = slowNode.next;
    fastNode = fastNode.next;

    if (fastNode) {
      fastNode = fastNode.next;
    } else {
      break;
    }

    if (fastNode === slowNode) {
      return true;
    }
  }

  return false;
}

const nodeOne = new SLLNode(3);
const nodeTwo = new SLLNode(2);
const nodeThree = new SLLNode(0);
const nodeFour = new SLLNode(-4);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = null;

const SLL: any = {};

SLL.head = nodeOne;
SLL.tail = nodeFour;

console.log(hasCycle(SLL.head));
