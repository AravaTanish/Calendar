import { useEffect } from "react";
import HeroSection from "./HeroSection";
import NotesSection from "./NotesSection";
import CalendarSection from "./CalendarSection";
import useCalendarStore from "../store/useCalendarStore";

function CalendarLayout() {
  const { initNote } = useCalendarStore();

  useEffect(() => {
    initNote();
  }, [initNote]);

  return (
    <div className="w-full max-w-[550px]">
      <div className="rounded-xl bg-white overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.16)]">
        <HeroSection />

        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-5 px-5 pb-5 pt-4 md:px-6 md:pb-6">
          <NotesSection />
          <CalendarSection />
        </div>
      </div>
    </div>
  );
}

export default CalendarLayout;
