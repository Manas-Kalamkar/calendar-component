// export const getDaysInMonth = (date: Date): Date[] => {
//     const MonthIndex: number = date.getMonth()
//     const days: number = new Date(date.getFullYear(), MonthIndex + 1, 0).getDate();
//     const daysArray: Date[] = [];

//     // const month: string = (["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].filter(
//     //     (month, i) => (i == MonthIndex) ? month : "")).toString();

//     for (let i = 0; i < days; i++) {
//         // daysArray.push(month + " " + (i + 1) + " " + new Date(date.getFullYear(), MonthIndex, i + 1).getFullYear());
//         daysArray.push(new Date(date.getFullYear(), MonthIndex, i + 1));
//     }
//     return daysArray;
// }

// export const getCalendarGrid = (date: Date): Date[] => {
//     const calendarGrid: Date[] = [];
//     const thisMonth: number = date.getMonth();
//     const nextMonth: number = thisMonth + 1;

//     const firstDayOfMonth: number = (new Date(date.getFullYear(), thisMonth, 1).getDay());
//     const daysInThisMonth: Date[] = getDaysInMonth(date);
//     const getDaysInLastMonth: Date[] = getDaysInMonth(new Date(date.getFullYear(), thisMonth, 0));
//     const getDaysInNextMonth: Date[] = getDaysInMonth(new Date(date.getFullYear(), nextMonth, 1));

//     if (firstDayOfMonth > 0) {
//         for (let i = 0; i < firstDayOfMonth; i++) {
//             calendarGrid.push(getDaysInLastMonth[getDaysInLastMonth.length - (firstDayOfMonth - i)]);
//         }
//     }
//     for (let i = 0; i < daysInThisMonth.length; i++) {
//         calendarGrid.push(daysInThisMonth[i]);
//     }
//     let i = 0;
//     while (calendarGrid.length < 42) {
//         calendarGrid.push(getDaysInNextMonth[i]);
//         i++;
//     }
//     return calendarGrid;

// }

// export const isSameDay = (date1: Date, date2: Date): boolean => {
//     return date1.getFullYear() === date2.getFullYear() &&
//         date1.getMonth() === date2.getMonth() &&
//         date1.getDate() === date2.getDate();
// }

// export const daysBetween = (date1: Date, date2: Date): number => {
//     const oneDay = 24 * 60 * 60 * 1000;
//     const diff = date1.getTime() - date2.getTime();
//     return Math.floor(diff / oneDay);
// }

// date.utils.ts
/**
* Calculates the number of days between two dates
* @param start - Start date
* @param end - End date
* @returns Number of days (can be negative if end is before start)
*/
export const daysBetween = (start: Date, end: Date): number => {
    const msPerDay = 1000 * 60 * 60 * 24;
    const startMs = start.getTime();
    const endMs = end.getTime(); 
    return Math.floor((endMs - startMs) / msPerDay);
};
/**
* Checks if two dates fall on the same day (ignores time)
*/
export const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};
/**
* Gets all days in a month
*/
export const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysCount = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysCount }, (_, i) => new Date(year, month, i + 1));
};
/**
* Gets the calendar grid (42 cells for month view)
*/
export const getCalendarGrid = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - startDate.getDay());
    const grid: Date[] = [];
    for (let i = 0; i < 42; i++) {
        grid.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 1);
    }
    return grid;
};

export const toDateKey = (date: Date) =>
  date.toISOString().split("T")[0]; // "YYYY-MM-DD"
