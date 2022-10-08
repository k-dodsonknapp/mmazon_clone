
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './navBar.css';
import { BsSearch } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsList } from "react-icons/bs";
import { BiCaretDown } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import NavDropdownBtn from './NavDropdownBtn';
import DropdownMenu from './DropdownMenu';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
              <NavLink to='/login' exact={true} activeClassName='location'>
                <span className='location-span'>
                  <div>
                    <HiOutlineLocationMarker id="location-icon" />
                  </div>
                  <div className='location-message'>
                    <p className='hello-tag'>Hello</p>
                    <p className='select-message'>Select your address</p>
                  </div>
                </span>
              </NavLink>
            </li>
          </div>
          <li className='list-item' id='search-nav'>
            <button id='search-depts'>
              All
              <div id="down-caret">
                <BiCaretDown />
              </div>
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
            <div id="hover-cover"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <NavDropdownBtn />
              {showMenu && (
                // <ul className='profile-options'
                //   // onMouseEnter={() => setShowMenu(true)}
                //   // onMouseLeave={() => setShowMenu(false)}
                // >
                //   <div className='left-point'></div>
                //   <div className='dropdown-div'>
                //     <NavLink to='/login' exact={true} id="something" activeClassName='another' style={{ textDecoration: 'none', color: "black" }}>
                //       <div className='dropdown-btns'>
                //         <li>
                //           Login
                //         </li>
                //       </div>
                //     </NavLink>
                //     <NavLink to='/sign-up' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: "black" }}>
                //       <div className='dropdown-btns'>
                //         <li>
                //           Sign Up
                //         </li>
                //       </div>
                //     </NavLink>
                //   </div>
                // </ul>
                <DropdownMenu/>
              )}
            </div>

            <li className='list-item' id='upper-right-nav-orders'>
              <NavLink to='' exact={true} activeClassName='active'>
                <span className='orders-span'>
                  <div className='orders-message'>
                    <div>
                      <p className='orders-tag'>Returns</p>
                      {/* <p className='signin-tag'>Sign in</p> */}
                    </div>
                    <div>
                      <p className='orders-message'>
                        & Orders
                      </p>
                    </div>
                  </div>
                </span>
              </NavLink>
            </li>
            <li className='list-item' id='upper-right-nav-cart'>
              <NavLink id='cart-navlink' to='' exact={true} activeClassName='active'>
                {/* <span className='orders-span'> */}
                {/* <div className='orders-message'> */}
                {/* <div> */}
                {/* <p className='orders-tag'>Returns</p> */}
                {/* <p className='signin-tag'>Sign in</p> */}
                {/* </div> */}
                {/* <div> */}
                {/* <p className='orders-message'> */}
                {/* & Orders */}
                {/* </p> */}
                {/* </div> */}
                {/* </div> */}
                {/* </span> */}

                {/* <BiCartAlt id="cart-icon"/> */}
                <div className='cart-div'>
                  <p id='cart-count'>0</p>
                  <img className='cart-img' src='https://raw.githubusercontent.com/k-dodsonknapp/mmazon_clone/main/blue-cart-icon%3Dtake2.png'></img>
                  <p className='cart-label'>Cart</p>
                </div>
              </NavLink>
            </li>
          </div>
        </ul>
        <ul className='lower-nav'>
          <li className='lower-nav-link' id='all-btn' >
            <NavLink to='' id='all-link'>
              <div>
                <BsList id='all-list-icon' />
              </div>
              <p>
                All
              </p>
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
