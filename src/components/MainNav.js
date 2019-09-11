/** @jsx jsx */
import { jsx } from '@emotion/core';
import Header from './Header';
import Menu from './Menu';

export default function MainNav() {
  return (
    <div css={getMainNavWrapperCSS}>
      <Header>
        <div css={getLogoTitleCSS}>
          <span>z</span>meter
        </div>
      </Header>
      <Menu />
    </div>
  );
}

function getLogoTitleCSS() {
  return {
    color: '6f0765',
    textTransform: 'uppercase',
    fontSize: '20px',
    span: {
      fontSize: '16px'
    }
  };
}

function getMainNavWrapperCSS() {
  return {
    height: '100vh'
  };
}
