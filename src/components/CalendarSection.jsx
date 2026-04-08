import { format } from "date-fns";
import CalendarGrid from "./CalendarGrid";
import useCalendarStore from "../store/useCalendarStore";

function CalendarSection() {
  const {
    currentMonth,
    rangeStart,
    rangeEnd,
    prevMonth,
    nextMonth,
    clearSelection,
  } = useCalendarStore();

  return (
    <div className="rounded-lg shadow-[0_16px_45px_rgba(0,0,0,0.16)] p-4 md:p-4 bg-white">
      <div className="flex items-center justify-between gap-2 mb-3">
        <button
          onClick={prevMonth}
          className="px-3 py-1.5 rounded-md shadow-[0_16px_45px_rgba(0,0,0,0.3)] text-black hover:bg-black hover:text-white transition"
        >
          Prev
        </button>

        <h3 className="text-sm md:text-lg font-medium text-black text-center">
          {format(currentMonth, "MMMM yyyy")}
        </h3>

        <button
          onClick={nextMonth}
          className="px-3 py-1.5 rounded-md shadow-[0_16px_45px_rgba(0,0,0,0.3)] text-black hover:bg-black hover:text-white transition"
        >
          Next
        </button>
      </div>

      <div className="mb-3 flex items-center justify-between gap-3 flex-wrap">
        <p className="text-xs md:text-sm text-black/65">
          {rangeStart && rangeEnd
            ? "Date range selected"
            : rangeStart
              ? "Select an end date"
              : "Select a start date"}
        </p>

        <button
          onClick={clearSelection}
          className="text-xs md:text-sm text-black/70 underline hover:text-black"
        >
          Clear
        </button>
      </div>

      <CalendarGrid />
    </div>
  );
}

export default CalendarSection;
