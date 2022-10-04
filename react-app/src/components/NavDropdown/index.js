import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { BiCaretDown } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import './dropdown.css';

function NavDropdown() {

    const [showMenu, setShowMenu] = useState(false);
    // const user = useSelector(state => state.session.user);
    // const session = useSelector(state => state.session);

    // const openMenu = () => {
    //     if (showMenu) return;
    //     setShowMenu(true);
    // };

    // useEffect(() => {
    //     if (!showMenu) return;

    //     const closeMenu = () => {
    //         setShowMenu(false);
    //     };

    //     // document.addEventListener("hover", closeMenu);

    //     return () => document.removeEventListener("click", closeMenu)
    // }, [showMenu]);

    return (
        < >
            <li className='list-item' id='upper-right-nav-sign-in'
                // onMouseEnter={() => setShowMenu(true)}
                // onMouseLeave={() => setShowMenu(false)}
            >
                <NavLink to='/login' exact={true} activeClassName='active'
                >
                    <span className='signin-span'>
                        <div className='signin-message'>
                            <div>
                                <p className='signin-tag'>Hello, Sign in</p>
                                {/* <p className='signin-tag'>Sign in</p> */}
                            </div>
                            <div>
                                <p className='accounts-message'>
                                    Account & Lists
                                    <div id="signin-down-caret">
                                        <BiCaretDown />
                                    </div>
                                </p>
                            </div>
                        </div>
                    </span>
                </NavLink>
            </li>

        </>
    );
};

export default NavDropdown;