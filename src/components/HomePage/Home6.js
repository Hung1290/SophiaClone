import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import Slider from 'react-slick'
import quotesdot from '../../assets/svg/quotesdot.svg'
import quotes from '../../assets/svg/quotes.svg'

const socialCard = [
  {
    img: '/images/ngovanchien.webp',
    name: 'Ngô Văn Chiến',
    position: 'Phụ huynh bé Ken',
    content: 'Tôi rất thích môi trường ở SOPHIA, đội ngũ giáo viên hoàn toàn là người nước ngoài, rất tận tình quan tâm chăm sóc bé Ken sữa lỗi phát âm từng chút một. Thật sự rất có tâm',
  },
  {
    img: '/images/ngoquyetchien.webp',
    name: 'Nguyễn Hữu Tú',
    position: 'Phụ huynh bé Henry',
    content: 'Cảm ơn các thầy cô ở SOPHIA đặc biệt là thầy David đã giúp bé PHOENIX đạt được điểm số 8.5 IELTS vượt qua cả kì vọng của bố mẹ.',
  },
  {
    img: '/images/Queen_compress.webp',
    name: 'Queen',
    position: 'Học viên',
    content: 'Sau khi học IELTS ở trung tâm tiếng Anh Sophia cả 4 kỹ năng của em đều được cải thiện đáng kể, ở đây cũng thường xuyên tổ chức thi thử để tụi em kiểm tra khả năng của mình.',
  }
]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};

export const Home6 = () => {
  return (
    <div className='pt-[115px] pb-[100px]'>
      <div className='w-4/5 mx-auto'>
        <div className='mb-[20px]'>
          <h2 className='flex justify-center text-[40px] text-[#cf0f0f] mb-[17px] text-center'>Phụ huynh và học sinh nói gì về SOPHIA
          </h2>
          <p className='text-center mb-[16px]'>SOPHIA xin chân thành cảm ơn tất cả các bậc phụ huỳnh và các em học sinh đã tin tưởng và đồng hành cùng SOPHIA trong hơn 10 năm qua. Dưới đây là một số nhận xét của các phụ huynh và học sinh về SOPHIA.</p>
        </div>
        <div className='p-[15px]'>
          <Slider {...settings}>
            {socialCard.map((item, index) => (
              <div key={index} className='w-[470px]'>
                <div className='pt-[50px] pb-[43px] px-[50px] my-[25px] mx-[15px] rounded-[15px] bg-white shadow-home6 relative z-[2]'>
                  <img src={quotesdot} className='w-[60px] absolute left-[25px] top-[25px] z-[-1]'/>
                  <img src={quotes} className='w-[130px] absolute bottom-[50px] right-[20px] z-[-1]'/>
                  <div className='w-full h-[60px] flex mb-[28px]'>
                    <img src={item.img} className='w-[60px] h-[60px] rounded-[6px] mr-[20px]'/>
                    <div>
                      <p className='text-[#071c4d] font-bold text-[18px]'>{item.name}</p>
                      <p className='text-[#575757]'>{item.position}</p>
                    </div>
                  </div>
                  <p className='mb-[26px] text-[#52525C]'>{item.content}</p>
                  <div className='flex text-[#ffbc08]'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
