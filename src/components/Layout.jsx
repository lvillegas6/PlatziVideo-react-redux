import React from 'react';
import Footer from './Footer';
import '../assets/styles/App.scss';

export default ({ children }) => (
  <div className='App'>
    {children}
    <Footer />
  </div>
);
