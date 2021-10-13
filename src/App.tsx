import React from 'react';
import { Row } from 'antd';

import { TaskInput } from './features/taskInput/TaskInput';
import { TotalHours } from './features/totalHours/TotalHours';
import { WeekSwitcher } from './features/weekSwitcher/WeekSwitcher';
import { TasksTable } from './features/tasksTable/TasksTable';
import './App.css';

function App() {
  return (
    <>
    <Row justify="center" gutter={16} style={{ marginTop: '50px' }}>
      <TaskInput />
    </Row>
    <Row justify="center">
      <TotalHours />
      <WeekSwitcher />
    </Row>
    <Row justify="center">
      <TasksTable />
    </Row>
    </>
  );
}

export default App;
