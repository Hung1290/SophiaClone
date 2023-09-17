import React from 'react'
import { FaLandmark, FaRegPaperPlane, FaBrain, FaCubes } from 'react-icons/fa'

const items = [
    {
      heading: 'HỆ THỐNG',
      description: 'SOPHIA ứng dụng các công nghệ hỗ trợ học tập giúp các bạn học viên có thể chủ động trong việc học tập.',
      icon: <FaLandmark/>
    },
    {
      heading: 'MÔI TRƯỜNG',
      description: 'Tại SOPHIA các bạn học viên sẽ dùng 100% tiếng Anh, giúp khả năng sử dụng tiếng Anh của các bạn phát triển tốt hơn.',
      icon: <FaRegPaperPlane/>
    },
    {
      heading: 'KÍCH THÍCH TƯ DUY',
      description: 'Chương trình học tiếng Anh thiếu niên sẽ giúp kích thích tư duy và khơi dậy khả năng suy luận trên nền tảng kiến thức của các học viên.',
      icon: <FaBrain/>
    },
    {
      heading: 'CHUYÊN NGHIỆP',
      description: 'Với hơn 10 trong nghề SOPHIA luôn đem lại cho các bạn học viên một quy trình học tập và rèn luyện thực sự rõ ràng.',
      icon: <FaCubes/>
    }
  ]

export const Session1 = () => {
  return (
    <div className='bg-[url("https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/SOPHIA-ENGLISH-CENTER-5-min-min.jpg")] bg-cover bg-no-repeat lg:h-[600px] sm:h-[300px] h-[200px] bg-center relative mb-[520px] md:mb-[220px] lg:mb-[0px]'>
        <div className='flex justify-center'>
            <div className='absolute lg:bottom-[-100px] md:bottom-[-320px] bottom-[-620px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-[90%]'>
                {items.map((item, index) => (
                    <div key={index} className='p-[24px] mx-[12px] bg-white rounded-[6px] c2-session1 text-center mb-[20px]'>
                        <div className='mb-[16px] flex justify-center'>       
                            <div className='text-[50px] text-[#cf0f0f]'>{item.icon}</div>
                        </div>
                        <p className='text-[17px] text-[#0b163f] font-semibold mb-[8px]'>{item.heading}</p>
                        <p className='text-[#575757]'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
