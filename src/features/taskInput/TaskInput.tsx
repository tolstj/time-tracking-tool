import React from 'react';
import { Col, Input, Button, message } from 'antd';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changed, clearErrorMessage } from './taskInput.slice';
import { addTask } from './actions';

export function TaskInput(): JSX.Element {
  const taskInput = useAppSelector((state) => state.taskInput.input);
  const taskInputError = useAppSelector((state) => state.taskInput.errorMessage);
  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changed(event.target.value));
  };

  if (taskInputError) {
    message.error(taskInputError);
    dispatch(clearErrorMessage());
  }

  return (
    <>
        <Col span={7}>
          <Input
            value={taskInput}
            onChange={onChange}
            placeholder="Название задачи"
          />
        </Col>

        <Col span={1} />

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
