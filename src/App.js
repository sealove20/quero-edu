import React, { useState } from 'react';

import './App.scss';

import { useCourses } from './context/Courses';

import Header from './components/Header';
import Nav from './components/Nav';
import BackButton from './components/BackButton';
import TabMenu from './components/TabMenu';
import Card from './components/Card';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ModalButton from './components/ModalButton';
import CourseCard from './components/CourseCard';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { courses, setCourses } = useCourses();
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
            <CourseCard course={course} />
          </Card>
        ))}
       <Modal  isModalOpen={isModalOpen} closeModal={toggleModal} />
      </main>
      <Footer />
    </>
  );
}

export default App;
