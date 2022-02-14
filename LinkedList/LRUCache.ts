class LRUCache {
  public hashMap: {};
  public head: DLLNode;
  public tail: DLLNode;
  public capacity: number;
  public length: number;

  constructor(capacity: number) {
    this.hashMap = {};
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.capacity = capacity;
  }

  get(key: number): number {
    if (this.head === null) return null;

    const node = this.hashMap[key];

    if (node === this.tail) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      const prevNode = node.prev;
      const nextNode = node.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }

    const oldHeadNode = this.head;
    node.prev = null;
    node.next = oldHeadNode;
    oldHeadNode.prev = node;
    this.head = node;

    return this.hashMap[key].val;
  }

  put(key: number, value: number): void {
    if (this.length === this.capacity) {
      this._purgeLRU();
    }

    const newNode = new DLLNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.hashMap[key] = newNode;
      this.length++;
      return;
    }

    const currHead = this.head;

    currHead.prev = newNode;
    newNode.next = currHead;

    this.head = newNode;

    this.hashMap[key] = newNode;
    this.length++;
  }

  _purgeLRU(): void {
    const tail = this.tail;
    const prevNode = tail.prev;
    prevNode.next = null;

    delete this.hashMap[tail.key];

    this.length--;
  }

  print(): void {
    const list = [];
    let currentNode = this.head;

    while (currentNode) {
      list.push(currentNode.val);
      currentNode = currentNode.next;
    }

    console.log(list);
  }
}

class DLLNode {
  public val: any;
  public key: any;
  public prev: DLLNode;
  public next: DLLNode;

  constructor(val: any) {
    this.key = null;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const cache = new LRUCache(5);

cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
cache.put(4, 4);

console.log(cache.get(1));

cache.put(5, 5);
cache.put(6, 6);

cache.print();
