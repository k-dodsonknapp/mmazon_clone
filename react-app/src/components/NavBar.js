
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './navBar.css';
import { BsSearch } from "react-icons/bs";
// const mmazonLogo = require('../../public/mmazon-logo.png')

const NavBar = () => {
  return (
    <>
      <nav className='nav-container'>
        <ul className='upper-nav'>
          <div className='upper-nav-left'>
            <li className='list-item' id='logo-nav'>
              <NavLink to='/' exact={true} activeClassName='active'>
                <img className='mmazon-logo' src={'https://raw.githubusercontent.com/k-dodsonknapp/mmazon_clone/main/mmazon-logo-crop.png'}></img>
              </NavLink>
            </li>
            <li className='list-item' id='location-nav'>
              <NavLink to='/login' exact={true} activeClassName='active'>

              </NavLink>
            </li>
          </div>
          <li className='list-item' id='search-nav'>
            <button id='search-depts'>
              All
            </button>
            <input
              className='search-input'
              type='text'
              name='search'
            >
            </input>
            <button id='search-icon-btn'>
              <BsSearch id="search-icon" />
            </button>
            {/* <NavLink to='/login' exact={true} activeClassName='active'>
            </NavLink> */}
          </li>
          <div className='upper-nav-right'>
            <li className='list-item' id='upper-right-nav-sign-in'>
              <NavLink to='/users' exact={true} activeClassName='active'>
                Users
              </NavLink>
            </li>
            <li className='list-item' id='upper-right-nav-orders'>
              {/* <LogoutButton /> */}
            </li>
            <li className='list-item' id='upper-right-nav-cart'>
              {/* <LogoutButton /> */}
            </li>
          </div>
        </ul>
        <ul className='lower-nav'>
          <li className='lower-nav-link'>
            <NavLink to=''>
              All
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Back to School
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Off to College
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Best Sellers
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Amazon Basics
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Today's Deals
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              New Releases
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Customer Service
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Prime
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Music
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Books
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Kindle Books
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Amazon Home
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Registry
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Fashion
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Gift Cards
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Toys & Games
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Handmade
            </NavLink>
          </li>
          <li className='lower-nav-link'>
            <NavLink to=''>
              Sell
            </NavLink>
          </li>
        </ul>
      </nav>

    </>
  );
}

export default NavBar;
