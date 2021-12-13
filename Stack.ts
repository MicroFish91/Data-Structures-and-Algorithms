class StackElement {
  public val: any;
  public next: StackElement;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  public top: StackElement;
  public bottom: StackElement;

  constructor() {
    this.top = null;
    this.bottom = null;
  }

  push(val: any) {
    const newVal = new StackElement(val);
    const current = this.top;

    if (!this.top) {
      this.top = newVal;
      this.bottom = newVal;
    } else {
      this.top = newVal;
      this.top.next = current;
    }
  }

  pop() {
    if (!this.top) return null;

    const popped = this.top.val;

    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }

    return popped;
  }

  peek() {
    if (!this.top) return null;
    return this.top.val;
  }

  isEmpty() {
    return !this.top ? true : false;
  }

  print() {
    let current = this.top;
    const list = [];

    while (current) {
      list.push(current.val);
      current = current.next;
    }

    console.log(list);
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());
console.log(stack.isEmpty());

console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.print();

console.log(stack.isEmpty());
