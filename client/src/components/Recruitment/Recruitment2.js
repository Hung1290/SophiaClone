import React from 'react'
import { BiSolidBriefcaseAlt2, BiBuilding, BiWallet } from 'react-icons/bi'
import { FaMapMarkerAlt } from 'react-icons/fa'

const list = [
    {
        job: 'Marketing',
        heading: 'Designer & photographer',
    },
    {
        job: 'Sale',
        heading: 'CHĂM SÓC KHÁCH HÀNG',
    },
    {
        job: 'Teaching Assistant',
        heading: 'NHÂN VIÊN TRỢ GIẢNG (Teaching Assistant)',
    },
    {
        job: 'Sale',
        heading: 'NHÂN VIÊN TƯ VẤN TUYỂN SINH',
    },
    {
        job: 'Sale',
        heading: 'SALES MANAGER',
    },
]

export const Recruitment2 = () => {
  return (
    <div className='w-4/5 mx-auto pt-[115px] pb-[90px]'>
        <div className='flex mb-[30px] mx-[12px]'>
            <h2 className='uppercase text-[40px] font-bold text-[#cf0f0f]'>CHÀO MỪNG BẠN ĐẾN VỚI TRUNG TÂM ANH NGỮ SOPHIA</h2>
            <p className='text-[#52525c]'>SOPHIA là hệ thống ngoại ngữ và ngoại khóa uy tín hàng đầu tại Việt Nam với hơi 10 ngàn học viên theo học . <br/>
            Với chất lượng giảng dạy đạt chuẩn quốc tế, SOPHIA rộng cửa đón chào những thành viên muốn gia nhập tổ chức bằng tài năng, trí tuệ, phẩm chất đạo đức và lòng say mê công việc.</p>
        </div>
        <div className='grid grid-cols-2'>
            {
                list.map((item, index) => (
                    <div key={index} className='bg-[#0b163f] rounded-[15px] mb-[30px] text-white mx-[12px] px-[40px] pt-[33px] pb-[45px] flex flex-col gap-2'>
                        <div className='flex'>
                            <span className='w-full flex items-center gap-2'>
                                <BiSolidBriefcaseAlt2/>
                                Full time
                            </span>
                            <div className='w-full text-right'>
                                <span className='bg-[rgba(255,255,255,.1)] rounded-[30px] px-[25px] py-[6px] text-right'>{item.job}</span>
                            </div>
                        </div>
                        <div className='text-[20px] hover:text-sky-600'>{item.heading}</div>
                        <span className='flex items-center gap-2'><BiBuilding/>SOPHIA ENGLISH CENTER</span>
                        <span className='flex items-center gap-2'><FaMapMarkerAlt/>100 Nguyễn Thị Minh Khai, Đà Nẵng</span>
                        <span className='flex items-center gap-2'><BiWallet/>Thỏa thuận</span>
                        <div className='mt-[44px]'>
                            <button className='px-[25px] py-[13px] border-2 border-[#fff] rounded-[6px] hover:text-[#0b163f] hover:bg-white'>Apply Now</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
