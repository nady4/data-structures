import { describe, it, expect } from "vitest";
import Stack from "../data_structures/Stack.js";

describe("Stack", () => {
  it("should create a new stack", () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it("should check if the stack is empty", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it("should peek at the top of the stack", () => {
    const stack = new Stack();
    stack.push("google");
    stack.push("udemy");
    stack.push("discord");
    expect(stack.peek().value).toBe("discord");
  });

  it("should push an item to the stack", () => {
    const stack = new Stack();
    stack.push("google");
    stack.push("udemy");
    stack.push("discord");
    expect(stack.peek().value).toBe("discord");
  });

  it("should pop an item from the stack", () => {
    const stack = new Stack();
    stack.push("google");
    stack.push("udemy");
    stack.push("discord");
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it("should search for an item in the stack", () => {
    const stack = new Stack();
    stack.push("google");
    stack.push("udemy");
    stack.push("discord");
    expect(stack.search("udemy").value).toBe("udemy");
  });
});
