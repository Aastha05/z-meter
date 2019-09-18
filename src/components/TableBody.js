/** @jsx jsx */
import { jsx } from '@emotion/core'

export default function TableBody( {children}) {
  return (
    <tbody css={getTableBodyCSS()}>
      {children}
    </tbody>
  )
}

function getTableBodyCSS() {
  return {

  }
}
