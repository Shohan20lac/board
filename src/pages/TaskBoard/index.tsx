import React, { useState, useEffect } from 'react';
// import DaySelector from '../components/DaySelector';
// import TaskAllocations from '../components/TaskAllocations';
// import TaskAllocationEmpty from '../components/TaskAllocationEmpty';
import { TaskBoardState } from '../../model/task.board';
import Box from '@mui/material/Box'
import { getInitialTaskBoardState} from '../../utils/task.board.utils';



const TaskBoard: React.FC = () => {
    const [taskBoardState, setTaskBoardState] = useState<TaskBoardState>(getInitialTaskBoardState())

    const setSelectedYear = (year: number) => setTaskBoardState ({...taskBoardState, selectedYear:  year })
    const setSelectedMonth = (month: number) => setTaskBoardState ({...taskBoardState, selectedMonth: month })
    const setSelectedDay = (day: number) => setTaskBoardState ({...taskBoardState, selectedDay:   day })

    // Save taskBoardState to localStorage every 10 seconds
    // useEffect(() => {
    //     const saveToLocalStorage = () => {
    //         localStorage.setItem('taskBoardState', JSON.stringify(taskBoardState));
    //     };
    //     const interval = setInterval(saveToLocalStorage, 10000);
    //     return () => clearInterval(interval); // Cleanup
    // }, [taskBoardState]);

    return (
        <Box className="task-board">
            {"placeholder text"}
            <YearSelector
                selectedYear={taskBoardState.selectedYear}
                setSelectedYear={setSelectedYear}
            />

            <MonthSelector
                selectedMonth={taskBoardState.selectedMonth}
                setSelectedMonth={setSelectedMonth}
            />

            <DaySelector
                selectedDay={taskBoardState.selectedDay}
                setSelectedDay={setSelectedDay}
            />

            <TaskAllocations
                taskBoardState={taskBoardState}
                setTaskBoardState={setTaskBoardState}
            />
        </Box>
    )
}

export default TaskBoard;
