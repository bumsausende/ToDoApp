import { useEffect, useState } from "react";
//helper files in here

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key, defaultValue) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  setItem(key, defaultValue);
  return defaultValue;
};
//

export const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(getItem(key, defaultValue));
  useEffect(() => {
    setItem(key, state);
  }, [state]);
  return [state, setState];
};
