/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function StatusItem( { isActive, label, status }) {
  return (
    <li>
      <div css={getStatusItemCSS(isActive, getStatusColorCss(isActive, status))}>
        <div css={getStatusTextCSS()}>
          <h5>{label}</h5>
        </div>
      </div>
    </li>
  );
}

StatusItem.status = {
  todo: 'toDo',
  complete: 'complete',
  inProgress: 'inProgress'
};

const colors = {
  inProgress: {
    borderLeftColor: 'f77754'
  },
  toDo: {
    borderLeftColor: '1089ff'
  },
  complete: {
    borderLeftColor: 'green'
  }
}

function getStatusItemCSS(isActive, statusStyle) {
  return {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    paddingLeft: '16px',
    paddingRight: '16px',
    backgroundColor: isActive ? '#fff' : 'transparent',
    marginLeft: isActive ? '13px' : '',
    '&:hover': {
      color: '#6f0765'
    },
    border: 'solid 2px transparent',
    borderLeftWidth: '3px',
    ...statusStyle
  }
}

function getStatusTextCSS() {
  return {
    marginLeft: '27px',
    paddingTop: '10px',
    paddingBottom: '10px',
  }
}

function getStatusColorCss(isActive, status) {
  // return colors[status] || {};
  if(isActive) {
    return colors[status]
  }
}