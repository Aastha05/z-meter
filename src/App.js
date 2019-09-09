import React from 'react';
import { render } from 'react-dom';
import ApplicationStateProvider from './redux/ApplicationStateProvider';
import ApplicationLayout from './components/ApplicationLayout';


function App({ }) {
  return (
    <ApplicationStateProvider>
      <ApplicationLayout />
    </ApplicationStateProvider>
  );
}


render(<App />, document.getElementById('z-root'));
