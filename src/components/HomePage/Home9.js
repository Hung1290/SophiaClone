import React from 'react'

export const Home9 = () => {
  return (
    <div className='bg-[#fafafa] pt-[65px] pb-[75px] mb-[10px]'>
      <div className='w-[90%] mx-auto grid grid-cols-2'>
        <div className='flex items-center'>
          <div className='flex flex-col p-[10px]'>
            <div>
              <h2 className='text-[#cf0f0f] text-[40px] font-semibold mb-[5px] leading-10'>Đăng kí ngay để nhận tư vấn miễn phí</h2>
            </div>
            <div>
              <p className='text-[#575757] mb-[48px] mt-[16px]'>Bạn chỉ cần để lại số điện thoại liên hệ, các chuyên viên của SOPHIA sẽ liên hệ cho bạn và tư vấn tận tình nhé.</p>
            </div>
            <div className='flex flex-row w-full'>
              <div className='bg-white shadow-home9 rounded-[4px] pt-[24px] pr-[32px] pb-[40px] pl-[35px] mr-[10px] w-full'>
                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="4" fill="#FFC226" fill-opacity="0.1"></rect><path opacity="0.35" d="M33.375 35H14.125C11.8466 35 10 33.1533 10 30.875V17.125C10 14.8466 11.8466 13 14.125 13H33.375C35.6533 13 37.5 14.8466 37.5 17.125V30.875C37.5 33.1533 35.6533 35 33.375 35Z" fill="#FFC226"></path><path d="M20.9202 23.6769L10 17.125C10 14.8466 11.8466 13 14.125 13H33.375C35.6533 13 37.5 14.8466 37.5 17.125L26.5798 23.6769C24.8376 24.7219 22.6624 24.7219 20.9202 23.6769Z" fill="#FFC226"></path></svg>
                <h5 className='mt-[20px] mb-[8px] text-[20px] font-semibold cursor-pointer'>Email</h5>
                <p className='text-[#575757]'>contact@sec-vietnam.edu.vn</p>
              </div>
              <div className='bg-white shadow-home9 rounded-[4px] pt-[24px] pr-[32px] pb-[40px] pl-[35px] ml-[10px] w-full'>
                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="4" fill="#FF6C5C" fill-opacity="0.1"></rect><path opacity="0.35" d="M12.1146 17.0255C12.4106 19.2296 13.5693 24.2951 18.1375 28.8632C22.7056 33.4314 27.7697 34.5901 29.9752 34.8861C31.5726 35.2314 33.3046 34.7928 34.546 33.5514C36.4874 31.61 29.4551 24.5777 27.5138 26.5192L26.2751 27.7579L19.2428 20.7257L20.4802 19.4869C22.4216 17.5455 15.3894 10.5133 13.448 12.4547C12.2066 13.6961 11.7679 15.4281 12.1146 17.0255Z" fill="#FF6262"></path><path d="M13.4524 12.4522L20.4833 19.4831C22.4207 17.5404 22.4207 14.3963 20.4793 12.4549C18.5406 10.5162 15.3951 10.5148 13.4524 12.4522Z" fill="#FF6262"></path><path d="M27.5164 26.5176L34.5472 33.5486C36.4846 31.6071 36.4846 28.4617 34.5432 26.5203C32.6031 24.5816 29.4591 24.5802 27.5164 26.5176Z" fill="#FF6262"></path></svg>
                <h5 className='mt-[20px] mb-[8px] text-[20px] font-semibold cursor-pointer'>Phone</h5>
                <p className='text-[#575757]'>0918 570 7 75</p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative z-[2]'>
          <form className='w-[85%] px-[40px] py-[48px] bg-white shadow-home2 rounded-[10px] m-[50px]'>
            <div className='rounded-[100%] w-[180px] h-[180px] bg-yellow-500 absolute bottom-0 right-0 z-[-1]'></div>
            <div className='border-[20px] rounded-[100%] border-solid border-red-500 w-[100px] h-[100px] absolute top-0 left-0 z-[-1]'></div>
            <div className='flex flex-col px-[12px]'>
              <div className='flex'>
                <input required placeholder="Họ tên học viên" type="text" className='w-full p-[16px] mx-[12px] mb-[36px] rounded-[10px] border-2 border-solid border-[#0B163F1F]'/>
                <input required placeholder="Số điện thoại" type="text" className='w-full p-[16px] mx-[12px] mb-[36px] rounded-[10px] border-2 border-solid border-[#0B163F1F]'/>
              </div>
              <div className='flex'>
                <select required className='w-full p-[16px] mx-[12px] mb-[36px] rounded-[10px] border-2 border-solid border-[#0B163F1F] text-[#52525C]'>
                  <option value='Chọn khóa học'>Chọn khóa học</option>
                  <option value='Tiếng Anh mầm non'>Tiếng Anh mầm non</option>
                  <option value='Tiếng Anh thiếu nhi'>Tiếng Anh thiếu nhi</option>
                  <option value='Tiếng Anh thiếu niên'>Tiếng Anh thiếu niên</option>
                  <option value='IELTS'>IELTS</option>
                  <option value='Du học'>Du học</option>
                  <option value='Cambridge English'>Cambridge English</option>
                  <option value='Active Learning'>Active Learning</option>
                </select>
                <select required className='w-full p-[16px] mx-[12px] mb-[36px] rounded-[10px] border-2 border-solid border-[#0B163F1F] text-[#52525C]'>
                  <option value='Chọn địa chỉ trung tâm'>Chọn địa chỉ trung tâm</option>
                  <option value='100 Nguyễn Thị Minh Khai, Đà Nẵng'>100 Nguyễn Thị Minh Khai, Đà Nẵng</option>
                  <option value='799 Ngô Quyền, Đà Nẵng'>799 Ngô Quyền, Đà Nẵng</option>
                  <option value='279 Núi Thành, Đà Nẵng'>279 Núi Thành, Đà Nẵng</option>
                </select>
              </div>
              <div className='flex'>
                <textarea cols="40" rows="10" placeholder='Lời nhắn gửi' className='w-full h-[131px] mx-[12px] px-[20px] py-[10px] mb-[20px] rounded-[10px] border-2 border-solid border-[#0B163F1F]'></textarea>
              </div>
              <div className='flex mx-[12px] mb-[15px] items-start'>
                <input type='checkbox' id='checkbox' className='mx-[10px] mt-[6px]'/>
                <label for='checkbox' className='text-[#52525C]'>Tôi muốn thỉnh thoảng nhận được email tiếp thị từ SOPHIA. Xem chính sách bảo mật
                </label>
              </div>
              <div className='flex mx-[12px]'>
                <input className='px-[30px] py-[12px] bg-[#ff3951] text-white rounded-full cursor-pointer border border-solid border-[#ff3951] hover:bg-white hover:text-[#ff3951]' type="submit" value="Gửi ngay"/>
              </div>
            </div>
          </form>
          </div>
      </div>
    </div>
  )
}
