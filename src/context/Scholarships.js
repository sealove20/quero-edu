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

  function filterByPresential(state, filterState) {
    if(filterState) {
      return state;
    }
    return state.filter(scholarship => scholarship.course.kind !== "Presencial");
  }

  function filterByRemote(state, filterState) {
    if(filterState) {
      return state;
    }
    return state.filter(scholarship => scholarship.course.kind !== "EaD");
  }

  function filterByPrice(state, filterState) {
    return state.filter(scholarship => scholarship.price_with_discount <= filterState);
  }
  
  function sortUniversityName(ScholarshipA, ScholarshipB) {
    if(ScholarshipA.university.name < ScholarshipB.university.name) {
      return -1;
    } else if(ScholarshipA.university.name > ScholarshipB.university.name) {
      return 1;
    } else {
      return 0;
    }
  }

  function sortCourseName(ScholarshipA, ScholarshipB) {
    if(ScholarshipA.course.name < ScholarshipB.course.name) {
      return -1;
    } else if(ScholarshipA.course.name > ScholarshipB.course.name) {
      return 1;
    } else {
      return 0;
    }
  }

  function sortPrice(ScholarshipA, ScholarshipB) {
    if(ScholarshipA.price_with_discount < ScholarshipB.price_with_discount) {
      return -1;
    } else if(ScholarshipA.price_with_discount > ScholarshipB.price_with_discount) {
      return 1;
    } else {
      return 0;
    }
  }

  return (
    <>
      {loading ? (
        <p>CARREGANDO</p>
      ) : (
        <ScholarshipsContext.Provider value={{ 
          scholarships, 
          setScholarships, 
          filterByCity, 
          filterByCourse, 
          filterByPresential ,
          filterByRemote,
          filterByPrice,
          sortUniversityName,
          sortCourseName,
          sortPrice
        }}>
          {children}
        </ScholarshipsContext.Provider>
      )}
    </>
  );
}

export function useScholarships() {
  const context = useContext(ScholarshipsContext);
  const { 
    scholarships, 
    setScholarships, 
    filterByCity,
    filterByCourse, 
    filterByPresential, 
    filterByRemote, 
    filterByPrice,
    sortUniversityName,
    sortCourseName,
    sortPrice
  } = context;
  return { 
    scholarships, 
    setScholarships, 
    filterByCity, 
    filterByCourse, 
    filterByPresential, 
    filterByRemote, 
    filterByPrice,
    sortUniversityName,
    sortCourseName,
    sortPrice 
  };
}