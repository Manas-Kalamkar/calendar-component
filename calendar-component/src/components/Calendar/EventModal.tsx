import { useEffect, useState } from "react";
import type { CalendarEvent } from "../../hooks/useEventManager";

const EventModal = ({
    isSelected,
    setIsSelected,
    selectedDate,
    events,
    saveEvents,
    deleteEvent,
}: {
    isSelected: boolean;
    setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
    selectedDate: Date;
    events: { [date: string]: CalendarEvent[] };
    saveEvents: (date: Date, event: Omit<CalendarEvent, "id">) => void;
    deleteEvent: (date: Date, id: string) => void;
}) => {
    const dateKey = selectedDate.toISOString().split("T")[0];

    // If there are events on actual day → load first event into form
    const existingEvent = events[dateKey]?.[0];

    // Form state fields
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");
    const [timeStart, setTimeStart] = useState("09:00");
    const [timeEnd, setTimeEnd] = useState("10:00");
    const [description, setDescription] = useState("");

    // Load default values whenever selected date changes
    useEffect(() => {
        setTitle(existingEvent?.title || "");
        setColor(existingEvent?.color || "#000000");
        setDescription(existingEvent?.description || "");
        setTimeStart(existingEvent?.timeStart || "09:00");
        setTimeEnd(existingEvent?.timeEnd || "10:00");
    }, [dateKey]);

    function handleSave() {
        saveEvents(selectedDate, {
            title,
            timeStart,
            timeEnd,
            color,
            description,
        });
    }

    return (
        
        <div 
        onClick={(e)=>e.stopPropagation()}
            className={`${
                isSelected ? "flex" : "hidden"
            } bg-white shadow-xl p-4 rounded flex-col gap-4 w-80`}
        >
            <h2 className="text-lg font-bold mb-2">
                Events for {selectedDate.toDateString()}
            </h2>

            {/* List existing events with delete icon */}
            {events[dateKey]?.map((ev) => (
                <div
                    key={ev.id}
                    className="p-2 bg-gray-100 rounded flex justify-between items-center"
                >
                    <div>
                        <div className="font-semibold">{ev.title}</div>
                        <div className="text-xs">
                            {ev.timeStart} - {ev.timeEnd}
                        </div>
                    </div>

                    <button
                        onClick={() => deleteEvent(selectedDate, ev.id)}
                        className="text-red-600 font-bold text-xl"
                    >
                        ✕
                    </button>
                </div>
            ))}

            {/* Form */}
            <label className="font-semibold">Title</label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full rounded"
                placeholder="Event Title"
            />

            <label className="font-semibold">Color</label>
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-20 h-10"
            />

            <label className="font-semibold">Start Time</label>
            <input
                type="time"
                value={timeStart}
                onChange={(e) => setTimeStart(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <label className="font-semibold">End Time</label>
            <input
                type="time"
                value={timeEnd}
                onChange={(e) => setTimeEnd(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <label className="font-semibold">Description</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 rounded w-full h-20"
                placeholder="Optional description"
            />

            <button
                onClick={handleSave}
                className="bg-blue-500 text-white p-2 rounded mt-3 hover:bg-blue-600"
            >
                Save Event
            </button>

            <button
                onClick={() => setIsSelected(false)}
                className="bg-gray-300 mt-2 p-2 rounded"
            >
                Close
            </button>
        </div>
    );
};

export default EventModal;
