/** @jsx jsx */
import { jsx } from '@emotion/core';

/**
 *
 * @param {{name: string; size: string;}} props
 * @example```jsx
 * <Icon name={'add'} size={'s'|'m'|'l'} />
 * ```
 */
export default function Icon({ name, size }) {
  return <img src={loadIcon(name)} css={getIconStyles(size)} />;
}

const sizes = {
  s: {
    width: '15px'
  },
  m: {
    width: '30px'
  },
  l: {
    width: '40px'
  }
}

/**
 *
 * @param {string} size
 */
function getIconStyles(size) {
  return {
    ...sizes[size]
  };
}

/**
 *
 * @param {string} name
 * @returns svg
 */
function loadIcon(name) {
  return require(`../assets/images/${name}.svg`);
}
