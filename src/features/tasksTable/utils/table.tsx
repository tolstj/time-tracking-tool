import { eachDayOfInterval, format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Task } from '../../../interfaces/Task';
import { WeekPeriod } from '../../../interfaces/WeekPeriod';
import { EditableHours } from '../EditableHours';

interface TableColumn {
  title: string;
  dataIndex: string;
  render?: (taskUniqueInfo: TaskUniqueInfoWithWeekdayHours) => JSX.Element;
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
    render: ({ name, weekPeriod, hours }: TaskUniqueInfoWithWeekdayHours) => (
      <EditableHours
        name={name}
        weekPeriod={weekPeriod}
        hours={hours}
        weekday={format(date, 'EEEE')}
      />
    ),
  })); 
}

interface TaskUniqueInfoWithWeekdayHours {
  name: string;
  weekPeriod: WeekPeriod;
  hours: number;
}

interface TasksTableData {
  name: string;
  Monday: TaskUniqueInfoWithWeekdayHours;
  Tuesday: TaskUniqueInfoWithWeekdayHours;
  Wednesday: TaskUniqueInfoWithWeekdayHours;
  Thursday: TaskUniqueInfoWithWeekdayHours;
  Friday: TaskUniqueInfoWithWeekdayHours;
  Saturday: TaskUniqueInfoWithWeekdayHours;
  Sunday: TaskUniqueInfoWithWeekdayHours;
  total: number;
  key: number;
}

export function getTasksTableDataFromTasks(tasks: Task[]): TasksTableData[] {
  return tasks.map(({ name, weekPeriod, hours }, index) => {
    const taskUniqueInfo: TaskUniqueInfoWithWeekdayHours = {
      name,
      weekPeriod,
      hours: 0,
    };

    return {
      name,
      Monday: {
        ...taskUniqueInfo,
        hours: hours.Monday,
      },
      Tuesday: {
        ...taskUniqueInfo,
        hours: hours.Tuesday,
      },
      Wednesday: {
        ...taskUniqueInfo,
        hours: hours.Wednesday
      },
      Thursday: {
        ...taskUniqueInfo,
        hours: hours.Thursday,
      },
      Friday: {
        ...taskUniqueInfo,
        hours: hours.Friday,
      },
      Saturday: {
        ...taskUniqueInfo,
        hours: hours.Saturday,
      },
      Sunday: {
        ...taskUniqueInfo,
        hours: hours.Sunday,
      },
      total: Object.values(hours).reduce((sum, hours) => sum + hours, 0),
      key: index,
    }
  });
}
