import React, { createContext, useContext, useState, useEffect } from 'react';

import { compareObjects } from '../utils/compareObjects';

const FavoriteScholarshipsContext = createContext();

export function FavoritesScholarshipsProvider({ children }) {
  const [favoritesScholarships, setFavoritesScholarships] = useState([]);
  
  useEffect(() => {
    if(localStorage.getItem('favorite-scholarships') === null) {
      localStorage.setItem('favorite-scholarships', '');
    } else {
      setFavoritesScholarships(JSON.parse(localStorage.getItem('favorite-scholarships')))
    }
  }, []);

  function setFavoritesStorage(scholarships) {
    localStorage.setItem('favorite-scholarships', JSON.stringify(scholarships));
  }

  function getFavoritesStorage() {
    return JSON.parse(localStorage.getItem('favorite-scholarships'));
  }

  function removeFavoriteStorage(storageRemovedFavorite) {
    const favorites = JSON.parse(localStorage.getItem('favorite-scholarships'));
    setFavoritesStorage(favorites.filter(scholarship => !compareObjects(scholarship, storageRemovedFavorite)));
  }

  function removeFavorite(removedFavorite) {
    setFavoritesScholarships(favoritesScholarships.filter(favScholarships => !compareObjects(favScholarships, removedFavorite )))
  }

  function filterBySemester(state, filterState) {
    if(filterState === 'all') return state;
    return state.filter(scholarship => scholarship.enrollment_semester === filterState);
  }

  return (
    <>
      <FavoriteScholarshipsContext.Provider value={{ 
        favoritesScholarships, 
        setFavoritesScholarships, 
        removeFavorite,
        filterBySemester,
        setFavoritesStorage,
        removeFavoriteStorage,
        getFavoritesStorage
        }}>
          {children}
        </FavoriteScholarshipsContext.Provider>
    </>
  )
}

export function useFavoritesScholarships() {
  const context = useContext(FavoriteScholarshipsContext);
  const { 
    favoritesScholarships, 
    setFavoritesScholarships, 
    removeFavorite, 
    filterBySemester, 
    setFavoritesStorage,
    removeFavoriteStorage,
    getFavoritesStorage
  } = context;
  return { 
    favoritesScholarships, 
    setFavoritesScholarships, 
    removeFavorite, 
    filterBySemester,
    setFavoritesStorage,
    removeFavoriteStorage,
    getFavoritesStorage
  };
}