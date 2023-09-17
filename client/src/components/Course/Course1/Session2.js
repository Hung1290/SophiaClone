import React from 'react'

export const Session2 = () => {
  return (
    <div className='min-h-[400px] lg:h-[800px] w-full bg-[url("https://sec-vietnam.edu.vn/wp-content/uploads/2023/04/banner-playgroup.webp")] bg-no-repeat bg-cover'>
      <div className='flex items-center h-full'>
        <div className='w-4/5 mx-auto'>
          <h2 className='text-[#12265a] text-[70px] font-black'>HỌC & CHƠI!</h2>
          <div className='flex'>
            <p className='text-[#7a7a7a] lg:w-[40%] text-[18px]'>Khóa học <strong>Tiếng Anh Mẫu Giáo (PlayGroup)</strong> là khóa học tiếng Anh dành cho các bé từ 2 – 4 tuổi đầu tiên ở Đà Nẵng.  Giúp bé làm quen với tiếng Anh thông qua phương pháp giảng dạy phong phú và hoạt động vui nhộn.</p>
            <div className='lg:w-[60%]'></div>
          </div>
          <div className='mt-[18px]'>
            <button className='text-[#fff] font-extrabold bg-[#ffc85b] px-[20px] py-[8px] rounded-[60px] border-2 border-dashed border-[#fff] c1-session2'><a href='#'>Đăng kí ngay</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}
