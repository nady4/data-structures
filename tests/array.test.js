import { describe, it, expect } from "vitest";
import DinamicArray from "../data_structures/Array.js";

describe("Array", () => {
  it("should create a new array", () => {
    const array = new DinamicArray();
    expect(array).toBeDefined();
  });

  it("should get an item from the array", () => {
    const array = new DinamicArray();
    array.push(1);
    expect(array.get(0)).toBe(1);
  });

  it("should insert an item in the array", () => {
    const array = new DinamicArray();
    array.insert(0, 1);
    expect(array.get(0)).toBe(1);
  });

  it("should unshift an item to the array", () => {
    const array = new DinamicArray();
    array.unshift(1);
    expect(array.get(0)).toBe(1);
  });

  it("should push an item to the array", () => {
    const array = new DinamicArray();
    array.push(1);
    expect(array.get(0)).toBe(1);
  });

  it("should delete an item from the array", () => {
    const array = new DinamicArray();
    array.push(1);
    array.delete(0);
    expect(array.get(0)).toBeUndefined();
  });

  it("should shift an item from the array", () => {
    const array = new DinamicArray();
    array.push(1);
    array.shift();
    expect(array.get(0)).toBeUndefined();
  });

  it("should pop an item from the array", () => {
    const array = new DinamicArray();
    array.push(1);
    array.pop();
    expect(array.get(0)).toBeUndefined();
  });

  it("should reverse the array", () => {
    const array = new DinamicArray();
    array.push(1);
    array.push(2);
    array.push(3);
    array.reverse();
    expect(array.get(0)).toBe(3);
    expect(array.get(1)).toBe(2);
    expect(array.get(2)).toBe(1);
  });

  it("should search for an item in the array", () => {
    const array = new DinamicArray();
    array.push(1);
    array.push(2);
    array.push(3);
    expect(array.search(2)).toBe(1);
  });
});
