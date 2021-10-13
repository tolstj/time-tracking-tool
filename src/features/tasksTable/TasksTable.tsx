import React from 'react';
import { Table } from 'antd';

import { useAppSelector } from '../../app/hooks';
import { selectSelectedWeekPeriod } from '../weekSwitcher/weekSwitcher.slice';
import { getTableColumnsFromWeekPeriod } from './utils/table';

export function TasksTable(): JSX.Element {
  const selectedWeekPeriod = useAppSelector(selectSelectedWeekPeriod);

  return (
    <Table
      columns={getTableColumnsFromWeekPeriod(selectedWeekPeriod)}
    />
  );
}
