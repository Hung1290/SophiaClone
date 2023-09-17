import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const Session5 = () => {

	const [items, setItems] = useState([]);

  const getData = async () => {
		const response = await axios.get(
		  'http://localhost:3000/C1Session5',
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
    <div className='w-4/5 mx-auto pt-[30px] pb-[100px]' id='info'>
      <h2 className='font-extrabold text-[#12265a] text-center text-[48px] mb-[20px]'>Điểm khác biệt</h2>
      <p className='text-[#7a7a7a] text-center mb-[36px]'>
        Chương trình được thiết kế nhằm tạo ra môi trường học tập tiếng Anh cho các con.<br/>
        Tạo nền tảng phát triển sau này.
      </p>
      <div className='grid md:grid-cols-3 grid-cols-1'>
        {
          items.map((item, index) => (
            <div key={index} className='p-[20px] flex'>
              <div className='w-[210px] mr-[20px]'>
                <img src={item.img} className='w-full'/>
              </div>
              <div className=''>
                <h3 className='text-[20px] text-[#071c4d] font-semibold mb-[7px]'>{item.heading}</h3>
                <p className='text-[#52525c] text-justify'>{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
