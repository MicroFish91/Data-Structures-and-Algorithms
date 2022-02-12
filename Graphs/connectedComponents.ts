class GraphNode5 {
  public val: number;
  public edgesList: GraphNode5[];

  constructor(val: number) {
    this.val = val;
    this.edgesList = [];
  }

  connect(node: GraphNode5) {
    if (this.edgesList.findIndex((edgeNode) => edgeNode === node) === -1) {
      this.edgesList.push(node);
    }
  }
}

function connectedComponents(numNodes: number, edges: number[][]) {
  const graph: { [key: string]: GraphNode5 } = {};
  const visited = new Set();
  let count = 0;
  let nodeKeyList;

  // Build graph
  for (const [nodeOneVal, nodeTwoVal] of edges) {
    const nodeOne = graph[nodeOneVal]
      ? graph[nodeOneVal]
      : new GraphNode5(nodeOneVal);
    const nodeTwo = graph[nodeTwoVal]
      ? graph[nodeTwoVal]
      : new GraphNode5(nodeTwoVal);

    nodeOne.connect(nodeTwo);
    nodeTwo.connect(nodeOne);

    graph[nodeOneVal] = nodeOne;
    graph[nodeTwoVal] = nodeTwo;
  }

  // Traverse graph from first point and see what nodes get visited
  // then increment and start at another unvisited node
  nodeKeyList = Object.values(graph);

  for (let i = 0; i < nodeKeyList.length; i++) {
    const currentNode = nodeKeyList[i];

    if (!visited.has(currentNode)) {
      dfs(currentNode);
      count++;
    }
  }

  return count;

  function dfs(node: GraphNode5): void {
    if (visited.has(node)) return;

    visited.add(node);

    for (let i = 0; i < node.edgesList.length; i++) {
      const edgeNode = node.edgesList[i];

      dfs(edgeNode);
    }
  }
}

// undirected graph
// 2
console.log(
  connectedComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
);

//1
console.log(
  connectedComponents(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
