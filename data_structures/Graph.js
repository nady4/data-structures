class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  getNodes() {
    return Object.keys(this.adjacentList);
  }

  getNeighbors(node) {
    return this.adjacentList[node];
  }

  addVertex(node) {
    if (this.adjacentList[node] === undefined) {
      this.adjacentList[node] = [];
    }
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  removeEdge(node1, node2) {
    this.adjacentList[node1] = this.adjacentList[node1].filter(
      (node) => node !== node2
    );
    this.adjacentList[node2] = this.adjacentList[node2].filter(
      (node) => node !== node1
    );
  }

  removeVertex(node) {
    while (this.adjacentList[node].length) {
      const adjacentNode = this.adjacentList[node].pop();
      this.removeEdge(node, adjacentNode);
    }
    delete this.adjacentList[node];
    this.numberOfNodes--;
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacentList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      const adjacentNodes = adjacencyList[vertex];
      for (let node of adjacentNodes) {
        if (!visited[node]) {
          return dfs(node);
        }
      }
    })(start);
    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      for (let adjacentNode of this.adjacentList[currentVertex]) {
        if (!visited[adjacentNode]) {
          visited[adjacentNode] = true;
          stack.push(adjacentNode);
        }
      }
    }
    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      for (let adjacentNode of this.adjacentList[currentVertex]) {
        if (!visited[adjacentNode]) {
          visited[adjacentNode] = true;
          queue.push(adjacentNode);
        }
      }
    }
    return result;
  }

  print() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

module.exports = Graph;
