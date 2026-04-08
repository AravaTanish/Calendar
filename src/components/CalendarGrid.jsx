import DayCell from "./DayCell";
import {
  getCalendarDays,
  isStartDate,
  isEndDate,
  isDateInRange,
} from "../utils/calendarUtils";
import useCalendarStore from "../store/useCalendarStore";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function CalendarGrid() {
  const { currentMonth, rangeStart, rangeEnd, handleDateClick } =
    useCalendarStore();

  const days = getCalendarDays(currentMonth);

  return (
    <div>
      <div className="grid grid-cols-7 gap-1.5 md:gap-2 mb-2">
        {weekdays.map((day) => (
          <div
            key={day}
            className="text-center text-[10px] md:text-sm text-black/70 font-medium"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1.5 md:gap-2">
        {days.map((day) => {
          const isStart = isStartDate(day, rangeStart);
          const isEnd = isEndDate(day, rangeEnd);
          const inRange =
            rangeStart &&
            rangeEnd &&
            isDateInRange(day, rangeStart, rangeEnd) &&
            !isStart &&
            !isEnd;

          return (
            <DayCell
              key={day.toISOString()}
              day={day}
              currentMonth={currentMonth}
              isStart={isStart}
              isEnd={isEnd}
              isInRange={inRange}
              onClick={handleDateClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CalendarGrid;
