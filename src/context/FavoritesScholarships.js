import React, { createContext, useContext, useState } from 'react';

import { compareObjects } from '../utils/compareObjects';

const FavoriteScholarshipsContext = createContext();

export function FavoritesScholarshipsProvider({ children }) {
  const [favoritesScholarships, setFavoritesScholarships] = useState([]);

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
        filterBySemester
        }}>
          {children}
        </FavoriteScholarshipsContext.Provider>
    </>
  )
}

export function useFavoritesScholarships() {
  const context = useContext(FavoriteScholarshipsContext);
  const { favoritesScholarships, setFavoritesScholarships, removeFavorite, filterBySemester } = context;
  return { favoritesScholarships, setFavoritesScholarships, removeFavorite, filterBySemester };
}