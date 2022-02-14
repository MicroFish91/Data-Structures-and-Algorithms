class WeightedNode1 {
  public val: number;
  public edgesList: { node: WeightedNode1; weight: number }[];

  constructor(val: number) {
    this.val = val;
    this.edgesList = [];
  }

  connect(node: WeightedNode1, weight: number) {
    if (this.edgesList.findIndex((edgeNode) => edgeNode.node === node) === -1) {
      this.edgesList.push({ node, weight });
    }
  }
}

// Naive Queue
class PriorityQueue1 {
  public values: { node: WeightedNode1; priority: number }[];

  constructor() {
    this.values = [];
  }

  enqueue(node: WeightedNode1, priority: number): void {
    this.values.push({ node, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }

  dequeue(): WeightedNode1 {
    return this.values.shift().node;
  }
}

function cheapestFlights(
  n: number,
  flights: number[][],
  src: number,
  dst: number
): number {
  const graph = {};

  // Set up our graph
  for (const [nodeOneVal, nodeTwoVal, weight] of flights) {
    const nodeOne = graph[nodeOneVal]
      ? graph[nodeOneVal]
      : new WeightedNode1(nodeOneVal);
    const nodeTwo = graph[nodeTwoVal]
      ? graph[nodeTwoVal]
      : new WeightedNode1(nodeTwoVal);

    nodeOne.connect(nodeTwo, weight);

    graph[nodeOne.val] = nodeOne;
    graph[nodeTwo.val] = nodeTwo;
  }

  // Dijkstra's Algorithm
  const queue = new PriorityQueue1();
  const previous = {
    [graph[src].val]: null,
  };
  const distanceMap = {
    [graph[src].val]: 0,
  };

  queue.enqueue(graph[src], 0);

  while (queue.values.length) {
    const node = queue.dequeue();
    const edgesList = node.edgesList;

    if (node === graph[dst]) {
      break;
    }

    for (let i = 0; i < edgesList.length; i++) {
      const edgeNode = edgesList[i];
      const pathSum = distanceMap[node.val] + edgeNode.weight;

      if (
        distanceMap[edgeNode.node.val] &&
        pathSum > distanceMap[edgeNode.node.val]
      ) {
        continue;
      }

      distanceMap[edgeNode.node.val] = pathSum;
      previous[edgeNode.node.val] = node;
      queue.enqueue(edgeNode.node, pathSum);
    }
  }

  return distanceMap[dst];
}

// 200
console.log(
  cheapestFlights(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2
  )
);

// 500
console.log(
  cheapestFlights(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2
  )
);
