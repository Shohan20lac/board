import { TaskBoardState } from "../model/task.board";
import { getDaysInMonth } from "./time.utils";

export const initializeTaskBoardState = (currentYear: number): TaskBoardState =>  ({
    selectedYear: currentYear,
    selectedMonth: new Date().getMonth() + 1,
    selectedDay: new Date().getDate(),
    selectedHourRange: null,
    years:
        Array.from ({ length: 3 }, (_, i) => currentYear + i)
        .reduce (
            (years, year) => ({
                ...years,
                [year]: {
                    months: 
                        Array.from ({ length: 12 }, (_, i) => i + 1)
                        .reduce(
                            (months, month) => ({
                                ...months,
                                [month]: {
                                    days: 
                                        getDaysInMonth(year, month)
                                        .reduce(
                                            (days, date) => ({
                                                ...days,
                                                [date]: {
                                                    date,
                                                    dayOfWeek: new Date(year, month - 1, date).toLocaleDateString('en-US', { weekday: 'short' }),
                                                    taskAllocations: new Map()
                                                }
                                            }),
                                            {}
                                        )
                                }
                            }),
                            {}
                        )
                }
            }),
            {}
        )
})

export const getInitialTaskBoardState = (): TaskBoardState => {
    const savedState = localStorage.getItem('taskBoardState');
    if (savedState)
        return JSON.parse(savedState) as TaskBoardState
    else
        return (
            initializeTaskBoardState (new Date().getFullYear())
        )
}
