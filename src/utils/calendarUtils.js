import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  isWithinInterval,
} from "date-fns";

export function getCalendarDays(currentMonth) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  return eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });
}

export function isStartDate(day, startDate) {
  return !!startDate && isSameDay(day, startDate);
}

export function isEndDate(day, endDate) {
  return !!endDate && isSameDay(day, endDate);
}

export function isDateInRange(day, startDate, endDate) {
  if (!startDate || !endDate) return false;
  return isWithinInterval(day, { start: startDate, end: endDate });
}