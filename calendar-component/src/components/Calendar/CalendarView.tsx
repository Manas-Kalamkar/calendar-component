import { useState } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { useEventManager } from "../../hooks/useEventManager";
import { getCalendarGrid } from "../../utils/date.utils";
import { CalendarCell } from "./CalendarCell";
import EventModal from "./EventModal";




const CalendarView: React.FC = () => {
  // Toggles EventModal open/close
  const [isSelected, setIsSelected] = useState(false);
  const {
    currentDate,
    view,
    selectedDate,
    setState,
    goToNextMonth,
    goToPreviousMonth,
    goToToday,
  } = useCalendar(new Date());

  const {
    events,
    saveEvents,
    deleteEvent
  } = useEventManager();
  console.log(events);

  const date: Date = new Date(currentDate);
  const days = getCalendarGrid(date);

  console.log("selectedDate in CalendarView: ", selectedDate);
  return (<>

    <div className="p-4 bg-gray-400 m-auto h-screen  flex justify-center gap-4" >


      <div className="w-[60%] ">
        <div className="flex flex-row justify-center items-center gap-4"><div className="w-14 h-14 flex items-center justify-center text-4xl font-bold hover:bg-slate-100 rounded-full" onClick={() => goToPreviousMonth()}>&lt;</div>
          <div className="text-center">{["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]} {date.getFullYear()}</div>
          <div className="w-14 h-14 flex items-center justify-center text-4xl font-bold hover:bg-slate-100 rounded-full" onClick={() => goToNextMonth()}>&gt;</div>
        </div>

        <div className="grid grid-cols-7 text-center font-semibold text-neutral-700 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((i) => (
            <>
              <div>{i}</div>
            </>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-[2px] border border-neutral-300">
          {days.map((day, i) => {
            const dateKey: string = day.toISOString().split("T")[0];
            const eventsForDay = events[dateKey] || [];
            return (
              <CalendarCell
                key={i}
                date={day}
                events={eventsForDay}
                onSelect={(clickedDay) => {
                  setState(prev => ({ ...prev, selectedDate: clickedDay, }));
                  setIsSelected(true)
                }}
              />)
          })}

        </div>


      </div>
      {selectedDate && (
        <div
          className={`fixed inset-0 bg-black/30 flex items-center justify-center ${isSelected ? "flex" : "hidden"
            }`}
          onClick={() => setIsSelected(false)}
        >
          <EventModal
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            selectedDate={selectedDate}
            events={events}
            saveEvents={saveEvents}
            deleteEvent={deleteEvent}
          />

        </div>

      )}
    </div>
  </>

  );
};

export default CalendarView;



