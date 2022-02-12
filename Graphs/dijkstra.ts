class WeightedNode {
  public val: string;
  public edgesList: { node: WeightedNode; weight: number }[];

  constructor(val: string) {
    this.val = val;
    this.edgesList = [];
  }

  connect(node: WeightedNode, weight: number) {
    if (this.edgesList.findIndex((edgeNode) => node === edgeNode.node) === -1) {
      this.edgesList.push({ node, weight });
    }
  }
}

// fast easy less efficient version
class PriorityQueue {
  public values: { node: WeightedNode; priority: number }[];

  constructor() {
    this.values = [];
  }

  enqueue(node: WeightedNode, priority: number) {
    this.values.push({ node, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.values.shift().node;
  }
}

function shortestPath(start: WeightedNode, end: WeightedNode) {
  const previous = {
    [start.val]: null,
  };
  const distanceMap = {
    [start.val]: 0,
  };
  const pQueue = new PriorityQueue();
  const finalPath = [];

  pQueue.enqueue(start, 0);

  while (pQueue.values.length) {
    const spNode = pQueue.dequeue();
    const edgesList = spNode.edgesList;

    if (spNode === end) {
      break;
    }

    for (let i = 0; i < edgesList.length; i++) {
      const edgeNode = edgesList[i];
      const pathSum = distanceMap[spNode.val] + edgeNode.weight;

      if (
        distanceMap[edgeNode.node.val] !== undefined &&
        pathSum >= distanceMap[edgeNode.node.val]
      ) {
        continue;
      }

      distanceMap[edgeNode.node.val] = pathSum;
      previous[edgeNode.node.val] = spNode;
      pQueue.enqueue(edgeNode.node, pathSum);
    }
  }

  let currentNode = end;

  while (currentNode) {
    finalPath.push(currentNode.val);
    if (currentNode === start) break;
    currentNode = previous[currentNode.val];
  }

  return finalPath.reverse();
}

const a = new WeightedNode("A");
const b = new WeightedNode("B");
const c = new WeightedNode("C");
const d = new WeightedNode("D");
const e = new WeightedNode("E");
const f = new WeightedNode("F");

a.connect(b, 4);
b.connect(a, 4);

a.connect(c, 2);
c.connect(a, 2);

c.connect(d, 2);
d.connect(c, 2);

c.connect(f, 4);
f.connect(c, 4);

d.connect(f, 1);
f.connect(d, 1);

d.connect(e, 3);
e.connect(d, 3);

f.connect(e, 1);
e.connect(f, 1);

b.connect(e, 3);
e.connect(b, 3);

console.log(shortestPath(a, e));
