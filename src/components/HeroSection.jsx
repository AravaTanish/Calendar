import {monthImages} from "../utils/monthImages.js"
import useCalendarStore from "../store/useCalendarStore.js";
import MonthBadge from "./MonthBadge.jsx";
function HeroSection() {
  const currentMonth = useCalendarStore((state) => state.currentMonth);
  const monthIndex = currentMonth.getMonth();
  const imageSrc = monthImages[monthIndex];
  return (
    <div className="relative h-[270px] md:h-[330px]">
      <div
        className="absolute inset-0"
      >
        <img
          src={imageSrc}
          alt="Calendar hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.30))]" />
        <MonthBadge />
      </div>

    </div>
  );
}

export default HeroSection;