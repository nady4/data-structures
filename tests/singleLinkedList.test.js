import { describe, it, expect } from "vitest";
import SingleLinkedList from "../data_structures/SingleLinkedList.js";

describe("SingleLinkedList", () => {
  it("should create a new singleLinkedList with a value", () => {
    const singleLinkedList = new SingleLinkedList(1);
    expect(singleLinkedList).toBeDefined();
  });

  it("should traverse to a specific index", () => {
    const singleLinkedList = new SingleLinkedList(1);
    const node = singleLinkedList.traverseTo(0);
    expect(node).toBeDefined();
  });

  it("should set a value at a specific index", () => {
    const singleLinkedList = new SingleLinkedList(1);
    const node = singleLinkedList.set(2, 0);
    expect(node).toBeDefined();
  });

  it("should append a value to the end of the list", () => {
    const singleLinkedList = new SingleLinkedList(1);
    const node = singleLinkedList.append(2);
    expect(node).toBeDefined();
  });

  it("should prepend a value to the start of the list", () => {
    const singleLinkedList = new SingleLinkedList(1);
    const node = singleLinkedList.prepend(2);
    expect(node).toBeDefined();
  });

  it("should insert a value at a specific index", () => {
    const singleLinkedList = new SingleLinkedList(1);
    const node = singleLinkedList.insert(2, 1);
    expect(node).toBeDefined();
  });

  it("should pop a value from the end of the list", () => {
    const singleLinkedList = new SingleLinkedList(1);
    singleLinkedList.append(2);
    const node = singleLinkedList.pop();
    expect(node).toBeDefined();
  });

  it("should shift a value from the start of the list", () => {
    const singleLinkedList = new SingleLinkedList(1);
    singleLinkedList.append(2);
    const node = singleLinkedList.shift();
    expect(node).toBeDefined();
  });

  it("should delete a value at a specific index", () => {
    const singleLinkedList = new SingleLinkedList(1);
    singleLinkedList.append(2);
    const node = singleLinkedList.delete(0);
    expect(node).toBeDefined();
  });

  it("should reverse the list", () => {
    const singleLinkedList = new SingleLinkedList(1);
    const node = singleLinkedList.reverse();
    expect(node).toBeDefined();
  });

  it("should get the list", () => {
    const singleLinkedList = new SingleLinkedList(1);
    const list = singleLinkedList.getList();
    expect(list).toBeDefined();
  });

  it("should print the list", () => {
    const singleLinkedList = new SingleLinkedList(1);
    singleLinkedList.append(2);
    singleLinkedList.append(3);
    singleLinkedList.print();
  });

  it("should print the nodes", () => {
    const singleLinkedList = new SingleLinkedList(1);
    singleLinkedList.append(2);
    singleLinkedList.append(3);
    singleLinkedList.printNodes();
  });
});
