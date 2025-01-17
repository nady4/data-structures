import { describe, it, expect } from "vitest";
import Queue from "../data_structures/Queue";

describe("Queue", () => {
  it("should create a new queue", () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
  });

  it("should check if the queue is empty", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it("should peek at the top of the queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek().value).toBe(1);
  });

  it("should enqueue an item to the queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek().value).toBe(1);
  });

  it("should dequeue an item from the queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue(1);
    expect(queue.peek().value).toBe(2);
  });

  it("should search for an item in the queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.search(2).value).toBe(2);
  });
});
