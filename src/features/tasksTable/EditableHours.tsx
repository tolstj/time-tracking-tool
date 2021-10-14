import React, { useState } from 'react';
import { Input } from 'antd';
import { useAppDispatch } from '../../app/hooks';
import { WeekPeriod } from '../../interfaces/WeekPeriod';
import { updateTaskHours } from './actions';

interface Props {
  name: string;
  weekPeriod: WeekPeriod;
  hours: number;
  weekday: string;
}

export function EditableHours({ name, weekPeriod, hours, weekday }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [changingHours, setChangingHours] = useState(hours);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChangingHours(Number(event.target.value));
  };

  const saveHours = () => {
    dispatch(updateTaskHours({ name, weekPeriod, weekday, hours: changingHours }));
  };

  return (
    <Input
      size="small"
      value={changingHours}
      onChange={onChange}
      onBlur={saveHours}
      style={{ width: '30px', padding: '5px', textAlign: 'center' }}
    />
  );
}
