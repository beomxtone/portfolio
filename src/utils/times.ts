export const formatDuration = (value: number) => {
  const minute = Math.floor(value / 60 / 10);
  const secondLeft = Math.floor(value / 10 - minute * 60);
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
};
