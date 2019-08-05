import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import Readings from './pages/Readings';

const Page = lazy(() => import('./pages/Readings'));

function App({ }) {
  return (
    <div>
      <h1>Title</h1>
      <Suspense fallback="Loading">
        <Page />
      </Suspense>
    </div>
  );
}

render(<App />, document.getElementById('z-root'));
