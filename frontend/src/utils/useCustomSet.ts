import { useState } from "react";
import { deepEqual } from "./deepEqual";
export function useCustomSet<T>() {
  const [currentSet, setCurrentSet] = useState<T[]>([]);

  const addItem = (item: T) => {
    console.log(item);
    if (hasItem(item)) return;
    console.log("adding item");
    setCurrentSet(prevSet => [...prevSet, item]);
  };

  const removeItem = (item: T) => {
    if (!hasItem(item)) return;
    setCurrentSet(prevSet => prevSet.filter(obj => !deepEqual(obj, item)));
  };

  const hasItem = (item: T) => {
    return Array.from(currentSet).some(obj => deepEqual(obj, item));
  };

  const items: T[] = currentSet;
  return { addItem, removeItem, hasItem, items };
}
