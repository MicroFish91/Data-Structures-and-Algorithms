// Set allows O(1) to add edge
class GraphNode2 {
  public edgesList: Set<string>;

  constructor() {
    this.edgesList = new Set();
  }

  addEdge(node: string) {
    this.edgesList.add(node);
  }

  hasEdge(node: string) {
    return this.edgesList.has(node);
  }

  removeEdge(node: string) {
    this.edgesList.delete(node);
  }

  getEdges() {
    return [...this.edgesList];
  }
}

// hash map allows O(1) to add vertex
class Graph2 {
  public vertices: { [vertex: string]: GraphNode2 };

  constructor() {
    this.vertices = {};
  }

  // O(1)
  addVertex(vertex: string): boolean {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = new GraphNode2();
      return true;
    }
    return false;
  }

  // O(E)
  removeVertex(vertex: string): boolean {
    if (!this.vertices[vertex]) {
      return false;
    }

    const edgeNodes = this.vertices[vertex].getEdges();

    for (let i = 0; i < edgeNodes.length; i++) {
      const node = edgeNodes[i];
      this.vertices[node].removeEdge(vertex);
    }

    delete this.vertices[vertex];
    return true;
  }

  // O(1)
  addEdge(from: string, to: string): boolean {
    if (!this.vertices[from] || !this.vertices[to]) {
      return false;
    }

    this.vertices[from].addEdge(to);
    this.vertices[to].addEdge(from);

    return true;
  }

  // O(1)
  removeEdge(from: string, to: string): boolean {
    if (!this.vertices[from] || !this.vertices[to]) {
      return false;
    }

    if (this.vertices[from].hasEdge(to) && this.vertices[to].hasEdge(from)) {
      this.vertices[from].removeEdge(to);
      this.vertices[to].removeEdge(from);
      return true;
    }

    return false;
  }

  bfs(startNode: string): string[] {
    const bfsResults = [];
    const queue = [startNode];
    const visited = new Set();

    visited.add(startNode);

    while (queue.length) {
      const node = queue.shift();
      const edges = this.vertices[node].getEdges();

      bfsResults.push(node);

      for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        if (!visited.has(edge)) {
          visited.add(edge);
          queue.push(edge);
        }
      }
    }

    return bfsResults;
  }

  dfs(startNode: string): string[] {
    const dfsResults = [];
    const visited = new Set();
    const { vertices } = this;

    visited.add(startNode);

    traverse(startNode);
    return dfsResults;

    function traverse(node: string) {
      const edges = vertices[node].getEdges();
      dfsResults.push(node);

      for (let i = 0; i < edges.length; i++) {
        const edgeNode = edges[i];
        if (!visited.has(edgeNode)) {
          visited.add(edgeNode);
          traverse(edgeNode);
        }
      }
    }
  }

  shortestPath(from: string, to: string) {
    const queue = [from];
    const visited = {
      [from]: null,
    };

    while (queue.length) {
      const node = queue.shift();
      const edgesList = this.vertices[node].getEdges();

      if (node === to) break;

      for (let i = 0; i < edgesList.length; i++) {
        const edgeNode = edgesList[i];
        if (visited[edgeNode] !== null) {
          visited[edgeNode] = node;
          queue.push(edgeNode);
        }
      }
    }

    return reconstructPath(to, visited);

    function reconstructPath(
      endNode: string,
      map: { [vertex: string]: string }
    ): string[] {
      const path = [endNode];
      let current = endNode;

      while (true) {
        current = map[current];
        if (!current) break;
        path.push(current);
      }

      return path.reverse();
    }
  }
}

const graph2 = new Graph2();

graph2.addVertex("DFW");
graph2.addVertex("HNL");
graph2.addVertex("LAX");
graph2.addVertex("EWR");
graph2.addVertex("SAN");
graph2.addVertex("JFK");
graph2.addVertex("BOS");
graph2.addVertex("MIA");
graph2.addVertex("MCO");
graph2.addVertex("PBI");

graph2.addEdge("HNL", "LAX");
graph2.addEdge("LAX", "EWR");
graph2.addEdge("LAX", "SAN");
graph2.addEdge("LAX", "DFW");
graph2.addEdge("DFW", "JFK");
graph2.addEdge("JFK", "BOS");
graph2.addEdge("JFK", "MIA");
graph2.addEdge("MIA", "MCO");
graph2.addEdge("MIA", "PBI");
graph2.addEdge("PBI", "MCO");

// console.log(graph2.vertices);

// console.log(graph2.bfs("DFW"));
// console.log(graph2.dfs("DFW"));
console.log(graph2.shortestPath("DFW", "BOS"));
