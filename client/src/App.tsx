import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';

import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div>
        basement
      </div>
    </>
  );
}

export default App;
