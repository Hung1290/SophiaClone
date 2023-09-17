import React from 'react'

const list = [
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/data-management-min.png',
    heading: 'Ứng dụng công nghệ',
    description: 'SOPHIA tích hợp các bài học, quizz... để bé có thể học và ôn tập ở bất cứ đâu và bất cứ lúc nào.'
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/target-min.png',
    heading: 'Cá nhân hóa chương trình',
    description: 'Tùy vào từng độ tuổi và năng lực từng bé SOPHIA sẽ đánh giá và xây dựng lộ trình thích hợp cho từng bé.'
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/iteration-min.png',
    heading: 'Phương pháp học',
    description: 'SOPHIA đang áp dụng các phương pháp học chuẩn quốc tế. Giúp các bé dễ dàng tiếp thu.'
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/navigation-min.png',
    heading: 'Chương trình ngoại khóa',
    description: 'Ngoài các buổi học tập trong lớp, SOPHIA cũng sẽ tổ chức các buổi ngoại khóa để tăng khả năng tiếp thu thực tế và giúp cho các bé dễ dàng tiếp thu.'
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/mentor-min-min.png',
    heading: 'Kèm cặp mọi lúc mọi nơi',
    description: 'Ở SOPHIA đội ngủ giáo viên và trợ giảng sẽ luôn để ý đến từng bé. Luôn luôn cập nhật tất cả tin tức của các bé đến phụ huynh sau mỗi buổi học.'
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/highlighter-min-min.png',
    heading: 'Kết hợp các chủ đề',
    description: 'Giáo trình quốc tế chuẩn Cambridge. Các chủ đề học phù hợp với độ tuổi của các bé, kích thích khả năng học tập chủ động cho các bé sau này.'
  }
]

export const Session6 = () => {
  return (
    <div className='w-4/5 mx-auto'>
      <div className='pt-[60px]'>
        <h2 className='flex justify-center uppercase text-[40px] text-[#cf0f0f] mb-[17px] text-center font-bold'>TẠO NIỀM ĐAM MÊ - BỨT PHÁ GIỚI HẠN</h2>
        <p className='text-center mb-[46px] text-[#52525c]'>3 - 6 tuổi là <strong>giai đoạn vàng</strong> để giúp con làm quen với ngôn ngữ và phát triển nền tảng tư duy. Với phương pháp học chuẩn quốc tế cùng với sự đồng hành của các giảng viên ở SOPHIA sẽ đem lại cho các bé trải nghiệm học tập thú vị và bổ ích.</p>
      </div>
      <div className='pb-[30px] grid md:grid-cols-3 grid-cols-1'>
          {
            list.map((item, index) => (
              <div key={index} className='px-[50px] pt-[45px] pb-[40px] border border-[#ddd]'>
                <div className='flex items-center justify-center'>
                  <img alt='' src={item.img} className='mb-[30px] w-[65px]'/>
                </div>
                <h3 className='text-center text-[#071c4d] mb-[7px] font-semibold'>{item.heading}</h3>
                <p className='text-center text-[#52525c]'>{item.description}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}
