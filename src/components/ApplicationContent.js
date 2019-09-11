/** @jsx jsx */
import { jsx } from '@emotion/core';
import Header from './Header';
import Icon from './Icon';
import userIcon from '../assets/images/user.svg'
import notifyIcon from '../assets/images/bell.svg'

export default function ApplicationContent() {
  return (
    <div css={getAppContentWrapperCSS}>
      <Header>
        <div css={getTopNavCSS}>
          <div css={getUserImageCSS}>
            <img src={userIcon} width="20px" hieght="20px" alt={'user'}></img>
          </div>
          <div css={getUserNameCSS}>
            Hey, Simple
          </div>
          <div css={getNotifyCSS}>
            <Icon name={'bell'} size={'s'}/>
          </div>
        </div>
      </Header>
    </div>
  );
}

function getAppContentWrapperCSS() {
  return {
    height: '100vh'
  }
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

function getUserImageCSS(){
  return {
    border: 'transparent solid 1px',
    marginRight: '0.5rem'
  }
}

function getUserNameCSS(){
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