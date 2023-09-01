import React from 'react'
import CountUp from 'react-countup'

export const AboutUs3 = () => {
  return (
    <div className='bg-[url("https://quiety-wp.themetags.com/wp-content/uploads/2021/10/dot-dot-wave-shape-1.svg")] bg-no-repeat bg-bottom'>
      <div className='w-4/5 mx-auto py-[120px]'>
        <div className='flex'>
          <div className='flex-1 mx-[15px]'>
            <table className='flex border-2 border-solid border-[#dee2e6] rounded-[15px] overflow-hidden'>
              <div className='flex flex-col w-full'>
                <div className='px-[30px] pt-[60px] pb-[50px] border-r-2 border-b-2 border-solid border-[#dee2e6] bg-[#f8f9fa]'>
                  <div className='text-[#5cc9a7] text-[46px] font-extrabold'>
                    <CountUp end={10000} duration={5}/>
                    <span>+</span>
                  </div>
                  <p className='text-[#071c4d] mb-[7px] font-semibold'>Học viên</p>
                </div>
                <div className='px-[30px] pt-[60px] pb-[50px] border-r-2 border-b-2 border-solid border-[#dee2e6]'>
                  <div className='text-[#0b163f] text-[46px] font-extrabold'>
                    <CountUp end={100} duration={5}/>
                    <span>%</span>
                  </div>
                  <p className='text-[#071c4d] mb-[7px] font-semibold'>Giáo viên nước ngoài</p>
                </div>
                <div className='px-[30px] pt-[60px] pb-[50px] border-r-2 border-solid border-[#dee2e6] bg-[#f8f9fa]'>
                  <div className='text-[#f25767] text-[46px] font-extrabold'>
                    <CountUp end={100} duration={5}/>
                    <span>%</span>
                  </div>
                  <p className='text-[#071c4d] mb-[7px] font-semibold'>Học viên và phụ huynh hài lòng</p>
                </div>
              </div>
              <div className='flex flex-col w-full'>
                <div className='px-[30px] pt-[60px] pb-[50px] border-b-2 border-solid border-[#dee2e6]'>
                  <div className='text-[#175cff] text-[46px] font-extrabold'>
                    <CountUp end={50} duration={5}/>
                    <span>+</span>
                  </div>
                  <p className='text-[#071c4d] mb-[7px] font-semibold'>Giảng viên và trợ giảng</p>
                </div>
                <div className='px-[30px] pt-[60px] pb-[50px] border-b-2 border-solid border-[#dee2e6] bg-[#f8f9fa]'>
                  <div className='text-[#ffb116] text-[46px] font-extrabold'>
                    <span>+</span>
                    <CountUp end={10} duration={5}/>
                    <span className='ml-[10px]'>Năm</span>
                  </div>
                  <p className='text-[#071c4d] mb-[7px] font-semibold'>Kinh nghiệm giảng dạy</p>
                </div>
                <div className='px-[30px] pt-[60px] pb-[50px]'>
                  <div className='text-[#0b163f] text-[46px] font-extrabold'>
                    <CountUp end={1000} duration={5}/>
                    <span>+</span>
                  </div>
                  <p className='text-[#071c4d] mb-[7px] font-semibold'>Chứng chỉ học viên đạt được</p>
                </div>
              </div>
            </table>
          </div>
          <div className='flex-1 pr-[15px] pl-[17px]'>
            <h2 className='mb-[17px] uppercase text-[40px] font-bold text-[#cf0f0f]'>Lý do SOPHIA được thành lập.</h2>
            <p className='text-[#52525c] mb-[36px]'>Với mục tiêu trở thành hệ thống trung tâm  Anh ngữ tiêu chuẩn hàng đầu ở Đà Nẵng nói riêng và Việt Nam nói chung về đào tạo Tiếng Anh cho các bé và luyện thi IELTS, đưa Việt Nam trở thành một trong những nước nói tiếng Anh chuẩn và thành thạo. Để SOPHIA trong mắt người Việt Nam và bạn bè quốc tế là một thương hiệu về giáo dục uy tín và được nhiều phụ huynh tin chọn.</p>
            <h3 className='text-[#071c4d] mb-[7px] font-semibold'>We Are Awarded By-</h3>
            <div className='flex'>
              <img alt='' src='/images/SOPHIA-ENGLISH-CENTER-9-min.png' className='w-[160px] p-[10px]'/>
              <img alt='' src='/images/SOPHIA-ENGLISH-CENTER-8-min.png' className='w-[160px] p-[10px]'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
