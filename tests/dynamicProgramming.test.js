import { describe, it, expect } from "vitest";
import {
  fibonacci,
  fibonacciMaster,
  fibonacciMaster2,
} from "../algorithms/DynamicProgramming";

describe("Dynamic Programming", () => {
  it("should calculate the nth Fibonacci number", () => {
    expect(fibonacci(10)).toBe(55);
  });

  it("should calculate the nth Fibonacci number", () => {
    expect(fibonacciMaster()(10)).toBe(55);
  });

  it("should calculate the nth Fibonacci number", () => {
    expect(fibonacciMaster2(10)).toBe(55);
  });
});
