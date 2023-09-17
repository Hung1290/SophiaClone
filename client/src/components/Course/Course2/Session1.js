import React, {useState, useEffect} from 'react'
import axios from 'axios'
import svg1 from '../../../assets/svg/C2Session1/svg1.svg'
import svg2 from '../../../assets/svg/C2Session1/svg2.svg'
import svg3 from '../../../assets/svg/C2Session1/svg3.svg'
import svg4 from '../../../assets/svg/C2Session1/svg4.svg'

export const Session1 = () => {

  const [items, setItems] = useState([]);

	const getData = async() => {
		const response = await axios.get(
			'http://localhost:3000/C2Session1',
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
    <div className='bg-[url("https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/SOPHIA-ENGLISH-CENTER-5-min-min.jpg")] bg-cover bg-no-repeat lg:h-[600px] sm:h-[300px] h-[200px] bg-center relative mb-[520px] md:mb-[220px] lg:mb-[0px]'>
        <div className='flex justify-center'>
            <div className='absolute lg:bottom-[-100px] md:bottom-[-320px] bottom-[-620px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-4/5'>
                {items.map((item, index) => (
                    <div key={index} className='p-[24px] mx-[12px] bg-white rounded-[6px] c2-session1 mb-[20px]'>
                        <div className=' mb-[8px]'>       
                            {item.id === 1 && <img src={svg1}/>}
                            {item.id === 2 && <img src={svg2}/>}
                            {item.id === 3 && <img src={svg3}/>}
                            {item.id === 4 && <img src={svg4}/>}
                        </div>
                        <p className='text-[17px] text-[#0b163f] font-semibold mb-[8px]'>{item.heading}</p>
                        <p className='text-[#575757]'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
