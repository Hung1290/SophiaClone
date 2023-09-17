import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

  const [ id, setId ] = useState(1)

  const navigate  = useNavigate()

  const handleHome = () => {
    setId(1)
    navigate('/');
  }

  const handleAboutUs = () => {
    setId(2)
    navigate('/AboutUs');
  }

  const handleRecruitment = () => {
    setId(3)
    navigate('/Recruitment');
  }

  const handleContact = () => {
    setId(4)
    navigate('/Contact');
  }

  const handlePosts = () => {
    setId(5)
    navigate('/Posts');
  }

  const [isNavBar, setIsNavBar] = useState(false);
  const [isCourse, setIsCourse] = useState(false);

  const handleShowCourse = () => {
    setIsCourse(!isCourse)
  }

  const handleShowNavBar = () => {
    setIsNavBar(!isNavBar)
  }

  return (
    <div className='w-screen bg-white flex justify-center mb-[110px]'>
      <div className='fixed w-screen bg-white flex flex-row lg:justify-around items-center p-[10px] z-10'>
        <div className='p-[10px]'>
          <img alt='' className='w-[70px] h-[70px] cursor-pointer' src='/images/logo-SOPHIA.png' onClick={handleHome}/>
        </div>
        <ul className='p-[10px] hidden lg:flex flex-row items-center font-semibold'>
          <li className={id === 1 ? 'text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' : 'hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' } onClick={handleHome}>
            <a href='#'>
            Trang chủ
            </a>
            </li>
          <li className='relative group'>
            <p className='cursor-pointer flex flex-row items-center px-[20px] py-[13px] relative hover:text-[#CF0F0F]'
            >
              Khóa học <BiChevronDown/>
            </p>
             <ul className='absolute hidden group-hover:flex top-[46px] left-[10px]  flex-col justify-center items-center w-[250px] bg-white rounded-lg '>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer' onClick={() => navigate('/Course1')}>Tiếng Anh mẫu giáo</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer' onClick={() => navigate('/Course2')}>Tiếng Anh Mầm Non</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer' onClick={() => navigate('/Course3')}>Tiếng Anh Thiếu Nhi</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer' onClick={() => navigate('/Course4')}>Tiếng Anh Thiếu Niên</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer' onClick={() => navigate('/Course5')}>Nền Tảng IELTS</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer' onClick={() => navigate('/Course6')}>Du Học</li>
            </ul>
          </li>
          <li className={id === 2 ? 'text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' : 'hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' } onClick={handleAboutUs}>
            <a href='#'>
            Về chúng tôi
            </a>
            </li>
          <li className={id === 3 ? 'text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' : 'hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' } onClick={handleRecruitment}>
            <a href='#'>
            Tuyển dụng
            </a>
            </li>
          <li className={id === 4 ? 'text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' : 'hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' } onClick={handleContact}>
            <a href='#'>
            Liên hệ
            </a>
            </li>
          <li className={id === 5 ? 'text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' : 'hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' } onClick={handlePosts}>
            <a href='#'>
            Bài viết
            </a>
          </li>
        </ul>
        <div className='lg:hidden w-full' onClick={handleShowNavBar}>
            <p className='cursor-pointer flex flex-row items-center px-[20px] py-[13px] justify-end text-[30px]'
            >
              <FaBars/>
            </p>
        </div>
        {
          isNavBar && 
          <div>
            <div className='fixed top-0 bottom-0 left-0 right-0 bg-[#000] opacity-80 z-[5]' onClick={handleShowNavBar}></div>
            <ul className='fixed pt-[20px] flex top-0 bottom-0 left-0 flex flex-col justify-start w-[250px] bg-white z-[10]'>
              <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' onClick={handleHome}>
              <a href='#'>
              Trang chủ
              </a>
              </li>
              <li className='' onClick={handleShowCourse}>
                <p className='cursor-pointer flex flex-row items-center px-[20px] py-[13px] relative hover:text-[#CF0F0F]'
                >
                  Khóa học <BiChevronDown/>
                </p>
                {
                  isCourse &&
                <ul className=' rounded-lg ml-[20px]'>
                  <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer' onClick={() => navigate('/Course1')}>Tiếng Anh mẫu giáo</li>
                  <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer' onClick={() => navigate('/Course2')}>Tiếng Anh Mầm Non</li>
                  <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer' onClick={() => navigate('/Course3')}>Tiếng Anh Thiếu Nhi</li>
                  <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer' onClick={() => navigate('/Course4')}>Tiếng Anh Thiếu Niên</li>
                  <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer' onClick={() => navigate('/Course5')}>Nền Tảng IELTS</li>
                  <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer' onClick={() => navigate('/Course6')}>Du Học</li>
                </ul>
                }
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
          </div>
        }
      </div>
    </div>
  )
}
