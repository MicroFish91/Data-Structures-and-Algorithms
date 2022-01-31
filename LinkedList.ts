class ListNode {
  public val: any;
  public next: ListNode;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  public head: ListNode;
  public tail: ListNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val: any) {
    const newNode = new ListNode(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head === this.tail) {
      this.head.next = newNode;
      this.tail = this.head.next;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  pop() {
    if (this.head === null) return null;

    let popped;
    let currentNode = this.head;

    if (this.head === this.tail) {
      popped = this.head.val;
      this.head = null;
      this.tail = null;
      return popped;
    }

    // () => () => null

    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }

    popped = currentNode.next;
    this.tail = currentNode;
    this.tail.next = null;

    return popped;
  }

  print() {
    const nodeList = [];
    let currentNode = this.head;

    while (currentNode) {
      nodeList.push(currentNode.val);
      currentNode = currentNode?.next;
    }

    console.log(nodeList);
  }
}

const linkedList = new LinkedList();

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);

linkedList.print();

linkedList.pop();
linkedList.pop();
console.log(linkedList.pop());

linkedList.print();
