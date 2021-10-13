import React from 'react';
import { Row } from 'antd';

import { TaskInput } from './features/taskInput/TaskInput';
import { TotalHours } from './features/totalHours/TotalHours';
import { WeekSwitcher } from './features/weekSwitcher/WeekSwitcher';
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
    </>
  );
}

export default App;
