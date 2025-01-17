import { describe, it, expect } from "vitest";
import BinaryHeap from "../data_structures/BinaryHeap";

describe("BinaryHeap", () => {
  it("should create a new binary heap", () => {
    const heap = new BinaryHeap();
    expect(heap).toBeDefined();
    expect(heap.isEmpty()).toBe(true);
  });

  it("should insert elements into a min-heap and maintain heap property", () => {
    const heap = new BinaryHeap();
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.insert(1);

    expect(heap.peek()).toBe(1);
  });

  it("should insert elements into a max-heap and maintain heap property", () => {
    const heap = new BinaryHeap((a, b) => b - a); // Max-heap
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.insert(1);

    expect(heap.peek()).toBe(20);
  });

  it("should remove the root element from a min-heap and maintain heap property", () => {
    const heap = new BinaryHeap();
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.insert(1);

    expect(heap.remove()).toBe(1);
    expect(heap.peek()).toBe(5);
  });

  it("should remove the root element from a max-heap and maintain heap property", () => {
    const heap = new BinaryHeap((a, b) => b - a); // Max-heap
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.insert(1);

    expect(heap.remove()).toBe(20);
    expect(heap.peek()).toBe(10);
  });

  it("should handle removing from an empty heap gracefully", () => {
    const heap = new BinaryHeap();
    expect(heap.remove()).toBe(null);
  });

  it("should search for elements in the heap", () => {
    const heap = new BinaryHeap();
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.insert(1);

    expect(heap.search(5)).toBe(5);
    expect(heap.search(20)).toBe(20);
    expect(heap.search(99)).toBe(null); // Not in the heap
  });

  it("should check if the heap is empty", () => {
    const heap = new BinaryHeap();
    expect(heap.isEmpty()).toBe(true);

    heap.insert(1);
    expect(heap.isEmpty()).toBe(false);

    heap.remove();
    expect(heap.isEmpty()).toBe(true);
  });
});
