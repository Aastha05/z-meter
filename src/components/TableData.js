/** @jsx jsx */
import { jsx } from '@emotion/core'

export default function TableData({ children }) {
  return <td css={getTableDataCSS()}>{children}</td>;
}

function getTableDataCSS() {
  return {
    // border: '1px solid #dddd',
    padding: '20px 15px',
    textAlign: 'left',
    fontSize: '14px'
  }
}