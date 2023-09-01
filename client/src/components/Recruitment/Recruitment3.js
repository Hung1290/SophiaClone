import React from 'react'
import { FaBriefcaseMedical, FaHouseUser, FaClock, FaUserFriends } from 'react-icons/fa'

const list = [
    {
      icon: <FaHouseUser/>,
      heading: 'Cơ sở vật chất',
      content: 'Cơ sở vật chất hiện đại, văn phòng làm việc được tích hợp đầy đủ các công cụ hỗ trợ làm việc',
    },
    {
      icon: <FaClock/>,
      heading: 'Giờ làm việc linh hoạt',
      content: 'Giờ làm việc từ 14:00 - 20:30. Ứng viên cũng có thể đề xuất giờ làm để linh hoạt trong công việc.',
    },
    {
      icon: <FaUserFriends/>,
      heading: 'Môi trường trẻ trung',
      content: 'Môi trường làm việc chuyên nghiệp. Đồng nghiệp trẻ trung thân thiện, sẵn sàng hộ trợ mọi người.',
    },
    {
      icon: <FaBriefcaseMedical/>,
      heading: 'Phúc lợi',
      content: 'Được hưởng các phúc lợi theo pháp luật và các phúc lợi cộng thêm cho các ứng viên.',
    },
  ]

export const Recruitment3 = () => {
  return (
    <div className='bg-[#f5f5f5] pt-[115px] pb-[120px]'>
        <div className='w-4/5 mx-auto'>
            <h2 className='mb-[20px] uppercase text-[40px] font-bold text-[#cf0f0f] text-center'>Môi trường làm việc tuyệt vời
            </h2>
            <p className='text-[#52525c] mb-[56px] text-center'>Đến với SOPHIA các ứng viên sẽ được làm việc trong môi trường cực kì chuyên nghiệp với các ưu đại không giới hạn tùy theo năng lực của ứng viên</p>
            <div className='w-full grid grid-cols-2 p-[10px]'>
            {
            list.map((item, index) => (
              <div key={index} className='p-[15px]'>
                <div className='flex bg-white p-[50px] rounded-[10px] h-full'>
                  <div className=''>
                    <div className='text-[32px] text-[#cf0f0f] p-[16px] mr-[20px] rounded-[6px]'>{item.icon}</div>
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
    </div>
  )
}
