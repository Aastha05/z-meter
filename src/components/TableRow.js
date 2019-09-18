/** @jsx jsx */
import { jsx } from '@emotion/core'
import TableData from './TableData'

export default function TableRow({ children }) {
  return <tr>{children}</tr>;
}

function getTableDataCSS() {
  return {
    border: '1px solid #dddd',
    padding: '8px',
    textAlign: 'left'
  }
}