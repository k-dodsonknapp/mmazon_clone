import React from 'react'
import { NavLink } from 'react-router-dom'
import "./miniGrid.css"

function MiniGrid({ heading, panelImages, panelText, link }) {
    return (
        <div>
            <h2>{heading}</h2>
            <div className='mini-grid-container'>
                <div className='mini-grid-item one'>
                    <NavLink to=''>
                        <img src={panelImages[0]}></img>
                        <p className='mini-grid-item-text'>{panelText[0]}</p>
                    </NavLink>
                </div>
                <div className='mini-grid-item two'>
                    <NavLink to=''>
                        <img src={panelImages[1]}></img>
                        <p className='mini-grid-item-text'>{panelText[1]}</p>
                    </NavLink>
                </div>
                <div className='mini-grid-item three'>
                    <NavLink to=''>
                        <img src={panelImages[2]}></img>
                        <p className='mini-grid-item-text'>{panelText[2]}</p>
                    </NavLink>
                </div>
                <div className='mini-grid-item four'>
                    <NavLink to=''>
                        <img src={panelImages[3]}></img>
                        <p className='mini-grid-item-text'>{panelText[3]}</p>
                    </NavLink>
                </div>
            </div>
            <div className='grid-item-btm-link'>
                <NavLink to=''>
                    {link}
                </NavLink>
            </div>
        </div>
    )
}

export default MiniGrid