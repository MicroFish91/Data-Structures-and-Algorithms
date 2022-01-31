import { LinkedList } from "../LinkedList";

function reverseList(linkedList) {
  // HEAD (1) => (2) => (3) => (4) => (5) TAIL => null
  //  prev        cur    nxt
  //  cur.next <- cur
  //              prev
  //                     cur
  //            cur.nxt         nxt
  // null <- TAIL (1) <- (2) <- (3) <- (4) <- (5) HEAD

  let currentNode = linkedList.head;
  let prevNode = null;
  let nextNode;

  linkedList.tail = currentNode;

  while (currentNode?.next) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  currentNode.next = prevNode;
  linkedList.head = currentNode;
}

const linkedList2 = new LinkedList();

linkedList2.push(1);
linkedList2.push(2);
linkedList2.push(3);
linkedList2.push(4);
linkedList2.push(5);

reverseList(linkedList2);

linkedList2.print();
