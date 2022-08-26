import React, { useEffect, useState } from 'react';
import "./LargeCardCarousel.css"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export const LargeCarouselItem = ({ children, width, carouselItem }) => {

    return (
        <div className='large-carousel-item' style={{ width: width }}>
            {children}
        </div>
    )
}

function LargeCardCarousel({ children }) {

    const [activeIndex, seActiveIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         updateIndex(activeIndex + 1)
    //     }, 5000)
    //     return () => {
    //         if (interval) {
    //             clearInterval(interval)
    //         }
    //     }
    // })

    const updateIndex = (newIndex) => {
        if (newIndex < 0) newIndex = React.Children.count(children) - 1;
        else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        seActiveIndex(newIndex)
    }

    return (
        <div className='large-card-carousel'>
            <div className='large-btn-container'>
                <div className='large-left-btn'>
                    <button className='large-indicators' onClick={() => updateIndex(activeIndex - 1)}>
                        <AiOutlineLeft className='large-left-icon'/>
                    </button>
                </div>
                <div className='large-inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, { width: "100%" });
                    })}
                </div>
                <div className='large-right-btn'>
                    <button className='large-indicators' onClick={() => updateIndex(activeIndex + 1)}>
                        <AiOutlineRight className='large-right-icon' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LargeCardCarousel;