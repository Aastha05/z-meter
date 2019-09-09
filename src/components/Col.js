/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Col({ children, width }) {
  return (
    <div css={getColWrapperCSS(width)}>
      {children}
    </div>
  );
}

function getColWrapperCSS(width) {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: `${width ? width * 100 : 'auto'}%`,
    flexGrow: 1,
  };
}
