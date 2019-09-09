/** @jsx jsx */
import { jsx } from '@emotion/core';
import Header from './Header';
import LeftNav from './LeftNav';
import Widget from './Widget';

export default function MainNav() {
  return (
    <div>
      <Header>
        <div css={getLogoTitleCSS}>
          <span>z</span>meter
        </div>
      </Header>
      <LeftNav />
    </div>
  );
}

// function getMainNavWrapperCSS() {
//   return {
//     // border:'1px solid grey',
//     height: '100vh',
//     backgroundColor: '#fff'
//   }
// }

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

// function Widget({ chidren }) {
//   return (
//     <div css={getHeaderWrapperCSS()}>
//       {chidren}
//     </div>
//   );
// }