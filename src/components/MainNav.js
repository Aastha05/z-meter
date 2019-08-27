/** @jsx jsx */
import { jsx } from '@emotion/core';
import Header from './Header';


export default function MainNav() {
  return (
    <div>
      <Header>
        <em>COMMUNITYMANAGER</em>
      </Header>
      <AppLeftNav />
    </div>
  );
}

function AppLeftNav() {
  return (
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
      <li>one</li>
    </ul>
  )
}

// function getHeaderWrapperCSS() {
//   return {
//     display: 'flex',
//     flexDirection: 'row',
//     padding: '1rem',
//     flex: '1',
//   };
// }

// function Widget({ chidren }) {
//   return (
//     <div css={getHeaderWrapperCSS()}>
//       {chidren}
//     </div>
//   );
// }