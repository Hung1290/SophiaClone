import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'
import Slider from 'react-slick'

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 1
			}
		  }
		]
  };

export const Session10 = () => {

  const [items, setItems] = useState([]);

	const getData = async() => {
		const response = await axios.get(
			'http://localhost:3000/C1Session10',
			{
			  params: {
				filter: {
				  order: ['id DESC'],
				},
			  },
			}
		  );
		
		if (response.status === 200) {
		setItems(response.data);
		}
	}
	useEffect(() => {
		getData();
	}, []);

  return (
    <div>
      <div className='bg-[#fcf9f4] h-[750px] flex items-center'>
        <div className='w-4/5 mx-auto'>
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className='w-[470px]'>
                <div className='pt-[50px] pb-[43px] px-[50px] my-[25px] mx-[15px] rounded-[15px] bg-white shadow-home6'>
                  <p className='mb-[26px] text-[#52525C] text-[18px] leading-[30px]'>{item.description}</p>
                  <div className='w-full h-[60px] flex mb-[28px]'>
                    <img src={item.img} className='w-[60px] h-[60px] rounded-full mr-[20px]'/>
                    <div>
                      <p className='text-[#071c4d] font-bold text-[18px]'>{item.name}</p>
                      <p className='text-[#575757]'>Tiếng anh mẫu giáo</p>
                      <div className='flex text-[#ffbc08]'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className='h-[90px] w-full bg-[#45b3df]'></div>
    </div>
  )
}
