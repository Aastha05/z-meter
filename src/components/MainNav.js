/** @jsx jsx */
import { jsx } from '@emotion/core';
import Header from './Header';
import Menu from './Menu';
import MenuItem from './MenuItem';
import LogoTitle from './Title';

export default function MainNav() {
  return (
    <div css={getMainNavWrapperCSS}>
      <Header>
        <LogoTitle label="Z-Task" />
      </Header>
      <Menu>
        <MenuItem label='Today' />
        <MenuItem label='Tommorow' />
        <MenuItem label='This Week' />
        <MenuItem label='This Month' />
      </Menu>
    </div>
  );
}

function getMainNavWrapperCSS() {
  return {
    height: '100vh'
  };
}
