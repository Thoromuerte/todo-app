export const getCurrentDay = (): number => {
  const date = new Date();

  return date.getDate();
};

export const getCurrentDate = (name: string): string => {
  const date = new Date();

  const dateFormat = new Intl.DateTimeFormat("en-us", {
    [name]: "long",
  });

  return dateFormat.format(date);
};

export const getTodoDate = (date: Date | string): string => {
  const parsedDate = new Date(date);

  const hours = (parsedDate.getHours() < 10 ? "0" : "") + parsedDate.getHours();
  const minutes =
    (parsedDate.getMinutes() < 10 ? "0" : "") + parsedDate.getMinutes();

  return `${hours}:${minutes}`;
};
