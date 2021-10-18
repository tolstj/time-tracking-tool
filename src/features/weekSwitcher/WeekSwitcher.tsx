import React from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getViewOfWeekPeriod } from './utils/week';
import { selectIsSelectedWeekPeriodCurrent, setCurrent, setNext, setPrev } from './weekSwitcher.slice';

export function WeekSwitcher(): JSX.Element {
  const selectedWeekPeriod = useAppSelector((state) => state.weekSwitcher);
  const isSelectedWeekPeriodCurrent = useAppSelector(selectIsSelectedWeekPeriodCurrent);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Button
        type="text"
        disabled={isSelectedWeekPeriodCurrent}
        onClick={() => dispatch(setCurrent())}
      >
        Текущая неделя
      </Button>

      <Button
        shape="circle"
        size="small"
        icon={<LeftOutlined />}
        onClick={() => dispatch(setPrev())}
      />
  
      <span style={{ margin: '0 10px'}}>
        {getViewOfWeekPeriod(selectedWeekPeriod)}
      </span>
  
      <Button
        shape="circle"
        size="small"
        icon={<RightOutlined />}
        onClick={() => dispatch(setNext())}
      />
    </div>
  );
}
