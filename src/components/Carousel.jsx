import React from 'react';
import '../assets/styles/components/Carousel.scss';

export default ({ children }) => (
  <section className='carousel'>
    <div className='carousel__container'>
      {children}
    </div>
  </section>
);
