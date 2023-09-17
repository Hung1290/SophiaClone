import React from 'react'

const list = [
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/confident-min.png',
    heading: 'Cải thiện kĩ năng',
    description: 'Cải thiện 4 kĩ năng nhờ giáo trình giảng dạy chuẩn Cambridge. Giúp bạn tự tin hơn .',
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/contract-min.png',
    heading: 'Cam kết đầu ra',
    description: 'Khi học IELTS tất cả các học viên đều sẽ được cam kết đầu ra đảm bảo đúng theo nguyện vọng của mình.',
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/book-min.png',
    heading: 'Mở rộng kiến thức',
    description: 'Giúp các bạn khơi mở, nắm bắt được các chủ đề, kiến thức khó trong các phần thi IELTS.',
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/conversation-min-1.png',
    heading: 'Khả năng tương tác',
    description: 'Tại SOPHIA các bạn sẽ được học 1 - 1 với giáo viên là người bản xứ nên khả năng tương tác sẽ được cải thiện.',
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/opportunity-min.png',
    heading: 'Nhận nhiều cơ hội',
    description: 'Tại SOPHIA khi các bạn đạt thành tích cao sẽ được SOPHIA hỗ trợ miễn phí xin học bổng toàn phần.',
  },
  {
    img: 'https://sec-vietnam.edu.vn/wp-content/uploads/2022/11/deposit-min.png',
    heading: 'Tiết kiệm thời gian',
    description: 'Các Giảng viên là các thầy cô ở IDP nên việc dạy học rất đúng trọng tâm, không lan man làm mất thời gian của học viên',
  }
]

export const Session5 = () => {
  return (
    <div className='bg-[#fafafa]'>
      <div className='w-4/5 mx-auto'>
        <div className='pt-[60px]'>
          <h2 className='flex justify-center uppercase text-[40px] text-[#cf0f0f] mb-[35px] text-center font-bold'>Bạn nhận được gì sau khi hoàn thành khóa học "Nền Tảng IELTS" ở SOPHIA</h2>
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
