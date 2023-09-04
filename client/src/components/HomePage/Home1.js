import React, {useState, useEffect} from 'react'
import Slider from 'react-slick'
import axios from 'axios'

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
  
  const [items, setItems] = useState([]);
  
  const getData = async () => {
    const response = await axios.get(
      'http://localhost:3000/home1',
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
  };
  useEffect(() => {
		getData();
	}, []);

  return (
    <div className='w-screen h-[180px] md:h-[420px] lg:h-[620px] overflow-hidden'>
      {
        <Slider {...settings}>
          {items.map((item) => (
            <img src={item.img} className='w-screen h-[180px] md:h-[420px] lg:h-[620px]'/>
          ))}
        </Slider>
      }
    </div>
  )
}
