/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function MenuItem({ isActive, label }) {
  return (
    <li>
      <div css={getMenuItemCSS(isActive)}>
        <div css={getMenuTextCSS()}>
          <h5>{label}</h5>
        </div>
      </div>
    </li>
  );
}

function getMenuItemCSS(isActive) {
  return {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    paddingLeft: '16px',
    paddingRight: '16px',
    backgroundColor: isActive ? 'rgba(0,0,0,.05)' : 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,.05)',
    }
  }
}

function getMenuTextCSS() {
  return {
  }
}