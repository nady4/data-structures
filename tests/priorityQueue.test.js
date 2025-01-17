import { describe, it, expect } from "vitest";
import PriorityQueue from "../data_structures/PriorityQueue";

describe("PriorityQueue", () => {
  it("should create a new priority queue", () => {
    const pq = new PriorityQueue();
    expect(pq).toBeDefined();
  });

  it("should check if the priority queue is empty", () => {
    const pq = new PriorityQueue();
    expect(pq.isEmpty()).toBe(true);
  });

  it("should peek at the highest-priority item", () => {
    const pq = new PriorityQueue();
    pq.enqueue("low priority", 3);
    pq.enqueue("high priority", 1);
    pq.enqueue("medium priority", 2);
    expect(pq.peek().value).toBe("high priority");
  });

  it("should enqueue items in the correct priority order", () => {
    const pq = new PriorityQueue();
    pq.enqueue("low priority", 3);
    pq.enqueue("high priority", 1);
    pq.enqueue("medium priority", 2);
    expect(pq.peek().value).toBe("high priority");
  });

  it("should dequeue the highest-priority item", () => {
    const pq = new PriorityQueue();
    pq.enqueue("low priority", 3);
    pq.enqueue("high priority", 1);
    pq.enqueue("medium priority", 2);
    pq.dequeue();
    expect(pq.peek().value).toBe("medium priority");
  });

  it("should search for an item in the priority queue", () => {
    const pq = new PriorityQueue();
    pq.enqueue("low priority", 3);
    pq.enqueue("high priority", 1);
    pq.enqueue("medium priority", 2);
    const node = pq.search("medium priority");
    expect(node).toBeDefined();
    expect(node.value).toBe("medium priority");
    expect(node.priority).toBe(2);
  });
});
