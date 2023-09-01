import React from 'react'
import { FaRegComments, FaRegEnvelope, FaHeadset } from 'react-icons/fa'

const list = [
  {
    icon: <FaRegComments/>,
    heading: 'Chat với SOPHIA',
    content: 'Đội ngũ nhân viên tư vấn luôn túc trực sẵn sàng trả lời với quý khách ngay bất cứ lúc nào.',
    contact: 'Chat ngay',
  },
  {
    icon: <FaRegEnvelope/>,
    heading: 'Email cho SOPHIA',
    content: 'Nếu có bất cứ vấn đề gì cần liên hệ. Quý khách chỉ có thể gửi mail cho SOPHIA. Các bạn nhân viên sẽ trả lời ngay khi nhận được thông tin.',
    contact: 'Gửi ngay',
  },
  {
    icon: <FaHeadset/>,
    heading: 'Gọi cho SOPHIA',
    content: 'Khi phát sinh câu hỏi quý khách chỉ cần liên hệ số điện thoại dưới đây. Sẽ luôn có các bạn nhân viên sẵn sàng nghe máy.',
    contact: '0918-570-775',
  },
]

export const Contact2 = () => {
  return (
    <div className='w-4/5 mx-auto pt-[120px] pb-[90px]'>
      <div className='grid grid-cols-3'>
        {
          list.map((item, index) => (
            <div key={index} className='bg-[#f5f5f5] rounded-[15px] p-[40px] mx-[15px] text-center'>
              <div className='flex justify-center'>
                <div className='bg-[#cf0f0f] rounded-full p-[22px] text-[30px] text-white mb-[30px]'>{item.icon}</div>
              </div>
              <h2 className='text-[#071c4d] text-[20px] mb-[7px] font-semibold'>{item.heading}</h2>
              <p className='text-[#52525c] mb-[30px]'>{item.content}</p>
              <div className='flex justify-center items-center pb-[20px]'>
								<a className='bg-[#cf053a] rounded-[5px] border-2 border-solid border-[#cf0f0f] px-[30px] py-[15px] hover:text-[#CF0F0F] hover:bg-white text-white cursor-pointer'>
									<span>{item.contact}</span>
								</a>
							</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
