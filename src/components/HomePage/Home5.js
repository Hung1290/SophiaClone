import React, {useState} from 'react'
import { AiOutlineFolderOpen, AiFillStar } from 'react-icons/ai'
import { GrDiamond } from 'react-icons/gr'
import { PiNotePencil, PiCellSignalFullBold } from 'react-icons/pi'
import { FiArrowRightCircle } from 'react-icons/fi'
import { FaNetworkWired } from 'react-icons/fa'

const list = [
  {
    id: 1,
    icon: <AiOutlineFolderOpen/>,
    heading: 'phương pháp học tập chủ động',
    content: 'Khơi mở khả năng tìm tỏi học hỏi trong con. Giúp con biết cách tìm và giải quyết các vấn đề trong chủ đề học.',
  },
  {
    id: 2,
    icon: <AiFillStar/>,
    heading: 'chất lượng giảng dạy đạt chuẩn quốc tế',
    content: 'Không chỉ học tập truyền thống SOPHIA còn áp dụng learning management system.',
  },
  {
    id: 3,
    icon: <FaNetworkWired/>,
    heading: 'hệ sinh thái học tập toàn diện',
    content: 'Không chỉ học tập truyền thống SOPHIA còn áp dụng learning management system (LMS) vào giảng dạy và học tập để giúp các con học tập hiệu quả hơn.',
  },
  {
    id: 4,
    icon: <GrDiamond/>,
    heading: 'cung cấp nền tảng anh ngữ vững chắc',
    content: 'Với giáo trình chuẩn quốc tế, SOPHIA ENGLISH CENTER cung cấp cho các con một nền tảng vững chắc với lộ trình học rõ ràng, phù hợp với từng bé.',
  },
  {
    id: 5,
    icon: <PiNotePencil/>,
    heading: 'nội dung học tập sinh động, phong phú',
    content: 'Các chủ đề học tập ở SOPHIA lấy các chủ đề gần gũi với các bé. Kích thích tính tò mò, tìm hiểu của các bé một cách tự nhiên nhất.',
  },
  {
    id: 6,
    icon: <PiCellSignalFullBold/>,
    heading: 'phát triển các kĩ năng học tập chuẩn toàn cầu',
    content: 'Tại SOPHIA ENGLISH CENTER các con không chỉ được học ngoại ngữ mà còn được rèn luyện các kĩ năng mềm khác. Giúp các con có thể tự tin hội nhập với bạn bè trong nước và quốc tế',
  },
  {
    id: 7,
    icon: <FiArrowRightCircle/>,
    heading: 'bổ sung kĩ năng mềm',
    content: 'Tại SOPHIA, các thầy cô không chỉ chú trọng giảng giạy kiến thức cho các con mà còn giúp các con rèn luyện, bổ sung các kĩ năng mềm, giúp các con tự tin hơn.',
  }
]

export const Home5 = () => {
  const [showId, setShowId] = useState(0)

  return (
    <div className='pt-[60px] w-4/5 mx-auto'>
      <div className='p-[15px]'>
        <h2 className='flex justify-center text-[40px] text-[#cf0f0f] uppercase mb-[10px] text-center'>TẠI SAO SOPHIA LÀ LỰA CHỌN TỐT NHẤT</h2>
        <p className='text-center mb-[16px]'>Với nhiều năm kinh nghiệm giảng dạy và tinh thần luôn đổi mới, sáng tạo. SOPHIA luôn là sự lựa chọn tốt nhất cho các bé tham gia học tập ngoại ngữ.</p>
      </div>
      <div className='py-[30px]'>
        <div className='flex w-full h-full'>
          <div className='w-[40%] p-[10px]'>
            <img src='/images/Giao_vien_sophia.webp' className='rounded-[20px]'/>
          </div>
          <div className='w-[60%] p-[10px] flex items-center'>
            <ul className='w-full'>
              {list.map((item, index) => (
                <li key={index} className={item.id !== showId ? 'font-semibold text-[18px] uppercase px-[30px] py-[20px] cursor-pointer border-2 border-solid border-[#dee2e6] rounded-[15px] mb-[16px] text-right relative hover:text-[#cf0f0f]' : 'font-semibold text-[18px] uppercase px-[30px] py-[20px] cursor-pointer border-2 border-solid border-[#dee2e6] rounded-[15px] mb-[16px] text-right relative text-[#cf0f0f]'} onClick={() => setShowId(item.id)}>
                  <div className='flex items-center gap-3'>
                    {item.icon}{item.heading}
                  </div>
                  <span className='absolute top-[16px]'>
                  {
                    item.id !== showId ? '+' : '-'
                  }
                  </span>
                  { item.id === showId &&
                    <div className='pt-[20px]'>
                      <p className='text-left text-[#52525C] mb-[15px] text-[16px] normal-case'>{item.content}</p>
                    </div>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
