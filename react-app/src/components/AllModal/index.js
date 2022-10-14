import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../Context/Modal';
import './allModal.css';

function AllModal({ displayModal, setDisplayModal, message }) {
    // const history = useHistory();
    // const login = () => {
    //     history.push('/login')
    // }
    // const signUp = () => {
    //     history.push('/sign-up')
    // }

    // const [displayModal, setDisplayModal] = useState(false);

    const closeModal = () => {
        setDisplayModal(!displayModal);
        document.body.style.overflowY = ""
        document.body.style.paddingRight = ""
    };

    return (
        // <Modal onClose={() => setShowAllModal(false)}>
        // <div className='main-modal-login-div'>
        //     <div className='message-div'>
        //         <h1>Please Login or Sign Up <br/> to proceed.</h1>
        //         <div className='modal-button-div'>
        //             <button id='modal-login-btn' onClick={login}> Login</button>
        //             {/* <h1>Or</h1> */}
        //             <button id='modal-signup-btn' onClick={signUp}> Sign Up</button>
        //         </div>
        //     </div>
        // </div>
        // </Modal>
        <>
            <div className={`Modal ${displayModal ? 'Show' : ''}`}>
                <div className='modal-main'>
                    <div className='modal-greeting'>
                        Hello, sign in

                    </div>
                    <div id='menu-list'>
                        <div className='submenu-list'>
                            <h3>Trending</h3>
                            <button classname="submenu-btn">
                                Best Sellers
                            </button>
                            <button classname="submenu-btn">
                                New Releases
                            </button>
                            <button classname="submenu-btn">
                                Movers & Shakers
                            </button>
                            <div className='underline-submenu'></div>
                        </div>
                        <div className='submenu-list'>
                            <h3>Digital Content & Devices</h3>
                            <button classname="submenu-btn">
                                Prime Video
                            </button>
                            <button classname="submenu-btn">
                                Amazon Music
                            </button>
                            <button classname="submenu-btn">
                                Echo & Alexa
                            </button>
                            <button classname="submenu-btn">
                                Fire Tablets
                            </button>
                            <button classname="submenu-btn">
                                Fire TV
                            </button>
                            <button classname="submenu-btn">
                                Amazon Photos
                            </button>
                            <button classname="submenu-btn">
                                Audible Books & Originals
                            </button>
                            <button classname="submenu-btn">
                                Amazon Appstore
                            </button>
                            <button classname="submenu-btn">
                                Online Learning
                            </button>
                            <div className='underline-submenu'></div>
                        </div>
                        <div className='submenu-list'>

                            <h3>Shop by Department</h3>
                            <button classname="submenu-btn">
                                Clothing, Shoes, Jewelry & Watches
                            </button>
                            <button classname="submenu-btn">
                                Amazon Fresh
                            </button>
                            <button classname="submenu-btn">
                                Books
                            </button>
                            <button classname="submenu-btn">
                                Movies, Music & Games
                            </button>
                            <button classname="submenu-btn">
                                Electronics
                            </button>
                            <button classname="submenu-btn">
                                Computers
                            </button>
                            <button classname="submenu-btn">
                                Smart Home
                            </button>
                            <button classname="submenu-btn">
                                Home, Garden & Tools
                            </button>
                            <button classname="submenu-btn">
                                Pet Supplies
                            </button>
                            <button classname="submenu-btn">
                                Food & grocery
                            </button>
                            <button classname="submenu-btn">
                                Beauty & Health
                            </button>
                            <button classname="submenu-btn">
                                Toys, Kids & Baby
                            </button>
                            <button classname="submenu-btn">
                                Handmade
                            </button>
                            <button classname="submenu-btn">
                                Sports
                            </button>
                            <button classname="submenu-btn">
                                Outdoors
                            </button>
                            <button classname="submenu-btn">
                                Automotive & Industrial
                            </button>
                            <button classname="submenu-btn">
                                Industrial and Scientific
                            </button>
                            <div className='underline-submenu'></div>
                        </div>
                        <div className='submenu-list'>
                            <h3>
                                Help & Settings
                            </h3>
                            <button classname="submenu-btn">
                                Your Account
                            </button>
                            <button classname="submenu-btn">
                                Sign in
                            </button>
                            <div className='btm-submenu'></div>
                        </div>
                    </div>
                </div>
                <div className='exit-modal-btn-div'>
                    <button className='exit-modal-btn' onClick={closeModal}>
                        {/* <button className='exit-modal-btn' onClick={() => setDisplayModal(!displayModal)}> */}
                        X
                    </button>
                </div>
            </div>
            <div className={`Overlay ${displayModal ? 'Show' : ''}`}>
            </div>

            <button to='' id='all-link' onClick={() => setDisplayModal(!displayModal)}>
            </button>
        </>
    )
}

export default AllModal;