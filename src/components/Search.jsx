import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { setSearch } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ({ search, setSearch, isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  const handleChange = event => {
    setSearch(event.target.value);
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
const maptDispatchToProps = {
  setSearch,
};
export default connect(null, maptDispatchToProps)(Search);
