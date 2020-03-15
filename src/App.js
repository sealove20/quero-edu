import React, { useState } from 'react';

import './App.scss';

import Header from './components/Header';
import Nav from './components/Nav';
import BackButton from './components/BackButton'
import TabMenu from './components/TabMenu';
import Card from './components/Card'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <Header />
      <Nav />
      <main id="main-container">
        <BackButton />
        <h1 className="main-title">Bolsas favoritas</h1>
        <p className="main-text">Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis</p>
        <TabMenu />
        <Card openModal={toggleModal} />
      </main>
       <Modal  isModalOpen={isModalOpen} closeModal={toggleModal} />
      <Footer />
    </>
  );
}

export default App;
