class QueueElement {
  public val: any;
  public next: QueueElement;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  public top: QueueElement;
  public bottom: QueueElement;

  constructor() {
    this.top = null;
    this.bottom = null;
  }

  enqueue(val: any): void {
    const newElement = new QueueElement(val);

    if (!this.top) {
      this.top = newElement;
      this.bottom = newElement;
    } else {
      this.bottom.next = newElement;
      this.bottom = this.bottom.next;
    }
  }

  dequeue(): any {
    if (!this.top) return null;

    const dequeued = this.top;

    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }

    return dequeued.val;
  }

  isEmpty(): boolean {
    return !this.top ? true : false;
  }

  print(): any[] {
    const list = [];
    let current = this.top;
    while (current) {
      list.push(current.val);
      current = current.next;
    }
    return list;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.isEmpty());

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.isEmpty());

console.log(queue.print());
