import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Login = () => {

  const [items, setItems] = useState([]);

  const [ account, setAccount ] = useState({
    Username: '',
    Password: '',
  })

  const [ loginStatus, setloginStatus ] = useState(0)

  const handleOnChangeInput = (event, id) => {
    let valueInput = event.target.value;
    let accountCopy = {...account};
    accountCopy[id] = valueInput;
    setAccount ({
      ...accountCopy
    })
  }

  const hanldeLogin = () => {
    if (account.Username === '1' && account.Password === '1') {
      setloginStatus(1)
    }
  }

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
        loginStatus === 0 && 
        <form className='flex flex-col'>
            <label>Username</label>
            <input type='text' className='border-2 solid border-sky-300 rounded-lg p-[6px]' name="Username" value={account.Username} onChange={(event) => handleOnChangeInput(event, 'Username')}/>
            <label>Password</label>
            <input type='password' className='border-2 border-sky-300 rounded-lg p-[6px]' name="Password" value={account.Password} onChange={(event) => handleOnChangeInput(event, 'Password')}/>
            <button type='submit' className='bg-sky-500 border-2 border-sky-500 rounded-lg mt-[20px] p-[8px]' onClick={hanldeLogin}>Login</button>
        </form>
      }
      {
        loginStatus === 1 && 
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
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>
  )
}
