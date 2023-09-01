import React from 'react'
import CountUp from 'react-countup';

export const AboutUs2 = () => {
  return (
    <div className='w-4/5 mx-auto py-[100px]'>
      <div className='flex'>
        <div className='mx-[15px]'>
          <img alt='' src='/images/SOPHIA-ENGLISH-CENTER-2-min.jpg' className='w-full h-full rounded-[10px]'/>
        </div>
        <div className='pr-[15px] pl-[17px]'>
          <h2 className='mb-[17px] uppercase text-[40px] font-bold text-[#cf0f0f]'>Đôi nét về CEO & Founder: Ông David James</h2>
          <p className='text-[#52525c] mb-[36px]'>Ông David James có xuất thân từ gia đình có truyền thống học tập và nghiên cứu với bố mẹ của ông David là giảng viên ngành ngôn ngữ học tại đại học Cambridge và có nhiều nghiên cứu khóa học. Ông David có niềm đam mê với ngành ngôn ngữ, xuất phát từ đam mê cũng như truyền thống nghiên cứu, giảng dạy của gia đình ông David đã thành lập nên trung tâm tiếng anh SOPHIA vào năm 2013 với mong muốn truyền tải được động lực học tập, kiến thức và cơ hội phát triển đối với các nước còn yếu tiếng Anh nói chung và Việt Nam nói riêng.</p>
          <div className='flex'>
            <div className='shadow-aboutus2 rounded-[6px] p-[30px] mr-[15px]'>
              <div className='text-[#175cff] text-[36px] font-bold mb-[6px]'>
                <CountUp end={12} duration={5}/>
                <span>+</span>                
              </div>
               <h3 className='text-[#071c4d] mb-[7px] font-semibold'>Kinh nghiệm giảng dạy</h3>
               <p className='text-[#666666]'>David hiện đang là thạc sĩ ngành ngôn ngữ học tại đại học Southampton, đã dạy tại Việt Nam từ năm 2010.</p>             
            </div>
            <div className='shadow-aboutus2 rounded-[6px] p-[30px] ml-[15px]'>
              <div className='text-[#175cff] text-[36px] font-bold mb-[6px]'>
                <CountUp end={1000} duration={5}/>
                <span>+</span>  
              </div>
               <h3 className='text-[#071c4d] mb-[7px] font-semibold'>Học viên IELTS</h3>
               <p className='text-[#666666]'>Đã giảng dạy và hỗ trợ hơn 1.000 học viên để đạt được mục tiêu IELTS như mong muốn của các bạn.</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
