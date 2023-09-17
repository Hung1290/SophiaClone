import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'

export const Session8 = () => {
  return (
    <div className='bg-[url("https://sec-vietnam.edu.vn/wp-content/uploads/2023/04/trung-tam-tieng-anh-Sophia-10.webp")] bg-no-repeat bg-cover bg-center min-h-[400px] lg:h-[825px]' id='work'>
      <div className='flex items-center h-full'>
        <div className='w-4/5 mx-auto'>
          <h2 className='text-[#12265a] text-[47px] font-black'>
            Cung cấp<br/>
            Các hoạt động phù hợp
          </h2>
          <div className='flex mb-[18px]'>
            <p className='text-[#7a7a7a] w-[40%] text-[18px]'>Các chương trình của SOPHIA tập trung vào sự phát triển của mỗi đứa trẻ giúp các con đạt được các kĩ năng cần có phù hợp với độ tuổi các con</p>
            <div className='w-[60%]'></div>
          </div>
          <ul>
            <li className='flex items-center'>
              <FaPencilAlt/>
              <p className='pl-[10px] text-[28px] font-black'>
                Vui chơi
              </p>
            </li>
            <li className='flex items-center'>
              <FaPencilAlt/>
              <p className='pl-[10px] text-[28px] font-black'>
                Làm việc nhóm
              </p>
            </li>
            <li className='flex items-center'>
              <FaPencilAlt/>
              <p className='pl-[10px] text-[28px] font-black'>
                Lắng nghe
              </p>
            </li>
            <li className='flex items-center'>
              <FaPencilAlt/>
              <p className='pl-[10px] text-[28px] font-black'>
                Hoạt động  
              </p>              
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
