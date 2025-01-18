import { describe, it, expect } from "vitest";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  heapSort,
  quickSort,
  radixSort,
  countingSort,
} from "../algorithms/Sorting";

describe("Sorting", () => {
  it("should sort an array with bubble sort", () => {
    const arr = [5, 3, 1, 2, 4];
    expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array with selection sort", () => {
    const arr = [5, 3, 1, 2, 4];
    expect(selectionSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array with insertion sort", () => {
    const arr = [5, 3, 1, 2, 4];
    expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array with merge sort", () => {
    const arr = [5, 3, 1, 2, 4];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array with heap sort", () => {
    const arr = [5, 3, 1, 2, 4];
    expect(heapSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array with quick sort", () => {
    const arr = [5, 3, 1, 2, 4];
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array with radix sort", () => {
    const arr = [5, 3, 1, 2, 4];
    expect(radixSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array with counting sort", () => {
    const arr = [5, 3, 1, 2, 4];
    expect(countingSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });
});
