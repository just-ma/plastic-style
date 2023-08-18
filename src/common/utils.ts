export const getDateLabel = (seconds: number): string => {
  const date = new Date(seconds * 1000);
  const formattedDate = new Intl.DateTimeFormat('en-US').format(date);

  return formattedDate.replace(/\//g, '.');
};
