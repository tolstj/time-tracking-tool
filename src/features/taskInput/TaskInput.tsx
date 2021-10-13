import React from 'react';
import { Col, Input, Button } from 'antd';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changed, selectTaskInput } from './taskInput.slice';
import { addTask } from './actions';

export function TaskInput(): JSX.Element {
  const taskInput = useAppSelector(selectTaskInput);
  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changed(event.target.value));
  };

  return (
    <>
      <Col span={8}>
        <Input
          value={taskInput}
          onChange={onChange}
          placeholder="Название задачи"
        />
      </Col>

      <Col>
        <Button
          type="primary"
          onClick={() => dispatch(addTask())}
          disabled={!taskInput.trim()}
        >
          Добавить задачу
        </Button>
      </Col>
    </>
  );
}
