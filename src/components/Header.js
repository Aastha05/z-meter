/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Header({ children }) {
  return (
    <div css={{ height: '50px' }}>{children}</div>
  );
}

