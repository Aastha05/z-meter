/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import dashboardIcon from '../assets/images/square.svg';
import MenuItem from './MenuItem';

export default function Menu() {
  return (
    <div css={getLeftNavCSS}>
        <ul css={getUlCSS}>
            <li>
                <MenuItem icon='square' label='Dashboard'/>
                <MenuItem icon='add' label='Home'/>
            </li>
        </ul>
    </div>
  );
}


function getLeftNavCSS() {
  return {

  }
}

function getUlCSS() {
  return {
    margin: '0',
    padding: '0',
    li: {
      listStyleType: 'none',
    }
  };
}