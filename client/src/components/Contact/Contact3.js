import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import axios from 'axios'
import { message } from 'antd';

export const Contact3 = () => {

  const [messageApi, contextHolder] = message.useMessage()

  const { state, setState } = useContext(AuthContext)

  const handleOnChangeInput = (event, id) => {
    let valueInput = event.target.value;
    let stateCopy = {...state};
    stateCopy[id] = valueInput;
    setState ({
      ...stateCopy
    })
  }

  const postData = async () => {
		const response = await axios.post(
			'http://localhost:3000/home9',
			{
        fullname: state.fullname,
				phonenumber: state.phonenumber,
				course: state.course,
				local: state.local,
				note: state.note,
        contactstatus: "0",
			}
		);
    if (response.status === 201) {
      messageApi.open({
        type: 'success',
        content: 'Đăng thành công',
      });
    }
	};

  const handleSubmit = (event) => {
		event.preventDefault();
		postData();
	};

  return (
    <div className='pt-[50px] pb-[90px]'>
      <div className='w-4/5 mx-auto'>
        <h2 className='mb-[20px] uppercase text-[40px] font-bold text-[#cf0f0f] text-center'>Nhận tư vấn từ SOPHIA</h2>
        <p className='text-[#52525c] mb-[56px] text-center'>Quý khách vui lòng điền vào form bên dưới sau đó nhân viên của Sophia sẽ liên hệ lại với quý khách ngay sau đó</p>
        <div className='lg:grid lg:grid-cols-2'>
          <div className='flex items-center'>
            <img src='/images/undraw_Contact_us_re_4qqt-min.png' className='w-full'/>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col px-[12px]'>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='px-[12px]'>
                  <input required placeholder="Họ tên học viên" type="text" className='bg-[#f4f5f7] w-full p-[16px] mb-[36px] rounded-[10px] border-2 border-solid border-[#f4f5f7]' name="fullname" value={state.fullname} onChange={(event) => handleOnChangeInput(event, 'fullname')}/>
                </div>
                <div className='px-[12px]'>
                  <input required placeholder="Số điện thoại" type="text" className='bg-[#f4f5f7] w-full p-[16px] mb-[36px] rounded-[10px] border-2 border-solid border-[#f4f5f7]' name="phonenumber" value={state.phonenumber} onChange={(event) => handleOnChangeInput(event, 'phonenumber')}/>
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='px-[12px]'>
                  <select className='bg-[#f4f5f7] w-full p-[16px] mb-[36px] rounded-[10px] border-2 border-solid border-[#f4f5f7] text-[#52525C]' name="course" value={state.course} onChange={(event) => handleOnChangeInput(event, 'course')}>
                    <option value='Chọn khóa học'>Chọn khóa học</option>
                    <option value='Tiếng Anh mầm non'>Tiếng Anh mầm non</option>
                    <option value='Tiếng Anh thiếu nhi'>Tiếng Anh thiếu nhi</option>
                    <option value='Tiếng Anh thiếu niên'>Tiếng Anh thiếu niên</option>
                    <option value='IELTS'>IELTS</option>
                    <option value='Du học'>Du học</option>
                    <option value='Cambridge English'>Cambridge English</option>
                    <option value='Active Learning'>Active Learning</option>
                  </select>
                </div>
                <div className='px-[12px]'>
                  <select className='bg-[#f4f5f7] w-full p-[16px] mb-[36px] rounded-[10px] border-2 border-solid border-[#f4f5f7] text-[#52525C]' name="local" value={state.local} onChange={(event) => handleOnChangeInput(event, 'local')}>
                    <option value='Chọn địa chỉ trung tâm'>Chọn địa chỉ trung tâm</option>
                    <option value='100 Nguyễn Thị Minh Khai, Đà Nẵng'>100 Nguyễn Thị Minh Khai, Đà Nẵng</option>
                    <option value='799 Ngô Quyền, Đà Nẵng'>799 Ngô Quyền, Đà Nẵng</option>
                    <option value='279 Núi Thành, Đà Nẵng'>279 Núi Thành, Đà Nẵng</option>
                  </select>
                </div>
              </div>
              <div className='flex'>
                <textarea cols="40" rows="10" placeholder='Lời nhắn gửi' className='bg-[#f4f5f7] w-full h-[131px] mx-[12px] px-[20px] py-[10px] mb-[20px] rounded-[10px] border-2 border-solid border-[#f4f5f7]' name="note" value={state.note} onChange={(event) => handleOnChangeInput(event, 'note')}></textarea>
              </div>
              {/* <div className='flex mx-[12px] mb-[15px] items-start'>
                <input type='checkbox' id='checkbox' className='mx-[10px] mt-[6px]'/>
                <label for='checkbox' className='text-[#52525C]'>Tôi muốn thỉnh thoảng nhận được email tiếp thị từ SOPHIA. Xem chính sách bảo mật
                </label>
              </div> */}
              <div className='flex mx-[12px]'>
                {contextHolder}
                <input className='px-[30px] py-[12px] bg-[#ff3951] text-white rounded-full cursor-pointer border border-solid border-[#ff3951] hover:bg-white hover:text-[#ff3951]' type="submit" value="Gửi ngay"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
