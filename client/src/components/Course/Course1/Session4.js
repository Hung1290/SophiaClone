import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export const Session4 = () => {
  return (
    <div>
      <div className='bg-[#fcf9f4]'>
        <div className='grid md:grid-cols-2 grid-cols-1 mx-auto w-4/5 py-[100px]'>
          <div className=''>
            <img alt='' src='/images/home-1_section_01_2.webp' className=''/>
          </div>
          <div className='md:pl-[50px] flex items-center'>
            <div>
              <h2 className='text-[#12265a] text-[38px] font-black'>
                Tại sao<br/>
                Cho con học tiếng Anh từ sớm
              </h2>
              <p className='text-[#7a7a7a] text-[18px] text-justify'>Độ tuổi từ 2 – 4 tuổi là giai đoạn vàng vô cùng quan trọng trong việc hình thành và phát triển khả năng ngôn ngữ của các con. Giúp trẻ được tiếp cận tiếng Anh một cách tự nhiên, kích hoạt tin thần học hỏi và chuẩn bị tâm thế vững chắc trước khi bước vào các chương trình học khác.</p>
              <div className='mt-[36px]'>
                <button className='text-[#fff] font-extrabold bg-[#ffc85b] px-[20px] py-[8px] rounded-[60px] border-2 border-dashed border-[#fff] c1-session2'><a href='#' className='flex items-center gap-2'>Đăng kí <FaArrowRight/></a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#88d4f2]'>
        <div className='mx-auto w-4/5 grid md:grid-cols-4 grid-cols-2 py-[100px]'>
          <div className='text-center text-white font-extrabold'>
            <div className='text-[46px]'>10 +</div>
            <div className=''>Năm kinh nghiệm</div>
          </div>
          <div className='text-center text-white font-extrabold'>
            <div className='text-[46px]'>100 %</div>
            <div className=''>Giáo viên bản xứ</div>
          </div>
          <div className='text-center text-white font-extrabold'>
            <div className='text-[46px]'>5</div>
            <div className=''>Lớp học</div>
          </div>
          <div className='text-center text-white font-extrabold'>
            <div className='text-[46px]'>50 +</div>
            <div className=''>Học sinh</div>
          </div>
        </div>
      </div>
    </div>
  )
}
