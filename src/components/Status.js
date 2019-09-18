/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Status({ children }) {
  return (
    <div css={getStatusCSS}>
      <ul css={getUlCSS}>
        {children}
      </ul>
    </div>
  )
}

function getStatusCSS() {
  return {

  }
}

function getUlCSS() {
  return {
    margin: '0',
    padding: '0',
    li: {
      listStyleType: 'none',
    }
  };
}