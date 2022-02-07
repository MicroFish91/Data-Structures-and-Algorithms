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
}
