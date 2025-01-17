import { describe, it, expect } from "vitest";
import BinarySearchTree from "../data_structures/BinarySearchTree";

describe("BinarySearchTree", () => {
  it("should create a new binary search tree", () => {
    const binarySearchTree = new BinarySearchTree();
    expect(binarySearchTree).toBeDefined();
  });

  it("should get the root of the binary search tree", () => {
    const binarySearchTree = new BinarySearchTree();
    expect(binarySearchTree.getRoot()).toBeDefined();
  });

  it("should insert a value into the binary search tree", () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(1);
    expect(binarySearchTree.getRoot().value).toBe(1);
  });

  it("should search for a value in the binary search tree", () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(1);
    expect(binarySearchTree.search(1).value).toBe(1);
  });

  it("should remove a value from the binary search tree", () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(1);
    binarySearchTree.remove(1);
    expect(binarySearchTree.getRoot().value).toBe(null);
  });

  it("should traverse the binary search tree in order", () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.inOrderDFS()).toEqual([1, 2, 3]);
  });

  it("should traverse the binary search tree pre order", () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.preOrderDFS()).toEqual([1, 2, 3]);
  });

  it("should traverse the binary search tree post order", () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.postOrderDFS()).toEqual([2, 3, 1]);
  });

  it("should traverse the binary search tree breadth first", () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.BFS()).toEqual([1, 2, 3]);
  });

  it("should traverse the binary search tree breadth first recursively", () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.recursiveBFS()).toEqual([1, 2, 3]);
  });

  it("should print the binary search tree", () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.printTree()).toEqual({
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null },
    });
  });
});
