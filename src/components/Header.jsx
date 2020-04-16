import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = ({ user, logoutRequest }) => {
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    localStorage.removeItem('user');
    logoutRequest({});
  };
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='userIcon' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser && <li><a href={`#${user.name}`}>{user.name}</a></li>}
          {
            hasUser ?
              <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li> : (
                <li>
                  <Link to='/login'>
                    Iniciar sesion
                  </Link>
                </li>
              )
          }

        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user.user,
});
const mapDispatchToProps = {
  logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
