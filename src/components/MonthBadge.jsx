import { format } from "date-fns";
import useCalendarStore from "../store/useCalendarStore";

function MonthBadge() {
  const { currentMonth } = useCalendarStore();

  return (
    <div className="absolute right-5 md:right-7 bottom-3 md:bottom-4 z-10 text-right">
      <p className="text-sm md:text-lg font-normal text-white leading-none">
        {format(currentMonth, "yyyy")}
      </p>
      <p className="mt-1 text-xl md:text-3xl font-semibold uppercase tracking-wide text-white leading-none">
        {format(currentMonth, "MMMM")}
      </p>
    </div>
  );
}

export default MonthBadge;
