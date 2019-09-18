/** @jsx jsx */
import { jsx } from '@emotion/core';
import Header from './Header';
import Menu from './Menu';
import Logo from './Logo';
import MenuItem from './MenuItem';
import Icon from './Icon';

export default function MainNav() {
  return (
    <div css={getMainNavWrapperCSS}>
      <Header>
        <Logo label="Z-Task" />
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
