import React from 'react'
import Slider from 'react-slick'

export const Home1 = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className='w-screen h-[720px] overflow-hidden'>
      {
        <Slider {...settings}>
          <img src='/images/cover1.webp' className='w-screen h-[720px]'/>
          <img src='/images/cover2.jpg' className='w-screen h-[720px]'/>
        </Slider>
      }
    </div>
  )
}
