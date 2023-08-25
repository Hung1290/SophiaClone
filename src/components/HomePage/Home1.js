import React from 'react'
import Slider from 'react-slick'

const slider = [
  {
    img: '/images/cover1.webp'
  },
  {
    img: '/images/cover2.jpg'
  }
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};

export const Home1 = () => {
  return (
    <div className='w-screen h-[720px] overflow-hidden'>
      {
        <Slider {...settings}>
          {slider.map((item) => (
            <img src={item.img} className='w-screen h-[720px]'/>
          ))}
        </Slider>
      }
    </div>
  )
}
