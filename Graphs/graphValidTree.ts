class GraphNode4 {
  public val: number;
  public edgesList: GraphNode4[];

  constructor(val: number) {
    this.val = val;
    this.edgesList = [];
  }

  connect(node: GraphNode4) {
    if (this.edgesList.findIndex((edgeNode) => edgeNode === node) === -1) {
      this.edgesList.push(node);
    }
  }
}

function graphValidTree(numNodes: number, edges: number[][]): boolean {
  const graph: { [key: string]: GraphNode4 } = {};
  const visited = new Set();
  let valid = true;

  // Create graph web
  for (const [nodeOneVal, nodeTwoVal] of edges) {
    const nodeOne = graph[nodeOneVal]
      ? graph[nodeOneVal]
      : new GraphNode4(nodeOneVal);

    const nodeTwo = graph[nodeTwoVal]
      ? graph[nodeTwoVal]
      : new GraphNode4(nodeTwoVal);

    nodeOne.connect(nodeTwo);

    graph[nodeOneVal] = nodeOne;
    graph[nodeTwoVal] = nodeTwo;
  }

  dfs(Object.values(graph)[0]);

  return visited.size === numNodes && valid;

  // visited all nodes populated
  // never hit a visited node again
  function dfs(node: GraphNode4) {
    if (visited.has(node)) {
      valid = false;
      return;
    }

    visited.add(node);

    for (let i = 0; i < node.edgesList.length; i++) {
      const edgeNode = node.edgesList[i];

      dfs(edgeNode);
    }
  }
}

// A tree is acyclic and has no islands

// (0) => [1, 2, 3]
// (1) => [0]

console.log(
  graphValidTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
);

console.log(
  graphValidTree(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ])
);
