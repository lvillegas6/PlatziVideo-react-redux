import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { setSearch } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ({ search, isHome }) => {
  const dispatch = useDispatch();
  const inputStyle = classNames('input', {
    isHome,
  });
  const handleChange = event => {
    dispatch(setSearch(event.target.value));
  };
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        type='text'
        value={search}
        className={inputStyle}
        placeholder='Buscar...'
        onChange={handleChange}
      />
    </section>
  );
};
export default Search;
