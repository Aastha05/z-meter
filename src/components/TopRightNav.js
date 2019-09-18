/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function TopRightNav({ userImg, icon, userName }) {
  return (
    <div css={getTopNavCSS}>
      <div css={getUserImageCSS}>
        {userImg}
      </div>
      <div css={getUserNameCSS}>
        <h4>{userName}</h4>
      </div>
      <div css={getNotifyCSS}>
        {icon}
      </div>
    </div>
  );
}

function getTopNavCSS() {
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: '1 auto',
  };
}

function getUserImageCSS() {
  return {
    border: 'transparent solid 1px',
    marginRight: '0.5rem'
  }
}

function getUserNameCSS() {
  return {
    color: 'grey',
    marginRight: '2rem'

  }
}

function getNotifyCSS() {
  return {
    marginRight: 'rem'
  }
}