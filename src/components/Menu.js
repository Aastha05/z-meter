/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Menu({ children }) {
  return (
    <div css={getLeftNavCSS}>
      <ul css={getUlCSS}>
        {children}
      </ul>
    </div>
  );
}


function getLeftNavCSS() {
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