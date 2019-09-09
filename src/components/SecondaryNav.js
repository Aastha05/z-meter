/** @jsx jsx */
import { jsx } from '@emotion/core';
import Header from './Header';
import addIcon from '../assets/images/add.svg';

export default function SecondaryNav() {
  return (
    <div css={getSecondNavWrapperCSS}>
      <Header>
        <div css={getButtonCSS}>
          <div css={getButtonNameCSS}>
            New Meter
          </div>
          <div css={getButtonIconCSS}>
            <img src={addIcon} alt={'add'} width="15px" height="15px"></img>
          </div>
        </div>
      </Header>
    </div>
  );
}


function getSecondNavWrapperCSS() {
  return {
    height: '100vh',
    backgroundColor:'f8f1f1',
    Header: {
      borderBottom: '1px solid red'
    }
  }
}

function getButtonCSS(){
  return {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    flex: '1',
    // border: '1px solid red'
  }
}

function getButtonNameCSS(){
  return {
    color: 'grey',
    fontStyle: 'bold',
    textTransform: 'uppercase'
  }
}

function getButtonIconCSS(){
  return {
    color: 'red'
  }
}