import React from 'react'
import {FaIdCard, FaHandshake, FaMoneyCheckAlt, FaPlane, FaLanguage, FaRegClock} from 'react-icons/fa'

const list = [
  {
    icon: <FaIdCard/>,
    heading: '90% tỉ lệ visa thành công',
    content: 'Hỗ trợ thủ tục, hồ sơ visa nhanh chóng, tỉ lệ thành công lên đến 95%.',
  },
  {
    icon: <FaHandshake/>,
    heading: 'Liên kết chặt chẽ',
    content: 'Liên kết chặt chẽ với 500+ các trường THPT, đại học, … ở các nước sở tại.',
  },
  {
    icon: <FaMoneyCheckAlt/>,
    heading: 'Cập nhật học bổng liên tục',
    content: 'Thường xuyên cập nhật các học bổng du học từ 30 – 100% nhanh chóng.',
  },
  {
    icon: <FaPlane/>,
    heading: 'Đồng hành xuyên suốt',
    content: 'Các chuyên gia tư vấn du học sẽ hỗ trợ bạn xuyên suốt trong quá trình du học.',
  },
  {
    icon: <FaLanguage/>,
    heading: 'Đào tạo tiếng Anh',
    content: 'Tư vấn lộ trình và đào tạo ngoại ngữ để đạt yêu cầu hồ sơ du học.',
  },
  {
    icon: <FaRegClock/>,
    heading: 'Tiết kiệm thời gian',
    content: 'Tiết kiệm lên đến 50% thời gian về chọn trường; thủ tục Visa; xin học bổng,…',
  }
]

export const Session3 = () => {
  return (
    <div className='bg-[#fafafa] pt-[60px]'>
      <div className='w-4/5 mx-auto'>
        <div className='p-[15px] mb-[40px]'>
          <h2 className='flex justify-center text-[40px] text-[#cf0f0f] uppercase mb-[10px] text-center font-bold'>DU HỌC CÙNG SOPHIA</h2>
          <p className='text-center mb-[16px]'>Chuẩn bị các bước trước khi du học là một chặng đường gian nan và SOPHIA sẽ đồng hành cùng bạn xuyên suốt chặng đường đó.</p>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <div className=''>
            {
              list.map((item, index) => (
                <div key={index} className='flex items-center mb-[20px]'>
                  <div className='mr-[20px]'>
                    <div className='text-[32px] text-white bg-[#e97777] rounded-full p-[16px]'>{item.icon}</div>
                  </div>
                  <div className=''>
                    <h3 className='mb-[7px] font-semibold text-[20px] text-[#071c4d]'>{item.heading}</h3>
                    <p className='text-[#52525c]'>{item.content}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='flex justify-center'>
            <img alt='' src='https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/duhocmy2-800x1024.png' className='h-[72vh]'/>
          </div>
        </div>
      </div>
    </div>
  )
}
