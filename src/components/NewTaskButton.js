/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function NewTaskButton({label, icon}) {
  return (
    <div css={getButtonCSS}>
      <div css={getButtonNameCSS}>
        <h4>{label}</h4>
      </div>
      <div css={getButtonIconCSS}>
        {icon}
      </div>
    </div>
  )
}

function getButtonCSS(){
  return {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    flex: '1'
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