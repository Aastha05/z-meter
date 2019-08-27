/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Widget({chidren}) {
  return (
    <div css={getWidgetCSS()}>
      {chidren}
    </div>
  );
}

function getWidgetCSS() {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  };
}
