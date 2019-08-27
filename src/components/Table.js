/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { ApplicationStateContext } from '../redux/ApplicationStateProvider';
import { setAllReadings, setActiveReadingIndex } from '../redux/reducer';
import Button from './Button';

export default function Table() {
  const { state: { readings = [], activeReadingIndex }, dispatch } = useContext(ApplicationStateContext);
  return (
    <div>
      <ul css={getBillListCSS()}>
        {
          readings.map((reading, index) => (
            <li key={`reading-${index}`} css={getBillItemCSS(index, activeReadingIndex)}>
              Name: {reading.name}, Bill Amount: {reading.amount}
              <Button
                onClick={() => {
                  dispatch(setActiveReadingIndex(index))
                }}
              >
                View
              </Button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

function getBillListCSS() {
  return {
    padding: 0
  };
}

function getBillItemCSS(index, activeReadingIndex) {
  return {
    fontWeight: activeReadingIndex === index ? 'bold' : 'normal',
    listStyle: 'none',
    padding: '0.5rem'
  };
}
