import { describe, it, expect } from "vitest";
import { linearSearch, binarySearch } from "../algorithms/Searching";

describe("Searching", () => {
  describe("Linear Search", () => {
    it("should find the target in the array", () => {
      const arr = [1, 2, 3, 4, 5];
      const target = 3;
      const result = linearSearch(arr, target);
      expect(result).toBe(2);
    });
  });
  describe("Binary Search", () => {
    it("should find the target in the array", () => {
      const arr = [1, 2, 3, 4, 5];
      const target = 3;
      const result = binarySearch(arr, target);
      expect(result).toBe(2);
    });
  });
});
