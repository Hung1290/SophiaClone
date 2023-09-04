import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const AboutUs5 = () => {

  const [items, setItems] = useState([]);

	const getData = async() => {
		const response = await axios.get(
			'http://localhost:3000/aboutus5',
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
    <div className=''>
      <div className='w-4/5 mx-auto pt-[115px] pb-[70px]'>
        <h2 className='mb-[17px] uppercase text-[40px] font-bold text-[#cf0f0f] text-center'>Đội ngũ giảng viên và trợ giảng</h2>
        <p className='text-[#52525c] mb-[56px] text-center'>Đội ngũ giảng viên bản ngữ với hơn 10 năm kinh nghiệm luôn sẵn sàng giúp đỡ các học viên của mình. Các giáo viên trợ giảng trẻ trung, năng động luôn theo sát các học viên để giúp đỡ hỗ trợ học viên trong học tập và phát triển kĩ năng mềm.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {
            items.map((item, index) => (
              <div key={index} className='mb-[16px] px-[15px]'>
                <img alt='' src={item.img} className='rounded-[15px] mb-[20px]'/>
                <p className='font-semibold text-center'>{item.name}</p>
                <p className='text-center'>{item.job}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
