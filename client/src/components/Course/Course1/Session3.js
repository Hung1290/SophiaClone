import React from 'react'

export const Session3 = () => {
  return (
    <div className='pb-[100px]' id='programme'>
      <div className='font-extrabold text-[#12265a] text-center text-[48px] pt-[10px] pb-[30px]'>
        Khám phá<br/>
        Các chương trình tại SOPHIA
      </div>
      <div className='lg:flex lg:justify-center grid md:grid-cols-2 grid-cols-1'>
        <div className='flex justify-center mb-[40px]'>
          <div className='text-center text-white w-[360px] bg-[#fa9db7] py-[20px] rounded-[20px] mx-[30px]'>
            <div className='flex justify-center'>
              <img alt='' src='/images/info-box_01-1.webp' className=''/>
            </div>
            <h2 className='text-[32px] font-bold'>Giáo trình</h2>
            <p className='px-[30px] text-justify'>Sử dụng giáo trình độc quyền cùng với ứng dụng học tập của Ferris Wheel để con có thể vui chơi và học tập.</p>
          </div>
        </div>
        <div className='flex justify-center mb-[40px]'>
          <div className='text-center text-white w-[360px] bg-[#45b3df] py-[20px] rounded-[20px] mx-[30px]'>
            <div className='flex justify-center'>
              <img alt='' src='/images/info-box_01-2.webp' className=''/>
            </div>
            <h2 className='text-[32px] font-bold'>Ứng dụng</h2>
            <p className='px-[30px] text-justify'>Được học qua trò chơi, học mà chơi chơi mà học kết hợp luyện luyện nghe và phát âm qua các bài hát…</p>
          </div>
        </div>
        <div className='flex justify-center mb-[40px]'>
          <div className='text-center text-white w-[360px] bg-[#fdc563] py-[20px] rounded-[20px] mx-[30px]'>
            <div className='flex justify-center'>
              <img alt='' src='/images/info-box_01-3.webp' className=''/>
            </div>
            <h2 className='text-[32px] font-bold'>Hoạt động</h2>
            <p className='px-[30px] text-justify'>Cung cấp sân chơi vui nhộn, năng động giúp các con có môi trường tiếp xúc với tiếng Anh.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
