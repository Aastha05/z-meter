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
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem',
    width: `${width ? width * 100 : 'auto'}%`,
    flexGrow: 1,
    border: '2px solid blue',
  };
}
