import React from 'react';
import '../assets/styles/components/Search.scss';

export default () => (
  <section className='main'>
    <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
    <input type='text' className='input' placeholder='Buscar...' />
  </section>
);
