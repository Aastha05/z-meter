/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Row({children}) {
  return (
    <div css={getHeaderWrapperCSS()}>
      {children}
    </div>
  );
}

function getHeaderWrapperCSS() {
  return {
    display: 'flex',
    flexDirection: 'row',
    padding: '0.75rem 0.9375rem',
    flex: '1',
    border: '1px solid red',
    width: '100%',
    marginLeft: '-0.8rem',
    marginRight: '-0.8rem'
  };
}
