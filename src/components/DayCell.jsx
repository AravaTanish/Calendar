import { format, isSameMonth, isToday } from "date-fns";

function DayCell({
  day,
  currentMonth,
  isStart,
  isEnd,
  isInRange,
  onClick,
}) {
  const currentMonthDay = isSameMonth(day, currentMonth);

  let classes =
    "aspect-square rounded-md flex items-center justify-center text-xs md:text-sm cursor-pointer transition border ";

  if (!currentMonthDay) {
    classes += "text-black/25 border-black/10 ";
  } else if (isStart || isEnd) {
    classes += "bg-black text-white border-black font-semibold ";
  } else if (isInRange) {
    classes += "bg-black/10 text-black border-black/20 ";
  } else {
    classes += "text-black border-black/15 hover:bg-black/5 ";
  }

  if (isToday(day) && !isStart && !isEnd) {
    classes += " ring-1 ring-black/55 ";
  }

  return (
    <button onClick={() => onClick(day)} className={classes}>
      {format(day, "d")}
    </button>
  );
}

export default DayCell;