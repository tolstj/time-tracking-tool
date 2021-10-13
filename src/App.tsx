import React from 'react';
import { Row } from 'antd';

import { TaskInput } from './features/taskInput/TaskInput';
import './App.css';

function App() {
  return (
    <Row justify="center" gutter={16} style={{ marginTop: '50px' }}>
        <TaskInput />
    </Row>
  );
}

export default App;
