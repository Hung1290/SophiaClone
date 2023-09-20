import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const Footer = () => {

  const navigate  = useNavigate()

  const handleHome = () => {
    navigate('/');
  }

  const handleAboutUs = () => {
    navigate('/AboutUs');
  }

  const handleRecruitment = () => {
    navigate('/Recruitment');
  }

  const handleContact = () => {
    navigate('/Contact');
  }

  const handlePosts = () => {
    navigate('/Posts');
  }

  return (
    <div className='w-screen'>
        <div className='bg-[#1b1b1b] py-[100px]'>
          <div className='p-[10px] flex flex-col items-center justify-center'>
            <div className=''>
              <img className='w-[100px] h-[100px]' src='/images/logo-SOPHIA.png'/>
            </div>
            <div className='text-white flex flex-col items-center justify-center mb-[20px]'>
              <strong className='mb-[16px] uppercase'>TRUNG TÂM TIẾNG ANH SOPHIA</strong>
              <p className='text-center'>Giấy chứng nhận doanh nghiệp số: 0401610933, Ngày cấp giấy phép: 17/06/2014, Nơi cấp: SKHDT TP.ĐN</p>
              <p className='text-center'>Cơ sở 1: 799 Ngô Quyền, Sơn Trà, Đà Nẵng . Điện thoại: 0918.570.775</p>
              <p className='text-center'>Cơ sở 2: 100 Nguyễn Thị Minh Khai, Hải Châu, Đà Nẵng. Điện thoại: 0942.942.277</p>
              <p className='text-center mb-[16px]'>Cơ sở 3: 279 Núi Thành, Hải Châu, Đà Nẵng.</p>
            </div>
            <ul className='flex flex-row flex-wrap items-center justify-center font-semibold text-white mb-[20px]'>
            <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' onClick={handleHome}>
            <a href='#'>
            Trang chủ
            </a>
            </li>
          <li className='relative group'>
            <p className='cursor-pointer flex flex-row items-center px-[20px] py-[13px] relative hover:text-[#CF0F0F]'>
              Khóa học <BiChevronDown/>
            </p>
            <ul className='absolute top-[46px] left-[10px] flex flex-col justify-center items-center w-[250px] bg-white hidden group-hover:flex'>
              <li className='text-[#000] p-[10px] hover:text-[#fff] hover:bg-slate-600 w-full text-center cursor-pointer' onClick={() => navigate('/Course1')}>Tiếng Anh mẫu giáo</li>
              <li className='text-[#000] p-[10px] hover:text-[#fff] hover:bg-slate-600 w-full text-center cursor-pointer' onClick={() => navigate('/Course2')}>Tiếng Anh Mầm Non</li>
              <li className='text-[#000] p-[10px] hover:text-[#fff] hover:bg-slate-600 w-full text-center cursor-pointer' onClick={() => navigate('/Course3')}>Tiếng Anh Thiếu Nhi</li>
              <li className='text-[#000] p-[10px] hover:text-[#fff] hover:bg-slate-600 w-full text-center cursor-pointer' onClick={() => navigate('/Course4')}>Tiếng Anh Thiếu Niên</li>
              <li className='text-[#000] p-[10px] hover:text-[#fff] hover:bg-slate-600 w-full text-center cursor-pointer' onClick={() => navigate('/Course5')}>Nền Tảng IELTS</li>
              <li className='text-[#000] p-[10px] hover:text-[#fff] hover:bg-slate-600 w-full text-center cursor-pointer' onClick={() => navigate('/Course6')}>Du Học</li>
            </ul>
          </li>
          <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' onClick={handleAboutUs}>
            <a href='#'>
            Về chúng tôi
            </a>
            </li>
          <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' onClick={handleRecruitment}>
            <a href='#'>
            Tuyển dụng
            </a>
            </li>
          <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' onClick={handleContact}>
            <a href='#'>
            Liên hệ
            </a>
            </li>
          <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' onClick={handlePosts}>
            <a href='#'>
            Bài viết
            </a>
          </li>
            </ul>
            <div className='text-white text-[24px] mb-[20px]'>
              Theo dõi SOPHIA tại các kênh
            </div>
            <div className='flex flex-row flex-wrap items-center justify-center text-white gap-2'>
              <a className='w-[48px] h-[48px] bg-[#151515] flex items-center justify-center rounded-full hover:bg-[#D60F0F] cursor-pointer hover:font-semibold'><FaFacebookF/></a>
              <a className='w-[48px] h-[48px] bg-[#151515] flex items-center justify-center rounded-full hover:bg-[#D60F0F] cursor-pointer hover:font-semibold'><FaInstagram/></a>
              <a className='w-[48px] h-[48px] bg-[#151515] flex items-center justify-center rounded-full hover:bg-[#D60F0F] cursor-pointer hover:font-semibold'><FaYoutube/></a>
              <a className='w-[48px] h-[48px] bg-[#151515] flex items-center justify-center rounded-full hover:bg-[#D60F0F] cursor-pointer hover:font-semibold'><FaTiktok/></a>
            </div>
          </div>
        </div>
        <div className='w-screen bg-[#000]'>
          <div className='p-[10px] flex flex-col md:flex-row justify-around items-center'>
            <div className='text-white mb-[16px] p-[10px] hover:cursor-pointer'>
              <p>Copyright @SOPHIA 2022. All rights reserved.</p>
            </div>
            <div className='text-white mb-[16px] p-[10px] flex gap-6 hover:cursor-pointer'>
              <span>Support</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
    </div>
  )
}
