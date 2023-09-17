import React from 'react'

const list = [
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/confident-min.png',
    heading: 'Tự tin hơn',
    description: 'Giúp các con tự tin hơn trong cuộc sống. Tự tin vào bản thân, vững bước tương lai.',
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/talking-min.png',
    heading: 'Giao tiếp bằng tiếng Anh',
    description: 'Giao tiếp được bằng tiếng Anh lưu loát với các bạn học và người nước ngoài ở các ngữ cảnh quen thuộc.',
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/scale-min.png',
    heading: 'Mở rộng vốn từ',
    description: 'Vốn từ vựng của các con sẽ được mở rộng và . Giúp các con dễ dàng học tập hơn trong tương lai.',
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/self-development-min.png',
    heading: 'Phát triển kĩ năng mềm',
    description: 'Giúp con phát triển các kĩ năng mềm khác như kĩ năng tư duy phản biện, kĩ năng giao tiếp...',
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/self-growth-min.png',
    heading: 'Phát triển tư duy',
    description: 'Tạo cho con các nền tảng tư duy sử dụng ngôn ngữ, tư duy giải quyết vấn đề....',
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/brickwall-min.png',
    heading: 'Tạo nền tảng',
    description: 'Giúp các con phát triển nền tảng. Tạo nền móng vững chắc cho các con phát triển sau này.',
  }
]

export const Session4 = () => {
  return (
    <div className='bg-[#fafafa]'>
      <div className='w-4/5 mx-auto'>
        <div className='pt-[60px]'>
          <h2 className='flex justify-center uppercase text-[40px] text-[#cf0f0f] mb-[35px] text-center font-bold'>CON NHẬN ĐƯỢC GÌ SAU KHI HOÀN THÀNH KHÓA HỌC "TIẾNG ANH MẦM NON" Ở SOPHIA</h2>
        </div>
        <div className='pb-[30px] grid md:grid-cols-3 grid-cols-1'>
          {
            list.map((item, index) => (
              <div key={index} className='px-[30px] pt-[40px] pb-[45px] mx-[15px] mb-[30px] c2-session4 rounded-[15px]'>
                <div className='flex items-center justify-center'>
                  <img alt='' src={item.img} className='mb-[20px]'/>
                </div>
                <h3 className='text-center text-[#071c4d] mb-[7px] font-semibold'>{item.heading}</h3>
                <p className='text-center text-[#52525c]'>{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
