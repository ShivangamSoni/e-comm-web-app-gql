const STORAGE_KEY = "STATE";

export const loadState = () => {
  try {
    const state = localStorage.getItem(STORAGE_KEY);

    if (state === null) {
      return undefined;
    }

    return JSON.parse(state);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {}
};
