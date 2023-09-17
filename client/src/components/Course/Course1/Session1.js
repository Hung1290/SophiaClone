import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const Session1 = () => {

  const navigate  = useNavigate()

  const handleHome = () => {
    navigate('/');
  }

  const [isNavBar, setIsNavBar] = useState(false);

  const handleShowNavBar = () => {
    setIsNavBar(!isNavBar)
  }

  return (
    <div className='w-screen bg-white flex justify-center mb-[90px]'>
    <div className='fixed w-screen bg-white flex flex-row lg:justify-around items-center p-[10px] z-10'>
      <div className='p-[10px]'>
        <img alt='' className='w-[160px] cursor-pointer' src='/images/logo_new_ver-1536x482.png' onClick={handleHome}/>
      </div>
      <ul className='p-[10px] hidden lg:flex flex-row items-center font-semibold'>
        <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' >
          <a href='#info'>
          Thông tin
          </a>
          </li>
        <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' >
          <a href='#programme'>
          Chương trình
          </a>
          </li>
        <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' >
          <a href='#image'>
          Hình ảnh
          </a>
          </li>
        <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' >
          <a href='#work'>
          Hoạt động
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
            <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' >
              <a href='#info'>
              Thông tin
              </a>
            </li>
            <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' >
              <a href='#programme'>
              Chương trình
              </a>
              </li>
            <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' >
              <a href='#image'>
              Hình ảnh
              </a>
              </li>
            <li className='hover:text-[#CF0F0F] cursor-pointer px-[20px] py-[13px]' >
              <a href='#work'>
              Hoạt động
              </a>
            </li>
          </ul>
        </div>
      }
    </div>
  </div>
  )
}
