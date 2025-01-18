//time: O(n^2) - space: O(1)
const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
};

//time: O(n^2) - space: O(1)
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i,
      aux;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    aux = arr[i];
    arr[i] = arr[min];
    arr[min] = aux;
  }
  return arr;
};

//time: O(n^2) - space: O(1)
const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    }
    for (let j = 1; j < i; j++) {
      if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
        arr.splice(j, 0, arr.splice(i, 1)[0]);
      }
    }
  }
  return arr;
};

//time: O(n log(n)) - space: O(n)
const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  const merge = (left, right) => {
    let result = [],
      leftIndex = 0,
      rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  const middle = Math.floor(arr.length / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

// time: O(n log n) - space: O(1)
const heapSort = (arr) => {
  const heapify = (arr, n, i) => {
    let largest = i;
    let left = 2 * i + 1; // left child
    let right = 2 * i + 2; // right child

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      swap(arr, i, largest);
      heapify(arr, n, largest); // Recursively heapify the affected sub-tree
    }
  };

  const swap = (arr, firstIndex, secondIndex) => {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  };

  const n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements one by one from the heap
  for (let i = n - 1; i > 0; i--) {
    // Swap current root (largest) with the last element
    swap(arr, 0, i);

    // Call heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr; // Return the sorted array
};

// time: O(n^2) - space: O(log(n))
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  const partition = (arr, pivot, left, right) => {
    let pivotValue = arr[pivot],
      partitionIndex = left;

    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(arr, right, partitionIndex);

    return partitionIndex;
  };

  const swap = (arr, firstIndex, secondIndex) => {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  };

  let pivot, partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    quickSort(arr, left, partitionIndex - 1); // Sort the left part
    quickSort(arr, partitionIndex + 1, right); // Sort the right part
  }

  return arr;
};

// time: O(n * d) - space: O(n), where d is the number of digits in the largest number
const radixSort = (arr) => {
  if (arr.length <= 1) return arr;

  const countingSortByDigit = (arr, exp) => {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0); // For digits 0-9

    // Count occurrences of each digit
    for (let i = 0; i < n; i++) {
      const digit = Math.floor(arr[i] / exp) % 10;
      count[digit]++;
    }

    // Modify the count array to store cumulative counts
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }

    return output;
  };

  // Find the maximum number to determine the number of digits
  const max = Math.max(...arr);
  let exp = 1; // Exponent to isolate each digit

  // Iterate through each digit
  while (Math.floor(max / exp) > 0) {
    arr = countingSortByDigit(arr, exp);
    exp *= 10;
  }

  return arr;
};

// time: O(n + k) - space: O(k)
const countingSort = (arr) => {
  if (arr.length <= 1) return arr;

  // Find the range of the numbers
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;

  // Create the counting array
  const count = new Array(range).fill(0);

  // Count the occurrences
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  // Modify the count array to store cumulative counts
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Create a result array
  const result = new Array(arr.length);

  // Build the output array by iterating through the original array
  for (let i = arr.length - 1; i >= 0; i--) {
    result[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  return result;
};

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  heapSort,
  quickSort,
  radixSort,
  countingSort,
};
