import React from 'react'
import { FaRegUser, FaMedal, FaRegEye, FaBook } from 'react-icons/fa'

const list = [
  {
    icon: <FaRegUser/>,
    heading: 'Từ 3 - 7 tuổi',
    content: 'Phụ huynh tìm kiếm khóa học dành cho các bé có độ tuổi từ 3 – 7 tuổi. Giúp các bé có thể tự tin giao tiếp và có nền tảng kiến thức trong tương lai.',
  },
  {
    icon: <FaMedal/>,
    heading: 'Người chú trọng chất lượng',
    content: 'Muốn tìm cho con một trung tâm chất lượng, giúp con học tập lâu dài, cam kết chất lượng đầu ra. Sẵn sàng hỗ trợ, quan tâm giúp đỡ các con.',
  },
  {
    icon: <FaRegEye/>,
    heading: 'Tìm kiếm môi trường học tập tốt',
    content: 'Cần một môi trường học tập giúp con phát triển các kĩ năng. Nhưng cũng phải phù hợp với lứa tuổi của con, không quá gây áp lực cho con.',
  },
  {
    icon: <FaBook/>,
    heading: 'Giáo trình học tập quốc tế',
    content: 'Giáo trình học tập phải chuẩn quốc tế, được các tổ chức trên thế giới công nhận. Các giáo trình phải có thính thực tế và giúp con phát triển tư duy sáng tạo.',
  },
]

export const Session2 = () => {

  return (
    <div className='pt-[200px] mx-auto w-4/5'>
      <h2 className='flex justify-center text-[40px] text-[#cf0f0f] uppercase mb-[17px] text-center font-bold'>KHÓA HỌC TIẾNG ANH MẦM NON CÓ PHÙ HỢP VỚI BÉ </h2>
      <div className='w-full md:grid md:grid-cols-2 p-[10px]'>
        {
        list.map((item, index) => (
          <div key={index} className='p-[15px]'>
            <div className='flex bg-white p-[50px] rounded-[10px] h-full c2-session2'>
              <div className=''>
                <div className='text-[50px] text-[#cf0f0f] p-[16px] mr-[20px] rounded-[6px]'>{item.icon}</div>
              </div>
              <div className=''>
                <h3 className='text-[20px] mb-[7px] font-semibold'>{item.heading}</h3>
                <p className='text-[#52525C]'>{item.content}</p>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}
