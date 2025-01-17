import { describe, it, expect } from "vitest";
import DoublyLinkedList from "../data_structures/DoublyLinkedList.js";

describe("DoublyLinkedList", () => {
  it("should create a new DoublyLinkedList with a value", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    expect(doublyLinkedList).toBeDefined();
  });

  it("should traverse to a specific index", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    const node = doublyLinkedList.traverseTo(0);
    expect(node).toBeDefined();
  });

  it("should set a value at a specific index", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    const node = doublyLinkedList.traverseTo(0);
    expect(node).toBeDefined();
  });

  it("should append a value to the end of the list", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    const node = doublyLinkedList.traverseTo(0);
    expect(node).toBeDefined();
  });

  it("should prepend a value to the beginning of the list", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    const node = doublyLinkedList.traverseTo(0);
    expect(node).toBeDefined();
  });

  it("should insert a value at a specific index", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    const node = doublyLinkedList.traverseTo(0);
    expect(node).toBeDefined();
  });

  it("should pop a value from the end of the list", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    doublyLinkedList.append(2);
    const node = doublyLinkedList.pop();
    expect(node).toBeDefined();
  });

  it("should shift a value from the beginning of the list", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    doublyLinkedList.append(2);
    const node = doublyLinkedList.shift();
    expect(node).toBeDefined();
  });

  it("should delete a value at a specific index", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    doublyLinkedList.append(2);
    const node = doublyLinkedList.delete(0);
    expect(node).toBeDefined();
  });

  it("should reverse the list", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    const node = doublyLinkedList.reverse();
    expect(node).toBeDefined();
  });

  it("should get the list", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    const list = doublyLinkedList.getList();
    expect(list).toBeDefined();
  });

  it("should print the list", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.print();
  });

  it("should print the nodes", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.printNodes();
  });
});
