import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Slider from 'react-slick'


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
		{
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: false
			}
		},
  ]
};

export const AboutUs6 = () => {

  const [items, setItems] = useState([]);

	const getData = async() => {
		const response = await axios.get(
			'http://localhost:3000/aboutus6',
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
    <div className='bg-[#f8f9fa]'>
      <div className='w-[90%] mx-auto md:flex md:items-center'>
        <div className='md:w-[35%] p-[10px]'>
          <h2 className='mb-[20px] uppercase text-[29px] font-bold text-[#cf0f0f]'>ĐỘI NGŨ TRỢ GIẢNG TRẺ TRUNG, NĂNG ĐỘNG</h2>
          <p className='text-[#52525c] mb-[56px]'>Đội ngũ trợ giảng tại SOPHIA với nhiều năm kinh nghiệm trong ngành giáo dục, luôn quan tâm đến từng bạn học viên.</p>
          </div>
          <div className='md:w-[65%] p-[10px]'>
            <Slider {...settings}>
              {
                items.map((item, index) => (
                  <div key={index} className='p-[10px] relative'>
                    <img alt='' src={item.img} className='rounded-[25px]'/>
                    <div className='absolute bottom-[30px] left-[50px]'>
                      <p className='text-[40px] font-semibold'>{item.name}</p>
                      <p>{item.job}</p>
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
