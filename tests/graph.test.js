import { describe, it, expect } from "vitest";
import Graph from "../data_structures/Graph";

describe("Graph", () => {
  it("should create a new graph", () => {
    const graph = new Graph();
    expect(graph).toBeDefined();
  });

  it("should get the nodes in the graph", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    expect(graph.getNodes()).toEqual(["A", "B"]);
  });

  it("should get the neighbors of a node", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    expect(graph.getNeighbors("A")).toEqual(["B"]);
  });

  it("should add a vertex to the graph", () => {
    const graph = new Graph();
    graph.addVertex("A");
    expect(graph.numberOfNodes).toBe(1);
  });

  it("should add an edge to the graph", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    expect(graph.adjacentList["A"].includes("B")).toBe(true);
  });

  it("should remove an edge from the graph", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    graph.removeEdge("A", "B");
    expect(graph.adjacentList["A"].includes("B")).toBe(false);
  });

  it("should remove a vertex from the graph", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    graph.removeVertex("A");
    expect(graph.adjacentList["A"]).toBeUndefined();
  });

  it("should perform a depth first recursive traversal on the graph", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    const result = graph.depthFirstRecursive("A");
    expect(result).toEqual(["A", "B"]);
  });

  it("should perform a depth first iterative traversal on the graph", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    const result = graph.depthFirstIterative("A");
    expect(result).toEqual(["A", "B"]);
  });

  it("should perform a breadth first traversal on the graph", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    const result = graph.breadthFirst("A");
    expect(result).toEqual(["A", "B"]);
  });

  it("should print the graph", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    graph.print();
  });
});
