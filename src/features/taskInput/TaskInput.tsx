import React from 'react';
import { Col, Input, Button } from 'antd';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changed, selectTaskInput } from './taskInput.slice';

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
          placeholder="Мой проект / моя задача, номер тикета или URL тикета 1.5h"
        />
      </Col>
      <Col>
        <Button type="primary">Добавить задачу</Button>
      </Col>
    </>
  );
}
