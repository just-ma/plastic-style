export const getDateLabel = (seconds: number): string => {
  const date: Date = new Date(seconds * 1000);
  const label: string = new Intl.DateTimeFormat('en-US').format(date);

  return label;
};
