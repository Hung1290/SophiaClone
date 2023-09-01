import React from 'react'
import { FaHandshake } from 'react-icons/fa'
import { FiGitCommit, FiHeart, FiShield } from 'react-icons/fi'

export const AboutUs4 = () => {
  return (
    < div className='bg-[#f8f9fa]'>
      <div className='w-4/5 mx-auto py-[120px]'>
        <div className='flex'>
          <div className='pl-[15px] pr-[65px]'>
            <h2 className='mb-[17px] uppercase text-[40px] font-bold text-[#cf0f0f]'>Giá trị cốt lõi của SOPHIA</h2>
            <p className='text-[#52525c] mb-[36px]'>Tồn tại và phát triển hơn 10 năm qua, để có được ngày hôm nay SOPHIA đã luôn tuân theo các giá trị cốt lõi mà SOPHIA đã đề ra ngay từ những ngày đầu thành lập đó là:</p>
            <div className='flex mb-[33px]'>
              <div>
                <div className='text-[22px] p-[15px] rounded-[5px] mr-[20px] text-white bg-[#175cff]'>
                  <FiGitCommit/>
                </div>
              </div>
              <div>
                <h3 className='text-[20px] text-[#071c4d] font-semibold uppercase mb-[7px]'>SỰ CAM KẾT</h3>
                <p className='text-[#52525c]'>Đến với SOPHIA các học viên luôn được cam kết đầu ra phù hợp với từng khóa học. SOPHIA luôn luôn đề cao chất lượng hơn số lượng.</p>
              </div>
            </div>
            <div className='flex mb-[33px]'>
              <div>
                <div className='text-[22px] p-[15px] rounded-[5px] mr-[20px] text-white bg-[#f25767]'>
                  <FiHeart/>
                </div>
              </div>
              <div>
                <h3 className='text-[20px] text-[#071c4d] font-semibold uppercase mb-[7px]'>SỰ TẬN TÂM</h3>
                <p className='text-[#52525c]'>Ở SOPHIA các thầy cô giáo và các trợ giảng luôn tận tình quan tâm, hướng dẫn các bạn học viên một cách nhiệt thành nhất. Luôn để ý tới từng sự thay đổi của các bạn học viên để có sự điều chỉnh kịp thời.</p>
              </div>
            </div>
            <div className='flex mb-[33px]'>
              <div>
                <div className='text-[22px] p-[15px] rounded-[5px] mr-[20px] text-white bg-[#0b163f]'>
                  <FaHandshake/>
                </div>
              </div>
              <div>
                <h3 className='text-[20px] text-[#071c4d] font-semibold uppercase mb-[7px]'>SỰ THÂN THIỆN</h3>
                <p className='text-[#52525c]'>Với các thầy cô giáo ở SOPHIA, các bạn học viên như những người thân của các thầy cô. Các bạn học viên luôn nhận được sự quan tâm, chia sẽ của các thầy cô.</p>
              </div>
            </div>
            <div className='flex mb-[33px]'>
              <div>
                <div className='text-[22px] p-[15px] rounded-[5px] mr-[20px] text-white bg-[#d96941]'>
                  <FiShield/>
                </div>
              </div>
              <div>
                <h3 className='text-[20px] text-[#071c4d] font-semibold uppercase mb-[7px]'>SỰ TÔN TRỌNG</h3>
                <p className='text-[#52525c]'>Khi đến với SOPHIA, các học viên và phụ huynh hoàn toàn đều nhận được sự quan tâm như nhau. Khi đã học tập ở SOPHIA các bạn đều là thành viên của SOPHIA và sẽ nhận được các sự tôn trọng như nhau</p>
              </div>
            </div>
          </div>
          <div className='pr-[15px] pl-[17px]'>
            <img alt='' src='/images/Giao_vien_sophia.webp' className='rounded-[15px] w-full'/>
          </div>
        </div>
      </div>
    </div>
  )
}
