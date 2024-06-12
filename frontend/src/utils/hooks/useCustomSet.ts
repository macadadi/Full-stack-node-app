import { useState } from "react";
import { MyObject } from "types";
import { deepEqual } from "utils/helpers/deepEqual";

export function useCustomSet<T extends string | MyObject | null>() {
  const [currentSet, setCurrentSet] = useState<T[]>([]);
  const [{ isAdding, isRemoving }, setAction] = useState({
    isAdding: false,
    isRemoving: false,
  });

  const addItem = (item: T) => {
    if (hasItem(item)) return;
    setAction(prev => ({ ...prev, isAdding: true }));
    setCurrentSet(prevSet => [...prevSet, item]);
    setTimeout(() => {
      setAction(prev => ({ ...prev, isAdding: false }));
    }, 1500);
  };

  const removeItem = (item: T) => {
    if (!hasItem(item)) return;
    setAction(prev => ({ ...prev, isRemoving: true }));
    setCurrentSet(prevSet => prevSet.filter(obj => !deepEqual(obj, item)));
    setTimeout(() => {
      setAction(prev => ({ ...prev, isRemoving: false }));
    }, 1500);
  };
  const hasItem = (item: T) => {
    return Array.from(currentSet).some(obj => deepEqual(obj, item));
  };

  const items: T[] = currentSet;
  return { addItem, removeItem, hasItem, items, isAdding, isRemoving };
}
