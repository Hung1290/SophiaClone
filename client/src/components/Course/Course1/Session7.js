import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

export const Session7 = () => {
  return (
    <div className='bg-[#ffdd98] py-[160px]'>
      <div className='w-4/5 mx-auto grid md:grid-cols-3 grid-cols-1'>
        <div className='p-[10px]'>
          <div className='flex p-[35px] bg-white rounded-[20px]'>
            <div className='text-[40px] text-[#45b3df] flex items-center mr-[20px]'>
              <AiFillCheckCircle/>
            </div>
            <div className=''>
              <h2 className='text-[#071c4d] text-[24px] font-black mb-[7px]'>Kĩ năng</h2>
              <p className='text-[#52525c]'>Nâng cao các kĩ năng phù hợp với lứa tuổi</p>
            </div>
          </div>
        </div>
        <div className='p-[10px]'>
          <div className='flex p-[35px] bg-white rounded-[20px]'>
            <div className='text-[40px] text-[#fa9db7] flex items-center mr-[20px]'>
              <AiFillCheckCircle/>
            </div>
            <div className=''>
              <h2 className='text-[#071c4d] text-[24px] font-black mb-[7px]'>Nền tảng</h2>
              <p className='text-[#52525c]'>Tạo nền tảng cho các con phát triển.</p>
            </div>
          </div>
        </div>
        <div className='p-[10px]'>
          <div className='flex p-[35px] bg-white rounded-[20px]'>
            <div className='text-[40px] text-[#ffc85b] flex items-center mr-[20px]'>
              <AiFillCheckCircle/>
            </div>
            <div className=''>
              <h2 className='text-[#071c4d] text-[24px] font-black mb-[7px]'>Tương lai</h2>
              <p className='text-[#52525c]'>Học được nhiều điều hay giúp con ứng dụng trong tương lai.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
