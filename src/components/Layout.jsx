import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../assets/styles/App.scss';

export default ({ children }) => (
  <div className='App'>
    <Header />
    {children}
    <Footer />
  </div>
);
