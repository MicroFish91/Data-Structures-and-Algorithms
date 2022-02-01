class GraphNode {
  public val: any;
  public adjacencyList: GraphNode[];

  constructor(val: any) {
    this.val = val;
    this.adjacencyList = [];
  }

  connect(neighbor: GraphNode) {
    if (this.adjacencyList.findIndex((node) => node === neighbor) === -1) {
      this.adjacencyList.push(neighbor);
      neighbor.adjacencyList.push(this);
    }
  }

  isNeighbor(neighbor: GraphNode) {
    return this.adjacencyList.findIndex((node) => node === neighbor) !== -1;
  }
}

class Graph {
  public network: GraphNode[];

  constructor(nodes?: GraphNode[]) {
    this.network = nodes || [];
  }

  addToGraph(node: GraphNode) {
    if (this.network.findIndex((netNode) => netNode === node) === -1) {
      this.network.push(node);
    }
  }

  // bfs from a node
  bfs(start: GraphNode) {
    const bfsResults = [];
    const visited = new Set();
    const queue = [];

    queue.push(start);

    while (queue.length) {
      const currentNode = queue.shift();
      const { adjacencyList } = currentNode;

      bfsResults.push(currentNode.val);
      visited.add(currentNode);

      for (let i = 0; i < adjacencyList.length; i++) {
        const node = adjacencyList[i];

        if (!visited.has(node)) {
          queue.push(node);
        }
      }
    }

    return bfsResults;
  }

  // dfs from a node
  dfs(start: GraphNode) {
    const dfsResults = [];
    const visited = new Set();
    traverse(start);
    return dfsResults;

    function traverse(node: GraphNode) {
      const { adjacencyList } = node;

      visited.add(node);
      dfsResults.push(node.val);

      for (let i = 0; i < adjacencyList.length; i++) {
        const adjNode = adjacencyList[i];

        if (!visited.has(adjNode)) {
          traverse(adjNode);
        }
      }
    }
  }

  reconstructPath(end: GraphNode, visited: { [id: string]: GraphNode }) {
    const path = [end.val];
    let currentNode = end;

    while (true) {
      currentNode = visited[currentNode.val];
      if (currentNode === null) break;
      path.push(currentNode.val);
    }

    return path.reverse();
  }

  // shortestPath between two nodes
  shortestPath(start: GraphNode, end: GraphNode) {
    const queue = [start];
    const visited = {};

    visited[start.val] = null;

    while (queue.length) {
      const node = queue.shift();
      const { adjacencyList } = node;

      for (let i = 0; i < adjacencyList.length; i++) {
        const adjNode = adjacencyList[i];

        if (!visited.hasOwnProperty(adjNode.val)) {
          queue.push(adjNode);
          visited[adjNode.val] = node;
        }
      }
    }

    return this.reconstructPath(end, visited);
  }
}

const DFW = new GraphNode("DFW");
const HNL = new GraphNode("HNL");
const LAX = new GraphNode("LAX");
const EWR = new GraphNode("EWR");
const SAN = new GraphNode("SAN");
const HKG = new GraphNode("HKG");
const JFK = new GraphNode("JFK");
const BOS = new GraphNode("BOS");
const MIA = new GraphNode("MIA");
const MCO = new GraphNode("MCO");
const PBI = new GraphNode("PBI");

HNL.connect(LAX);
LAX.connect(EWR);
LAX.connect(SAN);
LAX.connect(DFW);
DFW.connect(JFK);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MIA.connect(PBI);
PBI.connect(MCO);
SAN.connect(HKG);

const g = new Graph([DFW, HNL, LAX, EWR, SAN, HKG, JFK, BOS, MIA, MCO, PBI]);

console.log(g.shortestPath(DFW, MCO));
