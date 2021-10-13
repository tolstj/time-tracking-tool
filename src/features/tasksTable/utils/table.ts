import { eachDayOfInterval, format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { WeekPeriod } from '../../weekSwitcher/utils/week';

interface TableColumn {
  title: string;
  dataIndex: string;
}

export function getTableColumnsFromWeekPeriod(weekPeriod: WeekPeriod): TableColumn[] {
  return [
    {
      title: 'Активные задачи',
      dataIndex: 'activeTasks',
    },
    ...getWeekdaysColumnsFromWeekPeriod(weekPeriod),
    {
      title: 'За период',
      dataIndex: 'periodTotal',
    },
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
  }).map((date) => ({
    title: format(date, 'EEEEEE dd.MM', { locale: ru }),
    dataIndex: format(date, 'EEEEEE'),
  }));
}
