/** @jsx jsx */
import { jsx } from '@emotion/core';
import TableHead from './TableHead';
import TableBody from './TableBody';

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
    display: 'flex'
  }

}
function getTableStyleCSS() {
  return {
    width: '100%',
    borderCollapse: 'collapse'
  }
}

