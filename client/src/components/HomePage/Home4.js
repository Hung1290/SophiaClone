import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'


export const Home4 = () => {

  const [ id, setId ] = useState(1)
  
  const handleShowMethod = () => {
    setId(1)
  }
  
  const handleShowTechnology = () => {
    setId(2)
  }
  
  const handleShowRoute = () => {
    setId(3)
  }



  return (
    <div className='pt-[115px] pb-[120px] bg-[#f8f9fa]'>
      <div className='w-4/5 mx-auto'>
        <div className='mb-[20px]'>
          <h2 className='flex justify-center text-[40px] text-[#cf0f0f] uppercase mb-[17px] text-center font-bold'>GIÁ TRỊ CỐT LÕI SOPHIA MANG LẠI CHO PHỤ HUYNH VÀ HỌC SINH
          </h2>
          <p className='text-center mb-[16px]'>Với việc ứng dụng công nghệ vào giảng dạy kết hợp với các phương pháp học mới, được thiết kế để phù hợp với từng năng lực của các bạn học sinh.</p>
        </div>
        <div className='mt-[60px]'>
          <ul className='flex flex-row flex-wrap justify-center gap-4'>
            <li className={id === 1 ? 'flex flex-row items-center py-[8px] px-[24px] bg-[#175cff] border-2 border-solid border-[rgba(216,216,216,.2)] rounded-lg text-white cursor-pointer' : 'flex flex-row items-center py-[8px] px-[24px] border-2 border-solid border-[rgba(216,216,216,.2)] rounded-lg hover:text-[#175cff] cursor-pointer'} onClick={handleShowMethod}>
              <AiFillStar/> <span className='ml-[8px]'>Phương pháp</span>
            </li>
            <li className={id === 2 ? 'flex flex-row items-center py-[8px] px-[24px] bg-[#175cff] border-2 border-solid border-[rgba(216,216,216,.2)] rounded-lg text-white cursor-pointer' : 'flex flex-row items-center py-[8px] px-[24px] border-2 border-solid border-[rgba(216,216,216,.2)] rounded-lg hover:text-[#175cff] cursor-pointer'} onClick={handleShowTechnology}>
              <AiFillStar/> <span className='ml-[8px]'>Công nghệ</span>
            </li>
            <li className={id === 3 ? 'flex flex-row items-center py-[8px] px-[24px] bg-[#175cff] border-2 border-solid border-[rgba(216,216,216,.2)] rounded-lg text-white cursor-pointer' : 'flex flex-row items-center py-[8px] px-[24px] border-2 border-solid border-[rgba(216,216,216,.2)] rounded-lg hover:text-[#175cff] cursor-pointer'} onClick={handleShowRoute}>
              <AiFillStar/> <span className='ml-[8px]'>Lộ trình</span>
            </li>
          </ul>
          {
            id === 1 && 
            <div className='mt-[50px] grid grid-cols-1 md:grid-cols-2'>
              <div className='flex items-center'>
                <div className='px-[12px]'>
                  <h3 className='mb-[15px] text-[30px] font-bold'>Phương pháp học</h3>
                  <div className='text-[18px] text-[#52525C] leading-8'>
                    <p>Ở <strong>SOPHIA</strong> các học viên sẽ được học tiếng Anh theo một cách tự nhiên nhất. Các em sẽ được học theo các chương trình chuẩn <strong>Cambridge</strong> với các giáo viên bản ngữ. Khi học ở Trung tâm tiếng Anh <strong>SOPHIA </strong>các em không chỉ học tiếng Anh mà các em còn được đào tạo các kĩ năng mềm giúp các em có thể tự tin, mạnh dạn hơn trong tương lai.</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center px-[12px]'>
                <img src='/images/coursecard1.webp' className='w-full h-auto'/>
              </div>
            </div>
          }
          {
            id === 2 && 
            <div className='mt-[50px] grid grid-cols-1 md:grid-cols-2'>
              <div className='flex items-center px-[12px]'>
                <img src='/images/widget-8.png' className='w-full h-auto'/>
              </div>
              <div className='flex items-center'>
                <div className='px-[12px]'>
                  <h3 className='mb-[15px] text-[30px] font-bold'>Ứng dụng công nghệ vào giảng dạy và học tập</h3>
                  <div className='text-[18px] text-[#52525C] leading-8'>
                    <p>Với xu thế hiện nay cùng với sự phát triển mạnh mẽ của internet, Không nằm ngoài sự phát triển đó Trung tâm tiếng Anh <strong>SOPHIA</strong>&nbsp;cũng đang áp dụng <strong>L</strong><strong>earning management system (LMS)</strong> vào công tác giảng dạy của trung tâm để giúp việc học của các em thuận tiện mọi lúc mọi nơi. Ngoài ra còn có đội ngũ trợ giảng sẵn sàng hộ trợ các em qua các hình thức online như Meet, Zoom...</p>
                  </div>
                </div>
              </div>
            </div>
          }
          {
            id === 3 && 
            <div className='mt-[50px] grid grid-cols-1 md:grid-cols-2'>
              <div className='flex items-center'>
                <div className='px-[12px]'>
                  <h3 className='mb-[15px] text-[30px] font-bold'>Lộ trình</h3>
                  <div className='text-[18px] text-[#52525C] leading-8'>
                    <p>Khi vào học tại Trung tâm tiếng Anh <strong>SOPHIA</strong> các học viên đều được đánh giá năng lực và tư vấn kĩ càng để các học viên và phụ huynh có thể chọn được khóa học phù hợp với mình nhất. Mỗi học viên cũng được các giáo viên và trợ giảng theo dõi sát sao trong quá trình học để có những thay đổi kịp thời phù hợp với năng lực các bé.</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center px-[12px]'>
                <img src='/images/coursecard4.webp' className='w-full h-auto'/>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
