class MinHeap {
  public values: number[];

  constructor(vals?: number[]) {
    this.values = vals ? MinHeap.buildHeap(vals) : [];
  }

  static buildHeap(vals: number[]): number[] {
    const startIdx = Math.floor(vals.length / 2) - 1;

    for (let i = startIdx; i >= 0; i--) {
      heapify(i);
    }

    return vals;

    function heapify(idx: number) {
      let currentIdx = idx;
      let childOneIdx, childTwoIdx, swapIdx;
      let childOneVal, childTwoVal;
      const currentVal = vals[idx];

      while (true) {
        childOneIdx = 2 * currentIdx + 1;
        childTwoIdx = 2 * currentIdx + 2;
        childOneVal = childOneIdx < vals.length ? vals[childOneIdx] : null;
        childTwoVal = childTwoIdx < vals.length ? vals[childTwoIdx] : null;
        swapIdx = undefined;

        if (childOneVal !== null) {
          if (currentVal > childOneVal) {
            swapIdx = childOneIdx;
          }
        }

        if (childTwoVal !== null) {
          if (childTwoVal < childOneVal && currentVal > childTwoVal) {
            swapIdx = childTwoIdx;
          }
        }

        if (!swapIdx) break;

        [vals[currentIdx], vals[swapIdx]] = [vals[swapIdx], vals[currentIdx]];

        currentIdx = swapIdx;
      }
    }
  }

  // [0, 1, 2, 3, 4, 5, 6]
  // parent to child: 2n + 1, 2n + 2
  // child to parent: Math.floor((n - 1) / 2)

  // TC: O(h) or O(logn)
  // bubbleUp
  insert(val: number): void {
    this.values.push(val);

    if (this.values.length === 1) return;

    let childIdx = this.values.length - 1;
    let currentIdx = Math.floor((childIdx - 1) / 2);
    let parent = this.values[currentIdx];

    while (true) {
      if (val >= parent) break;
      [this.values[childIdx], this.values[currentIdx]] = [
        this.values[currentIdx],
        this.values[childIdx],
      ];
      childIdx = currentIdx;
      currentIdx = Math.floor((childIdx - 1) / 2);

      if (currentIdx < 0) break;
      parent = this.values[currentIdx];
    }

    console.log(this.values);
  }

  // TC: O(h) or O(logn)
  // bubbleDown
  extractMin(): number {
    if (!this.values.length) return null;
    if (this.values.length === 1) return this.values.pop();

    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    const extracted = this.values.pop();

    this.bubbleDown(0);
    return extracted;
  }

  bubbleDown(idx: number): void {
    let currentIdx = idx;
    let childOneIdx, childTwoIdx, childOneVal, childTwoVal, swapIdx;
    const currentVal = this.values[currentIdx];

    while (true) {
      childOneIdx = 2 * currentIdx + 1;
      childTwoIdx = 2 * currentIdx + 2;

      childOneVal =
        childOneIdx < this.values.length ? this.values[childOneIdx] : null;
      childTwoVal =
        childTwoIdx < this.values.length ? this.values[childTwoIdx] : null;

      swapIdx = null;

      if (childOneVal !== null) {
        if (currentVal > childOneVal) {
          swapIdx = childOneIdx;
        }
      }

      if (childTwoVal !== null) {
        if (childTwoVal < childOneVal) {
          swapIdx = childTwoIdx;
        }
      }

      if (!swapIdx) {
        break;
      }

      [this.values[currentIdx], this.values[swapIdx]] = [
        this.values[swapIdx],
        this.values[currentIdx],
      ];

      currentIdx = swapIdx;
    }
  }
}

const minHeap = new MinHeap([5, 2, 7, 1, 3, 2, 4]);

// minHeap.insert(2);
// minHeap.insert(4);
// minHeap.insert(1);
// minHeap.insert(0);
// minHeap.insert(-1);

// minHeap.extractMin();
// console.log(minHeap.values);

// minHeap.extractMin();
// console.log(minHeap.values);

// minHeap.extractMin();
// console.log(minHeap.values);

console.log(minHeap.values);
