import React from 'react'
import { PiNotePencil, PiShareNetworkFill } from 'react-icons/pi'
import { FaPeopleArrows, FaCloud, FaHandshake } from 'react-icons/fa'
import { RiSettings2Line } from 'react-icons/ri'
import { MdEmojiPeople } from 'react-icons/md'
import { ImEarth } from 'react-icons/im'

const card = [
  {
    icon: <PiNotePencil/>,
    heading: 'Chất lượng giảng dạy đạt chuẩn quốc tế',
    content: 'SOPHIA được tổ chức NEAS chứng nhận chất lượng giảng dạy và dịch vụ đạt chuẩn quốc tế.',
  },
  {
    icon: <FaPeopleArrows/>,
    heading: 'Đội ngũ giảng viên hàng đầu Việt Nam',
    content: 'SOPHIA liên kết đào tạo với The City University of New York (CUNY), Đại học công lập lớn thứ ba.',
  },
  {
    icon: <FaCloud/>,
    heading: 'Tích hợp công nghệ hỗ trợ học tập',
    content: 'Các phần mềm iTools, Oxford Online Practice hỗ trợ tối đa việc học tại lớp và ôn luyện tại nhà.',
  },
  {
    icon: <PiShareNetworkFill/>,
    heading: 'Chương trình học đa dạng',
    content: 'Chương trình học được thiết kế riêng cho từng độ tuổi và nhu cầu từ trẻ em mẫu giáo đến người lớn bận rộn.',
  },
  {
    icon: <ImEarth/>,
    heading: '100% giảng viên quốc tế',
    content: 'Giáo viên giảng dạy tại SOPHIA 100% là giáo viên bản ngữ.',
  },
  {
    icon: <RiSettings2Line/>,
    heading: 'Học tập kết hợp với ngoại khóa',
    content: 'SOPHIA thường có các buổi ngoại khóa kết hợp nhằm tăng hứng thú học tập của các bé.',
  },
  {
    icon: <FaHandshake/>,
    heading: 'Cung cấp các kĩ năng mềm khác',
    content: 'Ở SOPHIA các em không chỉ được học kiến thức mà còn được rèn luyện các kĩ năng mềm.',
  },
  {
    icon: <MdEmojiPeople/>,
    heading: 'Quan tâm từng học viên',
    content: 'Đội ngũ giảng viên và trợ giảng của SOPHIA luôn theo dõi sát sao tình hình học tập của các bạn học viên.',
  }
]

export const Home7 = () => {
  return (
    <div className='pt-[60px]'>
      <div className='p-[15px] w-4/5 mx-auto'>
        <h2 className='flex justify-center text-[40px] text-[#cf0f0f] uppercase mb-[10px] text-center'>SOPHIA – HỆ THỐNG ANH NGỮ CHUẨN QUỐC TẾ</h2>
        <p className='text-center mb-[16px]'>Trung tâm tiếng Anh <strong className='text-[#52525c]'>SOPHIA</strong> không ngừng đào tạo nâng cao nghiệp vụ và ứng dụng Khung Năng Lực Giảng Dạy (Teaching Competency Framework) để kiểm soát chất lượng giảng dạy của từng giáo viên/trợ giảng trong hệ thống.</p>
      </div>
      <div className='flex pb-[60px] w-[90%] mx-auto'>
        <div className='w-[60%] grid grid-cols-2 p-[10px]'>
          {
            card.map((item, index) => (
              <div key={index} className='p-[10px]'>
                <div className='flex p-[20px] shadow-home7 rounded-[10px] h-full'>
                  <div className=''>
                    <div className='text-[32px] text-[#bf0426] bg-[#D922FF1A] p-[16px] mr-[20px] rounded-[6px]'>{item.icon}</div>
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
        <div className='w-[40%] p-[10px]'>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/iKU5UReT670" title="Sophia Talkshow: Cặp đôi cao thủ của SOPHIA chia sẻ cách học IELTS 8.5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
