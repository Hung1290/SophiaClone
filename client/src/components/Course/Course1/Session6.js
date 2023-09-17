import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Session6 = () => {

  const [items, setItems] = useState([]);

  const getData = async () => {
		const response = await axios.get(
		  'http://localhost:3000/C1Session6',
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
    <div className='bg-[#fcf9f4] py-[100px]' id='image'>
      <div className='w-4/5 mx-auto'>
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <h2 className='text-[#12265a] text-[40px] font-black p-[10px] text-center md:text-left'>Hình ảnh</h2>
          <div className='pr-[16px] flex items-center md:justify-end justify-center'>
            <button className='text-[#fff] font-extrabold bg-[#ffc85b] px-[20px] py-[8px] rounded-[60px] border-2 border-dashed border-[#fff] c1-session2'><a href='#' className='flex items-center gap-2'>Xem thêm</a></button>
          </div>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1'>
          {
            items.map((item, index) => (
              <div className='p-[10px]' key={index}>
                <img alt='' src={item.img} className='rounded-[20px] h-[300px]'/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
