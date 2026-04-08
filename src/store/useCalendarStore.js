import { create } from "zustand";
import { addMonths, subMonths, isBefore, format } from "date-fns";

const getNoteKey = (date) => `calendar-note-${format(date, "yyyy-MM")}`;
const getRangeKey = (date) => `calendar-range-${format(date, "yyyy-MM")}`;

const loadMonthNote = (date) => {
  const key = getNoteKey(date);
  return localStorage.getItem(key) || "";
};

const loadMonthRange = (date) => {
  const key = getRangeKey(date);
  const savedRange = localStorage.getItem(key);

  if (!savedRange) {
    return { rangeStart: null, rangeEnd: null };
  }

  try {
    const parsed = JSON.parse(savedRange);

    return {
      rangeStart: parsed.rangeStart ? new Date(parsed.rangeStart) : null,
      rangeEnd: parsed.rangeEnd ? new Date(parsed.rangeEnd) : null,
    };
  } catch {
    return { rangeStart: null, rangeEnd: null };
  }
};

const saveMonthRange = (date, rangeStart, rangeEnd) => {
  const key = getRangeKey(date);

  localStorage.setItem(
    key,
    JSON.stringify({
      rangeStart: rangeStart ? rangeStart.toISOString() : null,
      rangeEnd: rangeEnd ? rangeEnd.toISOString() : null,
    })
  );
};

const useCalendarStore = create((set, get) => ({
  currentMonth: new Date(),
  rangeStart: null,
  rangeEnd: null,
  note: "",

  initNote: () => {
    const { currentMonth } = get();
    const savedNote = loadMonthNote(currentMonth);
    const savedRange = loadMonthRange(currentMonth);

    set({
      note: savedNote,
      rangeStart: savedRange.rangeStart,
      rangeEnd: savedRange.rangeEnd,
    });
  },

  setNote: (value) => {
    const { currentMonth } = get();
    const key = getNoteKey(currentMonth);
    localStorage.setItem(key, value);
    set({ note: value });
  },

  nextMonth: () => {
    const next = addMonths(get().currentMonth, 1);
    const savedNote = loadMonthNote(next);
    const savedRange = loadMonthRange(next);

    set({
      currentMonth: next,
      note: savedNote,
      rangeStart: savedRange.rangeStart,
      rangeEnd: savedRange.rangeEnd,
    });
  },

  prevMonth: () => {
    const prev = subMonths(get().currentMonth, 1);
    const savedNote = loadMonthNote(prev);
    const savedRange = loadMonthRange(prev);

    set({
      currentMonth: prev,
      note: savedNote,
      rangeStart: savedRange.rangeStart,
      rangeEnd: savedRange.rangeEnd,
    });
  },

  clearSelection: () => {
    const { currentMonth } = get();

    saveMonthRange(currentMonth, null, null);

    set({
      rangeStart: null,
      rangeEnd: null,
    });
  },

  handleDateClick: (day) => {
    const { rangeStart, rangeEnd, currentMonth } = get();

    if (!rangeStart || (rangeStart && rangeEnd)) {
      saveMonthRange(currentMonth, day, null);

      set({
        rangeStart: day,
        rangeEnd: null,
      });
      return;
    }

    if (isBefore(day, rangeStart)) {
      saveMonthRange(currentMonth, day, rangeStart);

      set({
        rangeStart: day,
        rangeEnd: rangeStart,
      });
    } else {
      saveMonthRange(currentMonth, rangeStart, day);

      set({
        rangeEnd: day,
      });
    }
  },
}));

export default useCalendarStore;