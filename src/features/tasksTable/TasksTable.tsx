import React from 'react';
import { Table } from 'antd';

import { useAppSelector } from '../../app/hooks';
import { selectSelectedWeekPeriod } from '../weekSwitcher/weekSwitcher.slice';
import { getTableColumnsFromWeekPeriod, getTasksTableDataFromTasks } from './utils/table';
import { selectSelectedWeekPeriodTasks } from './tasksTable.slice';

export function TasksTable(): JSX.Element {
  const selectedWeekPeriod = useAppSelector(selectSelectedWeekPeriod);
  const tasks = useAppSelector(selectSelectedWeekPeriodTasks);

  return (
    <Table
      columns={getTableColumnsFromWeekPeriod(selectedWeekPeriod)}
      dataSource={getTasksTableDataFromTasks(tasks)}
    />
  );
}
