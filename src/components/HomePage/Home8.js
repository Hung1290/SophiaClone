import React from 'react'
import Slider from 'react-slick'

const img = [
  {
    img: '/images/nus_sin-min.webp',
  },
  {
    img: '/images/logo_persion_sec_min.webp',
  },
  {
    img: '/images/idp_doitac-min.webp',
  },
  {
    img: '/images/dropshadow1-min.webp',
  },
  {
    img: '/images/1280px-Cambridge_University_Pres-min.webp',
  },
  {
    img: '/images/blue_logo-min.webp',
  }
]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};

export const Home8 = () => {
  return (
    <div className='py-[20px]'>
      <div className='p-[10px]'>
      <h2 className='flex justify-center font-semibold text-[26px] text-[#cf0f0f]'>Đối tác của SOPHIA</h2>
      <div className='w-[90%] mx-auto'>
        <Slider {...settings}>
          {
            img.map((item, index) => (
              <div key={index} className='pr-[30px]'>
                <div className='p-[20px]'>
                  <img src={item.img}/>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
      </div>
    </div>
  )
}
