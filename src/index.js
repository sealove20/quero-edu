import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { CoursesProvider } from './context/Courses'

ReactDOM.render(
  <CoursesProvider>
    <App />
  </CoursesProvider>, 
  document.getElementById('root')
);
