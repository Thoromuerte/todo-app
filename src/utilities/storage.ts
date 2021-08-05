export const saveToLocalStorage = (key: string, data: any): void => {
  localStorage.setItem(key, data);
};

export const readFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);

  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  }

  return null;
};
