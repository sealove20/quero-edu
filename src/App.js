import React from 'react';

import './App.scss';

import Header from './components/Header';
import Nav from './components/Nav';
import BackButton from './components/BackButton'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <BackButton />
    </>
  );
}

export default App;
