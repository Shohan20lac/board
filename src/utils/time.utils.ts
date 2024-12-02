export const getDaysInMonth = (year: number, month: number): number[] => 
    Array.from (
        { length: new Date(year, month, 0).getDate() }, 
        (_, i) => i + 1
    )