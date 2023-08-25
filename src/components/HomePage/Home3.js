import React from 'react'
import Slider from 'react-slick'

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000
  };

const courseCard = [
	{	
		id: 1,
		img: '/images/coursecard1.webp',
		heading: 'tiếng anh mẫu giáo',
		content: 'Dành cho bé từ 2.5 - 4 tuổi. Tạo môi trường học tập cho các con.',
	},
	{	
		id: 2,
		img: '/images/coursecard2.webp',
		heading: 'tiếng anh mầm non',
		content: 'Dành cho bé từ 3 - 6 tuổi. Khơi mở niềm đam mê học tập',
	},
	{	
		id: 3,
		img: '/images/coursecard3.jpg',
		heading: 'tiếng anh thiếu nhi',
		content: 'Dành cho bé từ 6 - 11 tuổi. Giải pháp toàn diện 4 kĩ năng.',
	},
	{	
		id: 4,
		img: '/images/coursecard4.webp',
		heading: 'tiếng anh thiếu niên',
		content: 'Dành cho bé từ 11 - 15 tuổi. Tạo lập nền tảng phát triễn kĩ năng IELTS.',
	},
	{	
		id: 5,
		img: '/images/coursecard5.jpg',
		heading: 'nền tảng ielts',
		content: 'Chương trình nền tảng vững chắc, giúp bé đạt được mục tiêu đề ra.',
	},
	{	
		id: 6,
		img: '/images/coursecard6.jpg',
		heading: 'hỗ trợ du học',
		content: 'Hỗ trợ, đào tạo các bạn để đạt được mục tiêu đi du học của các bạn.',
	}
]

export const Home3 = () => {
  return (
    <div className='pt-[60px] w-4/5 mx-auto'>
      <div className='p-[15px] w-[90%] mx-auto'>
        <h2 className='flex justify-center text-[40px] text-[#cf0f0f] uppercase mb-[10px] text-center'>CÁC KHÓA HỌC Ở SOPHIA</h2>
        <p className='text-center mb-[16px]'>Trung tâm tiếng anh <strong className='text-[#52525c]'>SOPHIA</strong> cung cấp nhiều khóa học theo chuẩn <strong className='text-[#52525c]'>Cambridge</strong>. Với mỗi khóa học <strong className='text-[#52525c]'>SOPHIA</strong> sẽ có lộ trình riêng để phù hợp với từng lứa tuổi, kích thích niềm đam mê học tập cho các học viên.</p>
      </div>
      <ul className='w-full pb-[10px]'>
		{
			<Slider {...settings}>
				{courseCard.map((item, index) => (
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
