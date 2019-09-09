/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Icon({ name, size }) {
  return <img src={loadIcon(name)} css={getIconStyles(size)}/>;
}

const sizes = {
  s: {
    width: '20px'
  },
  m: {
    width: '30px'
  },
  l: {
    width: '40px'
  }
}

function getIconStyles(size) { 
  return {
    ...sizes[size]
  };
}

function loadIcon(name) {
  return require(`../assets/images/${name}.svg`);
}
