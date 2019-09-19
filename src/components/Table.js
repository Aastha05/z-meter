/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Table({ children }) {
  return (
    <div css={getTableWrapperCSS()}>
      <table css={getTableStyleCSS()}>
        {children}
      </table>
    </div>
  )
}


function getTableWrapperCSS() {
  return {
    display: 'flex',
    marginTop: '100',
    paddingRight: '25px',
    paddingLeft: '25px',
  }

}
function getTableStyleCSS() {
  return {
    width: '100%',
    borderCollapse: 'collapse'
  }
}

