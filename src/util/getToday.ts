export const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = String(today.getMonth() + 1);
  let date = String(today.getDate());
  if (String(month).length === 1) month = "0" + String(today.getMonth() + 1);
  if (String(date).length === 1) date = "0" + String(today.getDate());
  return `${year}-${month}-${date}`;
};
