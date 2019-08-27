import React from 'react';
import { useApplicationState } from '../redux/ApplicationStateProvider';

export default function ViewReading() {
  const { state: { readings, activeReadingIndex } } = useApplicationState();
  const { name, amount } = readings[activeReadingIndex];
  return (
    <div>
      Name: {name} <br />
      Amount: {amount}
    </div>
  )
}