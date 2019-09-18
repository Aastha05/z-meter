/** @jsx jsx */
import { jsx } from '@emotion/core';

/**
 *
 * @param {{label: string;}} props
 * @example```jsx
 * <Logo label={'ZMeter'} />
 * ```
 */
export default function Logo({ label }) {
  return (
    <div css={getLogoTitleCSS()}>
      <h4>{label}</h4>
    </div>
  )
}

function getLogoTitleCSS() {
  return {
    color: '6f0765',
    textTransform: 'uppercase',
  };
}
