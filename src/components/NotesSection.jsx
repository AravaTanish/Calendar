import useCalendarStore from "../store/useCalendarStore";

function NotesSection() {
  const note = useCalendarStore((state) => state.note);
  const setNote = useCalendarStore((state) => state.setNote);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl md:text-2xl font-medium text-black">Notes</h2>

      <div
        className="relative min-h-[220px] rounded-lg overflow-hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 33px, rgba(0,0,0,0.28) 34px)",
        }}
      >
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your monthly notes..."
          className="w-full h-[220px] resize-none bg-transparent text-black placeholder:text-black/40 outline-none text-[15px] leading-[34px] px-1"
        />
      </div>
    </div>
  );
}

export default NotesSection;