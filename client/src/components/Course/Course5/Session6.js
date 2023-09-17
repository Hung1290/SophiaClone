import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const list = [
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/ken1-min.jpg',
    heading: 'Thầy cô rất tận tâm',
    description: 'Sau khi học IELTS ở Sophia cả 4 kỹ năng của em đều được cải thiện đáng kể, ở đây cũng thường xuyên tổ chức thi thử để tụi em kiểm tra khả năng của mình.',
    name: 'Ken',
    id: 1
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/Phoenix-min.jpg',
    heading: 'Giảng viên rất thân thiện.',
    description: 'Rất thích cách dạy của các thầy cô, đặc biệt là thầy David. Học phí rất phù hợp , các chị nhân viên nhiệt tình , mình thấy bản thân có tiến bộ rõ ❤️',
    name: 'Phoenix',
    id: 2
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/harryy-min.jpg',
    heading: 'Giảng viên rất thân thiện.',
    description: 'Tại Sophia, giáo viên được tuyển chọn kỹ lưỡng, đảm bảo chất lượng giảng dạy, nhiều cấp độ dành cho mọi độ tuổi, giúp con học tiếng Anh xuyên suốt. Tôi rất hài lòng!',
    name: 'Harry',
    id: 3
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/Jenny-min.jpg',
    heading: 'Chất lượng tuyệt vời.',
    description: 'mình cực kỳ thích môi trường ở SEC, đội ngũ giáo viên hoàn toàn là người nước ngoài, giúp mình sữa lỗi phát âm từng chút một. Thật sự rất có tâm',
    name: 'Jenny',
    id: 4
  }
]

export const Session6 = () => {
  const [showId, setShowId] = useState(1)

  console.log(showId);

  return (
    <div className='w-4/5 mx-auto py-[100px]'>
      <div className='pt-[60px]'>
        <h2 className='flex justify-center uppercase text-[40px] text-[#cf0f0f] mb-[17px] text-center font-bold'>GẶP GỠ CÁC HỌC VIÊN ĐẠT THÀNH TÍCH CAO CỦA SOPHIA</h2>
        <p className='text-center mb-[16px] text-[#52525c]'>Ở SOPHIA các học tuy nhỏ tuổi nhưng đạt các thành tích vô cùng đáng nể với các mức điểm IELTS gần như là tuyệt đối.</p>
      </div>
      <div className=''>
        {
          list.map((item, index) => (
            <div className={item.id === showId ? 'grid md:grid-cols-2 grid-cols-1' : 'hidden'} key={index}>
              <div className='flex items-center pr-[12px] pl-[24px]'>
                <div>
                  <img alt='' src='https://sec-vietnam.edu.vn/wp-content/plugins/quiety-core/elementor/assets/images/watermark.svg' className='mb-[32px] w-[50px]'/>
                  <h3 className='text-[#071c4d] text-[24px] font-bold'>{item.heading}</h3>
                  <div className='flex text-[#ffbc08]'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                  </div>
                  <p className='mt-[16px] text-[#52525c]'>{item.description}</p>
                  <h3 className='mt-[33px] text-[#071c4d] font-semibold'>{item.name}</h3>
                </div>
              </div>
              <div className='pt-[30px] pr-[30px] pl-[12px]'>
                <img alt='' src={item.img} className=''/>
              </div>
            </div>
          ))
        }
      </div>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-[60px]'>
        {
          list.map((item, index) => (
            <div key={index} className={item.id !== showId ? 'flex items-center gap-4 border border-[#6565651A] rounded-[10px] p-[15px] mx-[10px] cursor-pointer mb-[20px]' : 'text-[#175cff] flex items-center gap-4 border border-[#6565651A] rounded-[10px] p-[15px] mx-[10px] cursor-pointer mb-[20px]'} onClick={() => setShowId(item.id)}>
              <img alt='' src={item.img} className='w-[50px] rounded-full'/>
              <p className=''>{item.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
