import React, {useState, useEffect} from 'react'
import Slider from 'react-slick'
import axios from 'axios'

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

  const [items, setItems] = useState([]);

	const getData = async() => {
		const response = await axios.get(
			'http://localhost:3000/home8',
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
    <div className='py-[20px]'>
      <div className='p-[10px]'>
      <h2 className='flex justify-center text-[26px] text-[#cf0f0f] font-bold'>Đối tác của SOPHIA</h2>
      <div className='w-[90%] mx-auto'>
        <Slider {...settings}>
          {
            items.map((item, index) => (
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
