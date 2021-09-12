export const setLocalStorageItem = (key: string, value: string) =>
  window.localStorage.setItem(key, value);

export const getLocalStorageItem = (key: string) =>
  window.localStorage.getItem(key);

