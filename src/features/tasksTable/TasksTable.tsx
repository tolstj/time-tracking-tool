import React from 'react';
import { Table } from 'antd';

import { useAppSelector } from '../../app/hooks';
import { getTableColumnsFromWeekPeriod, getTasksTableDataFromTasks } from './utils/table';
import { selectSelectedWeekPeriodTasks } from './tasksTable.slice';

export function TasksTable(): JSX.Element {
  const selectedWeekPeriod = useAppSelector((state) => state.weekSwitcher);
  const tasks = useAppSelector(selectSelectedWeekPeriodTasks);

  return (
    <Table
      columns={getTableColumnsFromWeekPeriod(selectedWeekPeriod)}
      dataSource={getTasksTableDataFromTasks(tasks)}
      pagination={false}
    />
  );
}
