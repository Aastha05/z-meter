/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import dashboardIcon from '../assets/images/square.svg'


const Ul = styled.ul`
  display: block;
  margin: 0,
  padding: 0,
`;

const Li = styled.li`
  list-style-type: none;
  border: 1px solid blue;
`;

const MenuItem = styled.div`
  background-color: red;
`

export default function LeftNav() {
  return (
    <div css={getLeftNavCSS}>
      <Ul>
        <Li>
          <MenuItem>
            <img src={dashboardIcon} alt={'dashboard'} width="20px" height="20px" />
            <h3>Dashboard</h3>
          </MenuItem>
        </Li>
      </Ul>
    </div>
  );
}


function getLeftNavCSS() {
  return {
    ul: {
      margin: 0,
      padding: 0,
      li: {
        listStyleType: 'none',
        border: '1px solid blue',

      }
    }
  }
}

function getImgCSS() {
  return {
    color: 'blue',
  }
}