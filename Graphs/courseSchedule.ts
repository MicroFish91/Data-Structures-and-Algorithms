class GraphNode3 {
  public val: number;
  public neighbors: GraphNode3[];

  constructor(val: number) {
    this.val = val;
    this.neighbors = [];
  }
}

function courseSchedule(numCourses: number, preReqs: number[][]): boolean {
  const graph: { [key: string]: GraphNode3 } = {};
  let possible = false;

  // Set up graph
  for (let i = 0; i < preReqs.length; i++) {
    const [endCourse, startCourse] = preReqs[i];
    const startNode = graph[startCourse]
      ? graph[startCourse]
      : new GraphNode3(startCourse);
    const endNode = graph[endCourse]
      ? graph[endCourse]
      : new GraphNode3(endCourse);

    startNode.neighbors.push(endNode);

    // Cannot have rules than contradict one another
    if (endNode.neighbors.findIndex((node) => node === startNode) !== -1) {
      return false;
    }

    graph[startCourse] = startNode;
    graph[endCourse] = endNode;
  }

  // traverse from every starting point
  for (let i = 0; i < Object.values(graph).length; i++) {
    const graphNode = Object.values(graph)[i];
    dfs(graphNode);
  }

  return possible;

  function dfs(node: GraphNode3, visited = new Set()) {
    if (visited.size === 0) {
      visited.add(node);
    }

    if (visited.size === numCourses) {
      possible = true;
      return;
    }

    for (let i = 0; i < node.neighbors.length; i++) {
      const neighborNode = node.neighbors[i];
      visited.add(neighborNode);
      dfs(neighborNode, visited);
    }
  }
}

console.log(
  courseSchedule(3, [
    [0, 1],
    [2, 0],
  ])
);
