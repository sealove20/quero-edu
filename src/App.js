import React from 'react';

import './App.scss';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div data-test="div-component">
        <h1>sasa</h1>
      </div>
    </>
  );
}

export default App;
