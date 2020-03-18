import React, { useState } from 'react';

import './App.scss';

import { useCourses } from './context/Courses';

import BackButton from './components/BackButton';
import Card from './components/Card';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import ModalButton from './components/ModalButton';
import Nav from './components/Nav';
import TabMenu from './components/TabMenu';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { courses } = useCourses();
  const filter = courses.filter(course => course.enrollment_semester === "2020.1")

  function toggleModal() {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <Header />
      <Nav />
      <main id="main">
        <BackButton />
        <h1 className="main-title">Bolsas favoritas</h1>
        <p className="main-text">Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis</p>
        <TabMenu />
        <Card>
          <ModalButton openModal={toggleModal} />
        </Card>
        {filter.map(course => (
          <Card>
            <CourseCard item={course} />
          </Card>
        ))}
        <Modal isModalOpen={isModalOpen} closeModal={toggleModal} />
      </main>
      <Footer />
    </>
  );
}

export default App;
