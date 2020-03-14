import React from 'react';

import './App.scss';

import Header from './components/Header';
import Nav from './components/Nav';
import BackButton from './components/BackButton'
import TabMenu from './components/TabMenu';
import Card from './components/Card'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <div className="main-container">
        <BackButton />
        <h1 className="main-title">Bolsas favoritas</h1>
        <p className="main-text">Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis</p>
      <TabMenu />
      <Card />
      
      </div>
    </>
  );
}

export default App;
