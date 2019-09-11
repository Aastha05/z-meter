/** @jsx jsx */
import { jsx } from '@emotion/core';
import Icon from './Icon';

export default function MenuItem({ isActive, label, icon }) {
  return (
    <div>
      <div css={getMenuItemCSS(isActive)}>
        <div css={getMenuIconCSS()}>
          <Icon name={icon} size="s" />
        </div>
        <div css={getMenuTextCSS()}>
          <h4>{label}</h4>
        </div>
      </div>
    </div>
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
    // justifyContent: 'space-evenly'
  }
}

function getMenuIconCSS() {
  return {
  }
}

function getMenuTextCSS() {
  return {
    marginLeft: '20px'
  }
}