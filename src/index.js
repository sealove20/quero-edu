import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { ScholarshipsProvider } from './context/Scholarships';
import { FavoritesScholarshipsProvider } from './context/FavoritesScholarships';

ReactDOM.render(
  <ScholarshipsProvider>
    <FavoritesScholarshipsProvider>
      <App />
    </FavoritesScholarshipsProvider>
  </ScholarshipsProvider>, 
  document.getElementById('root')
);
