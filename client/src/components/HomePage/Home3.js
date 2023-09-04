import React, {useState, useEffect} from 'react'
import Slider from 'react-slick'
import axios from 'axios'

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

export const Home3 = () => {

	const [items, setItems] = useState([]);

	const getData = async() => {
		const response = await axios.get(
			'http://localhost:3000/home3',
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
    <div className='pt-[60px] w-4/5 mx-auto'>
      <div className='p-[15px] w-[90%] mx-auto'>
        <h2 className='flex justify-center text-[40px] text-[#cf0f0f] uppercase mb-[10px] text-center font-bold'>CÁC KHÓA HỌC Ở SOPHIA</h2>
        <p className='text-center mb-[16px]'>Trung tâm tiếng anh <strong className='text-[#52525c]'>SOPHIA</strong> cung cấp nhiều khóa học theo chuẩn <strong className='text-[#52525c]'>Cambridge</strong>. Với mỗi khóa học <strong className='text-[#52525c]'>SOPHIA</strong> sẽ có lộ trình riêng để phù hợp với từng lứa tuổi, kích thích niềm đam mê học tập cho các học viên.</p>
      </div>
      <ul className='w-full pb-[10px]'>
		{
			<Slider {...settings}>
				{items.map((item, index) => (
					<li key={index} className='p-[20px] mr-[10px]'>
						<div className='p-[10px] rounded-[30px] bg-[#F7F7F7]'>
							<img 
								alt=''
								src={item.img}
								className='h-[260px] w-full rounded-[30px] mb-[20px]'
								/>
							<h2 className='mb-[20px] text-[28px] text-center font-semibold uppercase'>{item.heading}</h2>
							<p className='mb-[20px] text-[20px] text-[#7A7A7A] text-center'>{item.content}</p>
							<div className='flex justify-center items-center pb-[20px]'>
								<a className='bg-[#cf053a] rounded-[5px] border-2 border-solid border-[#cf0f0f] px-[30px] py-[15px] hover:text-[#CF0F0F] hover:bg-white text-white cursor-pointer'>
									<span>Xem thêm</span>
								</a>
							</div>
						</div>
					</li>
				))}
			</Slider>
		}
	  </ul>
    </div>
  )
}
