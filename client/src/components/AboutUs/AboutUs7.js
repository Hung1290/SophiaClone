import React from 'react'

export const AboutUs7 = () => {
  return (
    <div className='w-4/5 mx-auto pt-[115px] pb-[120px]'>
      <h2 className='mb-[20px] uppercase text-[40px] font-bold text-[#cf0f0f] text-center'>ĐỊA CHỈ CỦA SOPHIA Ở ĐÀ NẴNG</h2>
      <p className='text-[#52525c] mb-[56px] text-center'>Hiện tại SOPHIA đang tuyển sinh tại 2 chi nhánh ở Đà Nẵng</p>
      <div className='md:flex'>
        <div className='px-[15px] w-full relative'>
          <img alt='' src='/images/SOPHIA-ENGLISH-CENTER-3-min.jpg' className='h-[360px] w-full rounded-[15px]'/>
          <div className='absolute top-[50%] left-0 text-center w-full'>
            <h2 className='text-[20px] font-semibold'>Đà Nẵng</h2>
            <p className='font-semibold'>100 Nguyễn Thị Minh Khai, Hải Châu, Đà Nẵng</p>
          </div>
        </div>
        <div className='mt-[30px] md:mt-0 px-[15px] w-full relative'>
          <img alt='' src='/images/SOPHIA-ENGLISH-CENTER-4-min.jpg' className='h-[360px] w-full rounded-[15px]'/>
          <div className='absolute top-[50%] left-0 text-center w-full'>
            <h2 className='text-[20px] font-semibold'>Đà Nẵng</h2>
            <p className='font-semibold'>799 Ngô Quyền, Sơn Trà, Đà Nẵng</p>
          </div>
        </div>
      </div>
    </div>
  )
}
