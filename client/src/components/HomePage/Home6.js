import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'
import Slider from 'react-slick'
import quotesdot from '../../assets/svg/Home6/quotesdot.svg'
import quotes from '../../assets/svg/Home6/quotes.svg'

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
			breakpoint: 1024,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: false
			}
		},
  ]
};

export const Home6 = () => {

  const [items, setItems] = useState([]);

	const getData = async() => {
		const response = await axios.get(
			'http://localhost:3000/home6',
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
    <div className='pt-[115px] pb-[100px]'>
      <div className='w-4/5 mx-auto'>
        <div className='mb-[20px]'>
          <h2 className='flex justify-center text-[40px] text-[#cf0f0f] mb-[17px] text-center font-bold'>Phụ huynh và học sinh nói gì về SOPHIA
          </h2>
          <p className='text-center mb-[16px]'>SOPHIA xin chân thành cảm ơn tất cả các bậc phụ huỳnh và các em học sinh đã tin tưởng và đồng hành cùng SOPHIA trong hơn 10 năm qua. Dưới đây là một số nhận xét của các phụ huynh và học sinh về SOPHIA.</p>
        </div>
        <div className='p-[15px]'>
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className='w-[470px]'>
                <div className='pt-[50px] pb-[43px] px-[50px] my-[25px] mx-[15px] rounded-[15px] bg-white shadow-home6 relative z-[2]'>
                  <img src={quotesdot} className='w-[60px] absolute left-[25px] top-[25px] z-[-1]'/>
                  <img src={quotes} className='w-[130px] absolute bottom-[50px] right-[20px] z-[-1]'/>
                  <div className='w-full h-[60px] flex mb-[28px]'>
                    <img src={item.img} className='w-[60px] h-[60px] rounded-[6px] mr-[20px]'/>
                    <div>
                      <p className='text-[#071c4d] font-bold text-[18px]'>{item.name}</p>
                      <p className='text-[#575757]'>{item.position}</p>
                    </div>
                  </div>
                  <p className='mb-[26px] text-[#52525C]'>{item.content}</p>
                  <div className='flex text-[#ffbc08]'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
