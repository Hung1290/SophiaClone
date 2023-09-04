import React from 'react'

export const AboutUs1 = () => {
  return (
    <div className='bg-[#fafafa] bg-[url("https://quiety-wp.themetags.com/wp-content/uploads/2021/10/page-header-bg.svg")] bg-no-repeat bg-center'>
      <div className='w-4/5 mx-auto'>
        <div className='md:flex pt-[16px]'>
          <div className='px-[15px] flex-1'>
            <h2 className='mb-[17px] uppercase text-[40px] font-bold'>SOPHIA ENGLISH CENTER</h2>
            <p className='text-[18px] mb-[38px]'>Với hơn 10 kinh nghiệm trong việc dạy tiếng Anh, SOPHIA sẽ đem lại cho các học viên, các bậc phụ huynh một trải nghiệm tốt nhất cùng với một mức học phí cạnh tranh.</p>
            <div className='text-center md:text-left'>
              <a className='text-[15px] px-[33px] py-[9px] text-white hover:text-[#cf0f0f] hover:bg-white bg-[#cf0f0f] border-2 border-solid
              border-[#cf0f0f] rounded-[6px] cursor-pointer'>
                Đội ngũ giảng viên
              </a>
            </div>
          </div>
          <div className='px-[15px] md:flex-1 pt-[38px]'>
            <img alt='' src='/images/coursecard3.jpg' className='rounded-[15px] w-full h-[380px]'/>
          </div>
        </div>
        <div className='md:flex pt-[50px] pb-[16px]'>
          <div className='md:w-[40%] px-[15px] md:relative md:top-[-80px]'>
            <img alt='' src='/images/coursecard4.webp' className='rounded-[15px]'/>
          </div>
          <div className='md:w-[60%] px-[15px] mt-[50px]'>
            <img alt='' src='/images/coursecard2.webp' className='rounded-[15px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}
