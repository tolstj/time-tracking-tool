import { startOfWeek, endOfWeek, addWeeks, subWeeks, format } from 'date-fns';
import { WeekPeriod } from '../../../interfaces/WeekPeriod';

const Monday = 1;

export function getWeekPeriodFromDate(date: Date): WeekPeriod {
  return {
    startOfWeek: startOfWeek(date, { weekStartsOn: Monday }),
    endOfWeek: endOfWeek(date, { weekStartsOn: Monday }),
  };
}

export function getCurrentWeekPeriod(): WeekPeriod {
  return getWeekPeriodFromDate(new Date());
}

export function nextWeekPeriod({ startOfWeek }: WeekPeriod): WeekPeriod {
  const nextStartOfWeek = addWeeks(startOfWeek, 1);
  return getWeekPeriodFromDate(nextStartOfWeek);
}

export function prevWeekPeriod({ startOfWeek }: WeekPeriod): WeekPeriod { 
  const prevStartOfWeek = subWeeks(startOfWeek, 1);
  return getWeekPeriodFromDate(prevStartOfWeek);
}

export function getViewOfWeekPeriod({ startOfWeek, endOfWeek }: WeekPeriod): string {
  const startOfWeekView = format(startOfWeek, 'dd.MM.yyyy');
  const endOfWeekView = format(endOfWeek, 'dd.MM.yyyy');

  return `${startOfWeekView} - ${endOfWeekView}`;
}
