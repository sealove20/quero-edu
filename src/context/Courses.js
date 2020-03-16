import React, { useState, useEffect, createContext, useContext } from 'react';

import { getCourses } from '../services/api';

const CoursesContext = createContext();

export function CoursesProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllCourses() {
      const courseData = await getCourses();
      setCourses(courseData);
      setLoading(false);
    }
    getAllCourses();
  }, []);

  return (
    <>
      {loading ? (
        <p>CARREGANDO</p>
      ) : (
        <CoursesContext.Provider value={{ courses, setCourses }}>
          {children}
        </CoursesContext.Provider>
      )}
    </>
  );
}

export function useCourses() {
  const context = useContext(CoursesContext);
  const { courses, setCourses } = context;
  return { courses, setCourses };
}