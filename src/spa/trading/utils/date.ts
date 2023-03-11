import dayjs, { Dayjs } from "dayjs";

export const dateRange = (startDate: Dayjs, endDate: Dayjs, steps = 1) => {
  const dateArray: Date[] = [];
  let currentDate = new Date(startDate.format('YYYY-MM-DD'));
  const endDateString = endDate.format('YYYY-MM-DD')
  while (currentDate <= new Date(endDateString)) {
    dateArray.push(new Date(currentDate));
    // Use UTC date to prevent problems with time zones and DST
    currentDate.setUTCDate(currentDate.getUTCDate() + steps);
  }
  return dateArray.map(val => dayjs(val).format('YYYY-MM-DD'));
}
