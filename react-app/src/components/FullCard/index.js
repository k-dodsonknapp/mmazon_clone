import React from 'react'
import { NavLink } from 'react-router-dom'
import "./fullCard.css"

function FullCard({ heading, link, image }) {
    return (
        <div className='full-card-div'>
            <h2 id='full-card-h2'>{heading}</h2>
            <div className='full-card-img-div'>
                <NavLink to='' className='full-card-link'>
                    <img src={image}></img>
                </NavLink>
            </div>
            <div className='full-card-btm-link'>
                <NavLink to='' className='full-card-link'>
                    {link}
                </NavLink>
            </div>
        </div>
    )
}

export default FullCard