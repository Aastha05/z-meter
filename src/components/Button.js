/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Button({ children, ...rest }) {
  return <button {...rest} css={getButtonCSS()}>{children}</button>;
}


function getButtonCSS() {
  return {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '0.5rem 1rem',
    borderWidth: 0
  }
}