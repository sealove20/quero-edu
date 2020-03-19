import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { ScholarshipsProvider } from './context/Scholarships';

ReactDOM.render(
  <ScholarshipsProvider>
    <App />
  </ScholarshipsProvider>, 
  document.getElementById('root')
);
