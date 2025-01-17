const crypto = require("crypto");

class HashTable {
  constructor(initialSize = 16) {
    this.data = new Array(initialSize); // Array to store buckets
    this.size = 0; // Number of key-value pairs
    this.loadFactor = 0.75; // Resize when 75% full
  }

  // Simple hash function (for demonstration purposes)
  _hash(key) {
    const hash = crypto.createHash("md5").update(key).digest("hex");
    return parseInt(hash, 16) % this.data.length;
  }

  // Resize and rehash the table
  _resize() {
    const oldData = this.data;
    this.data = new Array(this.data.length * 2); // Double the size
    this.size = 0; // Reset size (will be updated in set)

    // Reinsert all key-value pairs into the new table
    for (const bucket of oldData) {
      if (bucket) {
        for (const [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }

  // O(1)
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    // Check if the key already exists and update it
    for (let i = 0; i < this.data[address].length; i++) {
      if (this.data[address][i][0] === key) {
        this.data[address][i][1] = value; // Update value
        return;
      }
    }

    // Otherwise, insert the new key-value pair
    this.data[address].push([key, value]);
    this.size++;

    // Resize if load factor is exceeded
    if (this.size / this.data.length > this.loadFactor) {
      this._resize();
    }
  }

  // O(1)
  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];
    if (bucket) {
      for (const [storedKey, value] of bucket) {
        if (storedKey === key) {
          return value;
        }
      }
    }
    return undefined; // Key not found
  }

  // O(1)
  delete(key) {
    const address = this._hash(key);
    const bucket = this.data[address];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1); // Remove the key-value pair
          this.size--;
          return true; // Key successfully deleted
        }
      }
    }
    return false; // Key not found
  }

  // O(n)
  keys() {
    const keysArray = [];
    for (const bucket of this.data) {
      if (bucket) {
        for (const [key] of bucket) {
          keysArray.push(key);
        }
      }
    }
    return keysArray;
  }

  // O(n)
  values() {
    const valuesArray = [];
    for (const bucket of this.data) {
      if (bucket) {
        for (const [, value] of bucket) {
          valuesArray.push(value);
        }
      }
    }
    return valuesArray;
  }
}

module.exports = HashTable;
