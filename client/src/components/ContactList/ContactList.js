import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const ContactList = () => {

  const [state, setState] = useState({
    name:'',
    password:''
  });

  const [status, setStatus] = useState(0)
  
  const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

  const handleSubmit = (event) => {
    event.preventDefault();
		if ( state.name === 'admin' && state.password === '123455') {
      setStatus(1)
    }
	};

  const handleLogout = () => {
    setStatus(0)
  }

  const [items, setItems] = useState([]);

  const getData = async() => {
    const response = await axios.get('http://localhost:3000/home9',
    {
      params: {
        filter: {
          order: ['id DESC'],
        },
      },
    })
    if (response.status === 200) {
      setItems(response.data)
    }
  }

  useEffect(() => {
		getData();
	}, []);

  const handleDelete = async (id) => {
    const response = await axios.delete(
      'http://localhost:3000/home9/' + id
    )
		await getData();
  }

  const handleUpdateStatus = async (id, oldStatus) => {
		const newData = {
			contactstatus: oldStatus === "1" ? "0" : "1",
		};
		const response = await axios.patch(
			'http://localhost:3000/home9/' + id,
			newData
		);
		await getData();
	};

  return (
    <div className='w-screen h-screen bg-white flex items-center justify-center'>
      {
      status === 0 && 
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <input required type='text' placeholder='Nhập tên đăng nhập' name='name' onChange={handleChange} className='border border-[#000] p-[10px]'/>
        <input required type='password' placeholder='Nhập mật khẩu' name='password' onChange={handleChange} className='border border-[#000] p-[10px]'/>
        <input type='submit' value='Đăng nhập' className='bg-sky-500/75 p-[10px] cursor-pointer'/>
      </form>
      }
      {
      status === 1 && 
      <div className='bg-[#ccc] w-full h-full'>
        <div className='flex justify-center'>
          <table className='border-2 border-[#000] mt-[16px]'>
            <thead>
              <tr>
                <th className='border border-[#000]'>Họ và tên</th>
                <th className='border border-[#000]'>Số điện thoại</th>
                <th className='border border-[#000]'>Khóa học</th>
                <th className='border border-[#000]'>Địa chỉ trung tâm</th>
                <th className='border border-[#000]'>Lời nhắn</th>
                <th className='border border-[#000]'>Liên hệ</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item, index) => (
                  <tr key={index}>
                    <td className='border border-[#000] p-[10px] text-center'>{item.fullname}</td>
                    <td className='border border-[#000] p-[10px] text-center'>{item.phonenumber}</td>
                    <td className='border border-[#000] p-[10px] text-center'>{item.course}</td>
                    <td className='border border-[#000] p-[10px] text-center'>{item.local}</td>
                    <td className='border border-[#000] p-[10px] text-center'>{item.note}</td>
                    <td className='border border-[#000] p-[10px] text-center'>
                      <button type='checkbox' className={item.contactstatus === "1" ? 'p-[10px] rounded bg-green-500 mb-[10px] border border-[#000]' : 'p-[10px] rounded mb-[10px] border border-[#000]'} onClick={() => handleUpdateStatus(item.id, item.contactstatus)}></button>
                    </td>
                    <td className='border border-[#000] p-[10px] text-center'>
                      <button className='p-[10px] rounded mb-[10px] border border-[#000]' onClick={() => 
                        {
                          confirmAlert({
                            title: 'Confirm to submit',
                            message: 'Are you sure to do this.',
                            buttons: [
                              {
                              label: 'Yes',
                              onClick: () => {
                                handleDelete(item.id)
                                alert('Click Yes')}
                              },
                              {
                              label: 'No',
                              onClick: () => alert('Click No')
                              }
                            ]
                            })
                        }}>Xóa</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className='fixed top-10 right-20'>
          <button className='border border-[#000] p-[10px]' onClick={handleLogout}>Đăng xuất</button>
        </div>
      </div>
      }
    </div>
  )
}
