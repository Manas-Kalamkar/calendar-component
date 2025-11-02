import React from 'react';
import type { CalendarEvent } from '../../hooks/useEventManager';


interface CalendarCellProps {
    date: Date;
    events: CalendarEvent[];
    onSelect: (date: Date) => void;
}

export const CalendarCell = ({ date, events, onSelect }: CalendarCellProps) => {
    //key for looking up events for this date
    const dateKey = date.toISOString().split("T")[0];

    //If multiple events just pick the first one's color for the background preview
    const bgColor = events.length ? events[0].color : undefined;



    return (
        <>
            <div
                onClick={() => onSelect(date)}
                className={` h-20 p-2 bg-blue-300 flex items-center 
                justify-end bg-whiter text-sm text-neutral-700
                 hover:bg-neutral-200 cursor-pointer bg-${bgColor}-400`}
                style={(date.getMonth() == new Date().getMonth() &&
                    date.getFullYear() == new Date().getFullYear()) ?
                    { color: "black" } : { color: "gray" }} >
                <div className='flex justify-end'>
                    {date.getDate()}
                </div>

            </div>
        </>
    )
};