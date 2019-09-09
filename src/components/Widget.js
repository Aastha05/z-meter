/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Widget({children}) {
  return (
    <div css={getWidgetCSS()}>
      {children}
    </div>
  );
}

function getWidgetCSS() {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  };
}
