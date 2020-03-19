import React, { useState, useEffect, createContext, useContext } from 'react';

import { getScholarships } from '../services/api';

const ScholarshipsContext = createContext();

export function ScholarshipsProvider({ children }) {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllScholarship() {
      const scholarshipsData = await getScholarships();
      setScholarships(scholarshipsData);
      setLoading(false);
    }
    getAllScholarship();
  }, []);

  function filterByCity(state, filterState) {
    if(filterState === 'all') return state;
    return state.filter(scholarship => scholarship.campus.city === filterState);
  }

  function filterByCourse(state, filterState) {
    if(filterState === 'all') return state;
    return state.filter(scholarship => scholarship.course.name === filterState);
  }

  return (
    <>
      {loading ? (
        <p>CARREGANDO</p>
      ) : (
        <ScholarshipsContext.Provider value={{ scholarships, setScholarships, filterByCity, filterByCourse }}>
          {children}
        </ScholarshipsContext.Provider>
      )}
    </>
  );
}

export function useScholarships() {
  const context = useContext(ScholarshipsContext);
  const { scholarships, setScholarships, filterByCity,filterByCourse } = context;
  return { scholarships, setScholarships, filterByCity, filterByCourse };
}