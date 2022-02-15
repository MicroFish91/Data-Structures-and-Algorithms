import { SLLNode } from "./hasCycle";

// Even the middle is part of the right
// 4 / 2 = 2
// 0 => 1 => 2 => 3 => null
// 0 => 3 => 1 => 2 => null

// Odd the middle is part of the left
// 5 / 2 = 2
// 0 => 1 => 2 => 3 => 4 => null

// 0 => 1 => 2 => 4 => 3 => null
// 0 => 4 => 1 => 3 => 2 => null

// 0 => 4 => 1 => 3 => 2 => null

function reorderList(head: SLLNode): void {
  const listWrapper = [];
  let currentNode = head;

  while (currentNode) {
    listWrapper.push(currentNode);
    currentNode = currentNode.next;
  }

  // 0 1 2 3
  // 0 1 2 3 4
  console.log(listWrapper);

  for (let i = 0; i < Math.floor(listWrapper.length / 2); i++) {
    listWrapper[i].next = listWrapper[listWrapper.length - 1 - i];
    if (i === listWrapper.length / 2) continue;
    listWrapper[listWrapper.length - 1 - i].next = listWrapper[i + 1];
  }

  if (listWrapper.length % 2 === 1) {
    listWrapper[listWrapper.length / 2 + 1].next = null;
  } else {
    listWrapper[listWrapper.length / 2].next = null;
  }
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

SLL.print = (head: SLLNode) => {
  let currentNode = head;
  const list = [];

  while (currentNode) {
    list.push(currentNode.val);
    currentNode = currentNode.next;
  }

  console.log(list);
};

SLL.head = nodeOne;
SLL.tail = nodeFour;

SLL.print(SLL.head);
reorderList(SLL.head);
SLL.print(SLL.head);
