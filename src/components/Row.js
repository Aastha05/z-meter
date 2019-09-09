/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Row({children, margin}) {
  return (
    <div css={getHeaderWrapperCSS(margin)}>
      {children}
    </div>
  );
}

function getHeaderWrapperCSS(margin) {
  return {
    display: 'flex',
    flexDirection: 'row'
  };
}
