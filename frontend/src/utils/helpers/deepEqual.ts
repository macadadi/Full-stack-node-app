import { MyObject } from "types";

export const deepEqual = (
  obj1: MyObject | string | null,
  obj2: MyObject | string | null
) => {
  if (obj1 === obj2) {
    return true; // Both are identical (same reference or both null/undefined)
  }

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false; // One is an object and the other is not
  }

  const keys1: string[] | MyObject[] = Object.keys(obj1);
  const keys2: string[] | MyObject[] = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false; // Different number of keys
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false; // Key not found in both objects or values are not equal
    }
  }

  return true;
};
