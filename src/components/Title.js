/** @jsx jsx */
import { jsx } from '@emotion/core';

/**
 *
 * @param {{label: string;}} props
 * @example```jsx
 * <Logo label={'ZMeter'} />
 * ```
 */
export default function LogoTitle({ label }) {
  return (
    <div css={getLogoTitleCSS()}>
      <h5>{label}</h5>
    </div>
  )
}

export function TaskTitle({ label }) {
  return (
    <div css={getTaskTitleCSS()}>
      <h2>{label}</h2>
    </div>
  )
}

function getLogoTitleCSS() {
  return {
    color: '6f0765',
    textTransform: 'uppercase',
  };
}

function getTaskTitleCSS() {
  return {
    marginLeft: '40px',
    paddingTop: '20px',
    paddingBottom: '20px',
    h2: {
      fontWeight: 'normal',
      fontSize:'32px'
    }
  };
}
