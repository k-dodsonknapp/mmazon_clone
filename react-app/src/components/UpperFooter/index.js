import React from 'react'
import { NavLink } from 'react-router-dom';
import './lowerFooter.css'

function UpperFooter() {
    return (
        <div className='footer-container'>
            <div>
                <button className='backToTopBtn'>Back to top</button>
            </div>
            <div className='upperFooterColumns'>
                <div className='upColumns'>
                    <h4>Get to Know Me</h4>
                    <div className='upFootBtnContainer'>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                    </div>
                </div>
                <div className='upColumns'>
                    <h4>I'd like to work for you</h4>
                    <div className='upFootBtnContainer'>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                    </div>
                </div>
                <div className='upColumns'>
                    <h4>Let Me Work for You</h4>
                    <div className='upFootBtnContainer'>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>

                    </div>
                </div>
                <div className='upColumns'>
                    <h4>Let Me Work for You</h4>
                    <div className='upFootBtnContainer'>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                        <NavLink className="upperFooterLink" to=''>Hi</NavLink>
                    </div>
                </div>

            </div>
                <div className='logoDiv'>
                    <NavLink to='/'>
                    <img className='upperFooterLogo' src='https://raw.githubusercontent.com/k-dodsonknapp/mmazon_clone/main/mmazon-logo-white-blue-backg.png'/>
                    </NavLink>
                </div>
        </div>
    )
}

export default UpperFooter;