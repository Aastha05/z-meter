/** @jsx jsx */
import { jsx } from '@emotion/core'

export default function TableHead({ children }) {
  return (
    <thead css={getTableHeadCSS()}>
      {children}
    </thead>
  )
}

function getTableHeadCSS() {
  return {

  }
}
