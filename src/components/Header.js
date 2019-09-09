/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Header({ children }) {
  return (
    <div css={getHeaderCSS}>{children}</div>
  );
}

function getHeaderCSS(){
  return {
    height: '40px',
    // borderBottom: '1px solid grey',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  }
}

