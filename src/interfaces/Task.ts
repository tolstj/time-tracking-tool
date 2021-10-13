import { WeekPeriod } from './WeekPeriod';

export interface Task {
  name: string;
  weekPeriod: WeekPeriod;
  hours: WeekdaysHours;
}

interface WeekdaysHours {
  Monday: number;
  Tuesday: number;
  Wednesday: number;
  Thursday: number;
  Friday: number;
  Saturday: number;
  Sunday: number;
}
