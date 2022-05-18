
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './navBar.css';

const NavBar = () => {
  return (
    <>
      <nav className='nav-container'>
        <ul className='unordered-list'>
          <li className='list-item'>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li>
          <li className='list-item'>
            <LogoutButton />
          </li>
        </ul>
      </nav>

    </>
  );
}

export default NavBar;
