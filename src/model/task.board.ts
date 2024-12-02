export interface TaskBoardState {years:  {[key: number]: YearState  }}
export interface YearState      {months: {[key: number]: MonthState }}
export interface MonthState     {days:   {[key: number]: Day        }}

export interface Day {
    date: number
    dayOfWeek: string,
    taskAllocations: Map <HourRange, TaskAllocation>
}

type HourRange = number[]

export interface TaskAllocation {
    taskId:       string
    hourRange:    HourRange
    description:  string
    remarks:      string
    linkedItems?: any
}