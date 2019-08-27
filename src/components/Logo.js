/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { ApplicationStateContext } from '../redux/ApplicationStateProvider';


export default function Logo() {
  const { state: { appTitle } } = useContext(ApplicationStateContext);
  return (
    <div css={getLogoCSS}>
      {appTitle}
    </div>
  );
}

function getLogoCSS() {
  return {
  color: '#216583',
  fontSize: '30px',
  
  };
}

