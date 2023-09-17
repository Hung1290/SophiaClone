import React from 'react'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {FaSchool, FaBook, FaPiggyBank} from 'react-icons/fa'
import {GiHandBag, GiPartyPopper} from 'react-icons/gi'

const list = [
  {
    icon: <HiOutlineDesktopComputer/>,
    heading: 'CHỌN NGÀNH',
    description: 'Xác định ngành học là bước đầu tiên và quan trọng nhất thực hiện mục tiêu tương lai. SOPHIA sẽ giúp bạn chọn được ngành học phù hợp dựa trên sở thích, nhu cầu học tập, năng lực bản thân, điều kiện tài chính, thị trường lao động,…',
  },
  {
    icon: <FaSchool/>,
    heading: 'CHỌN TRƯỜNG',
    description: 'Tiếp sau giai đoạn chọn ngành thì sẽ đến giai đoạn chọn trường. Bạn nên chọn trường phù hợp với bản thân mình: phù hợp ngành học, phù hợp khả năng học tập và tài chính,… để đảm bảo kết quả học tập thật tốt.',
  },
  {
    icon: <FaBook/>,
    heading: 'HỒ SƠ VÀ THỦ TỤC',
    description: 'Chặng đường chuẩn bị trước du học, quá trình thủ tục, hồ sơ visa, nhập học, chứng minh tài chính, … được xem là khó nhất. SOPHIA sẽ luôn sát cánh, hướng dẫn chi tiết để bạn có thể hoàn thành thành công thủ tục.',
  },
  {
    icon: <FaPiggyBank/>,
    heading: 'KẾ HOẠCH TÀI CHÍNH',
    description: 'Đi du học đồng nghĩa với việc tốn rất nhiều chi phí. Vì thế, việc lập kế hoạch tài chính rõ ràng, khoa học sẽ giúp cho quá trình học tập của bạn suôn sẻ hơn và không có nguy cơ gián đoạn.',
  },
  {
    icon: <GiHandBag/>,
    heading: 'CHUẨN BỊ',
    description: 'Từ chuẩn bị những kỹ năng sống, chỗ ở, khám sức khỏe, bảo hiểm du học, phúc lợi sinh viên, … cho đến việc đặt vé máy bay luôn là mối quan tâm lớn. SOPHIA sẽ hỗ trợ bạn “tất tần tật” dù là điều nhỏ bé hay to lớn đến đâu.',
  },
  {
    icon: <GiPartyPopper/>,
    heading: 'ĐẾN CHÂN TRỜI MỚI',
    description: 'Vậy là cuối cùng bạn đã đặt chân tới chân trời mơ ước. Nhưng đừng quá lo lắng, SOPHIA sẽ luôn sát cánh cùng bạn khi bạn gặp khó khăn. Hãy nhớ rằng những trải nghiệm du học mới chỉ bắt đầu mà thôi…',
  }
]

export const Session2 = () => {
  return (
    <div className='w-4/5 mx-auto pt-[60px]'>
      <div className='p-[15px]'>
        <h2 className='flex justify-center text-[40px] text-[#cf0f0f] uppercase mb-[10px] text-center font-bold'>DU HỌC CÙNG SOPHIA</h2>
        <p className='text-center mb-[16px]'>Chuẩn bị các bước trước khi du học là một chặng đường gian nan và SOPHIA sẽ đồng hành cùng bạn xuyên suốt chặng đường đó.</p>
      </div>
      <div className='pb-[30px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {
          list.map((item, index) => (
            <div key={index} className='px-[30px] pt-[40px] pb-[45px] mx-[15px] mb-[30px] c2-session4 rounded-[15px]'>
              <div className='flex items-center justify-center mb-[20px] text-[82px] text-[#cf0f0f]'>
                {item.icon}
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
