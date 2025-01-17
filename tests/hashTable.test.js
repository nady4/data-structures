import { describe, it, expect } from "vitest";
import HashTable from "../data_structures/HashTable.js";

describe("HashTable", () => {
  it("should create a new hash table", () => {
    const hashTable = new HashTable();
    expect(hashTable).toBeDefined();
  });

  it("should set and get a key-value pair", () => {
    const hashTable = new HashTable();
    hashTable.set("key", "value");
    expect(hashTable.get("key")).toBe("value");
  });

  it("should delete a key-value pair", () => {
    const hashTable = new HashTable();
    hashTable.set("key", "value");
    hashTable.delete("key");
    expect(hashTable.get("key")).toBeUndefined();
  });

  it("should get all keys", () => {
    const hashTable = new HashTable();
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");
    expect(hashTable.keys()).toEqual(["key1", "key2"]);
  });

  it("should get all values", () => {
    const hashTable = new HashTable();
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");
    expect(hashTable.values()).toEqual(["value1", "value2"]);
  });

  it("should resize the hash table when load factor is exceeded", () => {
    const hashTable = new HashTable();
    for (let i = 1; i <= 13; i++) {
      // 13 > 16 * 0.75
      hashTable.set(`key${i}`, `value${i}`);
    }
    expect(hashTable.data.length).toBeGreaterThan(16);
  });
});
