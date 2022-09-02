import React from 'react'
import LargeCardCarousel, { LargeCarouselItem } from '../LargeCardCarousel';

function LargeCard() {
    return (
        <div className='grid-item-big-one'>
            <LargeCardCarousel>
                <LargeCarouselItem>
                    <img className='large-card-img' src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81CNNi09RxS._AC_SY200_.jpg'></img>

                    <img className='large-card-img' src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71-N0PxSwJL._AC_SY200_.jpg'></img>

                    <img className='large-card-img' src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61EtcBMUgYL._AC_SY200_.jpg'></img>

                    <img className='large-card-img' src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/614H6oGzuPL._AC_SY200_.jpg'></img>
                </LargeCarouselItem>
                <LargeCarouselItem>
                    <img className='large-card-img' src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81CNNi09RxS._AC_SY200_.jpg'></img>

                    <img className='large-card-img' src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71-N0PxSwJL._AC_SY200_.jpg'></img>

                    <img className='large-card-img' src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61EtcBMUgYL._AC_SY200_.jpg'></img>

                    <img className='large-card-img' src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/614H6oGzuPL._AC_SY200_.jpg'></img>
                </LargeCarouselItem>
            </LargeCardCarousel>
        </div>
    )
}

export default LargeCard;