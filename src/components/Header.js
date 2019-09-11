/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Header({ children }) {
  return (
    <div css={getHeaderCSS}>{children}</div>
  );
}

function getHeaderCSS() {
  return {
    height: '32px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '1px 1px 10px rgba(0,0,0,.05)'
  }
}

