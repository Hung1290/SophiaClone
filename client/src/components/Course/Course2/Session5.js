import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

export const Session5 = () => {
  return (
    <div className='w-4/5 py-[100px] mx-auto grid lg:grid-cols-2 grid-cols-1'>
      <div className='p-[15px] flex items-center'>
        <img alt='' src='https://sec-vietnam.edu.vn/wp-content/uploads/2023/02/bg_section.png' className=''/>
      </div>
      <div className='p-[15px]'>
        <h2 className='text-[40px] font-bold text-[#CF0F0F]'>ĐỘI NGŨ GIẢNG VIÊN NƯỚC NGOÀI VỚI HƠN 10 NĂM KINH NGHIỆM</h2>
        <p className='text-[#575757] mb-[36px]'>Với kinh nghiệm giảng dạy lâu năm của đội ngủ giảng viên. Trong khóa học <strong>tiếng Anh mầm non</strong> này các em sẽ được học tiếng Anh theo lộ trình bài bản theo chuẩn quốc tế, các giáo viên và trợ giảng luôn luôn quan tâm và để ý tới từng bé trong lớp để giúp đỡ và kèm cặp bé trong từng buổi học.</p>
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <div className='flex items-center pr-[30px] mb-[20px] md:mb-[0px]'>
            <div className='p-[16px] mr-[20px] c2-session5 rounded-full'>
              <img alt='' src='https://quiety-wp.themetags.com/wp-content/uploads/2022/01/pie-chart.png' className='w-[32px]'/>
            </div>
            Kinh nghiệm giảng dạy
          </div>
          <div className='flex items-center pr-[30px]'>
            <div className='p-[16px] mr-[20px] c2-session5 rounded-full'>
              <img alt='' src='https://quiety-wp.themetags.com/wp-content/uploads/2022/01/team.png' className='w-[32px]'/>
            </div>
            Hoạt động học tập
          </div>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 my-[30px]'>
          <div className=''>
            <p className='flex mb-[6px]'>
              <div>
                <div className='text-[#175cff] bg-[rgba(23,92,255,.102)] rounded-full'>
                  <AiOutlineCheck/>
                </div>
              </div>
            Hơn 10 năm kinh nghiệm</p>
            <p className='flex mb-[6px]'>
              <div>
                <div className='text-[#175cff] bg-[rgba(23,92,255,.102)] rounded-full'>
                  <AiOutlineCheck/>
                </div>
              </div>
            100% giáo viên nước ngoài</p>
            <p className='flex mb-[6px]'>
              <div>
                <div className='text-[#175cff] bg-[rgba(23,92,255,.102)] rounded-full'>
                  <AiOutlineCheck/>
                </div>
              </div>
            Đội ngũ trợ giảng hỗ trợ</p>
          </div>
          <div className=''>
            <p className='flex mb-[6px]'>
              <div>
                <div className='text-[#175cff] bg-[rgba(23,92,255,.102)] rounded-full'>
                  <AiOutlineCheck/>
                </div>
              </div>
            Học tập kết hợp với các hoạt động ngoại khóa</p>
            <p className='flex mb-[6px]'>
              <div>
                <div className='text-[#175cff] bg-[rgba(23,92,255,.102)] rounded-full'>
                  <AiOutlineCheck/>
                </div>
              </div>
            Phát triển kĩ năng mềm</p>
          </div>
        </div>
        <div className='flex items-center pb-[20px]'>
          <a className='bg-[#cf053a] rounded-[5px] border-2 border-solid border-[#cf0f0f] px-[30px] py-[15px] hover:text-[#CF0F0F] hover:bg-white text-white cursor-pointer' href='#'>
            <span>Xem thêm</span>
          </a>
				</div>
      </div>
    </div>
  )
}
