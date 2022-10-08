import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function DropdownMenu() {

    const [showMenu, setShowMenu] = useState(false);
    const [signInBtn, setSingInBtn] = useState(true);

    return (
        <>
            <ul className='profile-options'>

                {signInBtn && (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className='dd-signin-btn-wrapper'>
                            <NavLink to='./sign-up' className='dropdown-signin-btn'>Sign in</NavLink>
                            <p>
                                New Customer?
                                <span className="signup-link">
                                    <NavLink to='/sign-up' style={{ width: "100px", textDecoration: 'none', color: "blue" }}>
                                        Start Here
                                    </NavLink >
                                </span>
                            </p>
                        </div>
                    </div>
                )}
                {/* <div className='left-point'></div> */}
                <div className='dropdown-div'>
                    {/* <NavLink to='/login' exact={true} id="something" activeClassName='another' style={{ textDecoration: 'none', color: "black" }}>
                        <div className='dropdown-btns'>
                            <li>
                                Login
                            </li>
                        </div>
                    </NavLink>
                    <NavLink to='/sign-up' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: "black" }}>
                        <div className='dropdown-btns'>
                            <li>
                                Sign Up
                            </li>
                        </div>
                    </NavLink> */}
                    <div className='dd-main-wrapper'>

                        <div className='dd-left-wrapper'>
                            <h4>Your Lists</h4>
                            <NavLink className='dd-left-link' to="/">Create a list </NavLink>
                            <NavLink className='dd-left-link' to="/">Find a List or Registry</NavLink>
                        </div>
                        <div className='dd-right-wrapper'>
                            <h4>Your Account</h4>
                            <NavLink className='dd-link' to="/">Account</NavLink>
                            <NavLink className='dd-link' to="/">Orders</NavLink>
                            <NavLink className='dd-link' to="/">Recommendations</NavLink>
                            <NavLink className='dd-link' to="/">Browsing History</NavLink>
                            <NavLink className='dd-link' to="/">Watchlist</NavLink>
                            <NavLink className='dd-link' to="/">Video Purchases & Rentals</NavLink>
                            <NavLink className='dd-link' to="/">Kindle Unlimited</NavLink>
                            <NavLink className='dd-link' to="/">Content & Devices</NavLink>
                            <NavLink className='dd-link' to="/">Subscribe & Save Items</NavLink>
                            <NavLink className='dd-link' to="/">Memberships & Subscriptions</NavLink>
                            <NavLink className='dd-link' to="/">Prime Membership</NavLink>
                            <NavLink className='dd-link' to="/">Amazon Credit Cards</NavLink>
                            <NavLink className='dd-link' to="/">Music Library</NavLink>
                            <NavLink className='dd-link' to="/">Start a Selling Account</NavLink>
                            <NavLink className='dd-link' to="/">Register for a Buisness Account</NavLink>
                            <NavLink className='dd-link' to="/">Customer Service</NavLink>
                        </div>
                    </div>
                </div>
            </ul>
        </>
    )
}

export default DropdownMenu