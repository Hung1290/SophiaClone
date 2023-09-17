import React from 'react'

export const Session7 = () => {
  return (
    <div className='bg-[#fafafa]'>
      <div className='w-4/5 mx-auto text-[#cf0f0f] grid grid-cols-1 md:flex py-[50px]'>
        <div className='font-semibold text-[40px] text-center md:text-left md:w-[34%]'>📢 Thông tin về khóa học tiếng anh thiếu nhi</div>
        <div className='grid grid-cols-2 md:flex md:items-center text-center md:justify-around w-full'>
          <div>
            <p className='text-[46px] font-extrabold'>14</p>
            <p className='text-[#071c4d] font-semibold'>Học viên / lớp</p>
          </div>
          <div>
            <p className='text-[46px] font-extrabold'>2</p>
            <p className='text-[#071c4d] font-semibold'>Buổi/ tuần</p>
          </div>
          <div>
            <p className='text-[46px] font-extrabold'>90</p>
            <p className='text-[#071c4d] font-semibold'>Phút/ buổi</p>
          </div>
          <div>
            <p className='text-[46px] font-extrabold'>6</p>
            <p className='text-[#071c4d] font-semibold'>Tháng</p>
          </div>
        </div>
      </div>
    </div>
  )
}
