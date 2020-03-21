import React, { useState, useEffect } from 'react';

import './App.scss';

import { useFavoritesScholarships } from './context/FavoritesScholarships';

import BackButton from './components/BackButton';
import BreadCrumb from './components/BreadCrumb';
import Card from './components/Card';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import ModalButton from './components/ModalButton';
import Nav from './components/Nav';
import TabMenu from './components/TabMenu';

function App() {
  const { favoritesScholarships, filterBySemester } = useFavoritesScholarships();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredScholarships, setFilteredScholarships] = useState(favoritesScholarships);
  const [semester, setSemester] = useState('all');

  useEffect(() => {
    const result = filterBySemester(favoritesScholarships, semester);
    setFilteredScholarships(result);
  }, [semester, favoritesScholarships]);

  function toggleModal() {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <Header />
      <Nav />
      <main id="main">
        <BackButton />
        <BreadCrumb />
        <h1 className="main-title">Bolsas favoritas</h1>
        <p className="main-text">Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis</p>
        <TabMenu setSemester={setSemester} semester={semester}/>
        <div className='card-container'>
          <Card>
            <ModalButton openModal={toggleModal} />
          </Card>
          {filteredScholarships.map((course) => (
            <Card key={`${course.course.name}${course.university.name}CARD`}>
              <CourseCard key={`${course.course.name}${course.university.name}`} item={course} />
            </Card>
          ))}
        </div>
        <Modal isModalOpen={isModalOpen} closeModal={toggleModal} />
      </main>
      <Footer />
    </>
  );
}

export default App;
