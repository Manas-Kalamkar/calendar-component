import React from "react";

export interface CalendarEvent {
    id: string;
    title: string;
    timeStart: string;
    timeEnd: string;
    color?: string;
    category?: string;
    description?: string;
}


export type EventMap = {
    [date: string]: CalendarEvent[];
}

const toDateKey = (date: Date) => date.toISOString().split("T")[0];

export const useEventManager = () => {
    const [events, setEvent] = React.useState<EventMap>({});

    function saveEvents(
        date: Date,
        event: {
            title: string;
            timeStart: string;
            timeEnd: string;
            color?: string;
            description?: string;
        }) {

        const newEvent: CalendarEvent = {
            id: `${event.title}-${event.timeStart}-${Math.random().toString(36).slice(2, 8)}`,
            title: event.title,
            timeStart: event.timeStart,
            timeEnd: event.timeEnd,
            color: event.color,
            description: event.description,
        };
        const key: string = date.toISOString().split("T")[0];
        setEvent(prev => ({
            ...prev,
            [key]: [...(prev[key] || []), newEvent]
        }))
    }

    function deleteEvent(
        date: Date,
        id: string
    ) {
        const dateKey = date.toISOString().split("T")[0];
        if (!events[dateKey]) return;
        setEvent((prev) => ({
            ...prev,
            [dateKey]: prev[dateKey].filter((event) => event.id !== id)
        }))
    }

    return {
        events,
        saveEvents,
        deleteEvent
    }

}