import { eachDayOfInterval, format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Task } from '../../../interfaces/Task';
import { WeekPeriod } from '../../../interfaces/WeekPeriod';

interface TableColumn {
  title: string;
  dataIndex: string;
}

export function getTableColumnsFromWeekPeriod(weekPeriod: WeekPeriod): TableColumn[] {
  return [
    {
      title: 'Активные задачи',
      dataIndex: 'name',
    },
    ...getWeekdaysColumnsFromWeekPeriod(weekPeriod),
    {
      title: 'Всего',
      dataIndex: 'total',
    }
  ];
}

function getWeekdaysColumnsFromWeekPeriod({ startOfWeek, endOfWeek }: WeekPeriod): TableColumn[] {
  return eachDayOfInterval({
    start: startOfWeek,
    end: endOfWeek,
  })
  .map((date) => ({
    title: format(date, 'EEEEEE dd.MM', { locale: ru }),
    dataIndex: format(date, 'EEEE'),
  }));
}

interface TasksTableData {
  name: string;
  Monday: number;
  Tuesday: number;
  Wednesday: number;
  Thursday: number;
  Friday: number;
  Saturday: number;
  Sunday: number;
  total: number;
  key: number;
}

export function getTasksTableDataFromTasks(tasks: Task[]): TasksTableData[] {
  return tasks.map(({ name, hours }, index) => ({
    name,
    Monday: hours.Monday,
    Tuesday: hours.Tuesday,
    Wednesday: hours.Wednesday,
    Thursday: hours.Thursday,
    Friday: hours.Friday,
    Saturday: hours.Saturday,
    Sunday: hours.Sunday,
    total: Object.values(hours).reduce((sum, hours) => sum + hours, 0),
    key: index,
  }))
}
