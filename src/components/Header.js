import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { useState } from 'react'

export const Header = () => {

  const [isCourseList, setIsCourseList] = useState(false)
  const [isPostsList, setIsPostsList] = useState(false)

  const handleShowCourseList = () => {
    setIsCourseList(!isCourseList)
  }

  const handleShowPostsList = () => {
    setIsPostsList(!isPostsList)
  }

  return (
    <div className='w-screen bg-white flex justify-center mb-[110px]'>
      <div className='fixed w-screen bg-white flex flex-row justify-around items-center py-[10px] z-10'>
        <div className='p-[10px]'>
          <img className='w-[70px] h-[70px] cursor-pointer' src='/images/logo-SOPHIA.png'/>
        </div>
        <ul className='p-[10px] flex flex-row items-center font-semibold'>
          <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]'>Trang chủ</li>
          <li className='relative' onClick={handleShowCourseList}>
            <p className='cursor-pointer flex flex-row items-center px-[20px] py-[13px] relative hover:text-[#CF0F0F]'>
              Khóa học <BiChevronDown/>
            </p>
            {
            isCourseList &&
            <ul className='absolute top-[82px] left-[10px] flex flex-col justify-center items-center w-[250px] bg-white rounded-lg'>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Tiếng Anh mẫu giáo</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Tiếng Anh Mầm Non</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Tiếng Anh Thiếu Nhi</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Tiếng Anh Thiếu Niên</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Nền Tảng IELTS</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Active Learning</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Cambridge English</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Du Học</li>
            </ul>
            }
          </li>
          <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]'>Về chúng tôi</li>
          <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]'>Tuyển dụng</li>
          <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]'>Liên hệ</li>
          <li className='relative' onClick={handleShowPostsList}>
            <p className='hover:text-[#CF0F0F] cursor-pointer flex flex-row items-center px-[20px] py-[13px]'>
              Bài viết <BiChevronDown/>
            </p>
            {
            isPostsList && 
            <ul className='absolute top-[82px] left-[10px] flex flex-col justify-center items-center w-[250px] bg-white rounded-lg'>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Ưu đãi</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Chương trình</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Sự kiện</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Vinh danh học viên</li>
              <li className='p-[10px] hover:text-[#CF0F0F] cursor-pointer'>Tin tức</li>
            </ul> 
            }
          </li>
        </ul>
      </div>
    </div>
  )
}
