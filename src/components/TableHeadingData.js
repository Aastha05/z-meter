/** @jsx jsx */
import { jsx } from '@emotion/core'

export default function TableHeadingData({ children }) {
  return <th css={getTableHeadingDataCSS()}>{children}</th>;
}

function getTableHeadingDataCSS() {
  return {
    border: '1px solid #dddd',
    padding: '8px',
    textAlign: 'left'
  }
}