import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const Post1 = () => {

	const [messageApi, contextHolder] = message.useMessage()

	const [title, setTitle] = useState('');

	const [content, setContent] = useState('');

	// const [file, setFile] = useState(null);

	const [items, setItems] = useState([]);

	const [baseImage, setBaseImage] = useState("");

	const getData = async () => {
		const response = await axios.get(
		  'http://localhost:3000/post1',
		  {
			params: {
			  filter: {
				order: ['id DESC'],
			  },
			},
		  }
		);
	  
		if (response.status === 200) {
		  setItems(response.data);
		}
	};

	const onDeletePost = async (id) => {
		const response = await axios.delete(
		  'http://localhost:3000/post1/' + id
		);
		await getData();
	};
	useEffect(() => {
		getData();
	}, []);

	// const onChangeFile = (event) => {
	// 	const files = event.target.files;
	// 	setFile(files[0]);
	// };

	const onUpload = async () => {
		// const form = new FormData();
		// form.append('file', file);
		const response = await axios.post('http://localhost:3000/post1', 
		{
			title: title,
			content: content,
			img: baseImage,
		}
		// file, {
		// 	headers: {
		// 		'Content-Type': 'multipart/form-data',
		// 	},
		// }
		);
		if (response.status === 201) {
			messageApi.open({
				type: 'success',
				content: 'Đăng thành công',
			});
			getData();
		}
	};

	const onRemoveImage = () => {
		setBaseImage(null);
	};

	const uploadImage = async (e) => {
		const file = e.target.files[0];
		const base64 = await convertBase64(file);
		setBaseImage(base64);
	};
	
	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			console.log(fileReader);
			fileReader.readAsDataURL(file);
			
			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		onUpload();
		setTitle('');
		setContent('');
		setBaseImage('');
	};

	return (
		<div className="w-screen bg-cyan-100">
			<div className='w-4/5 mx-auto bg-slate-300 rounded-lg mb-[16px]'>
				<form className="flex flex-col gap-4 py-[16px] px-[20px]" onSubmit={onSubmit}>
					<label className='text-center text-[20px] font-bold'>Tiêu đề</label>
					<input required type='text' className='border border-[#ccc] rounded-lg p-[10px]' value={title} onChange={(event) => setTitle(event.target.value)}/>
					<label className='text-center text-[20px] font-bold'>Nội dung</label>
					<textarea required cols="40" rows="6" className='border border-[#ccc] rounded-lg p-[10px]' value={content} onChange={(event) => setContent(event.target.value)}/>

					<label>Chọn 1 ảnh</label>
					<span>
						<input type="file" className="" onChange={uploadImage} />
					</span>

					<p>Xem ảnh đã chọn</p>
					{baseImage && (
						<div>
							<img
								// src={URL.createObjectURL(file)}
								src={baseImage}
								alt=""
								className="w-40 "
							/>
						<button type="button" className='mt-[16px] px-[30px] py-[12px] bg-[#ff3951] text-white rounded-full cursor-pointer border border-solid border-[#ff3951] hover:bg-white hover:text-[#ff3951]' onClick={onRemoveImage}>
							Xóa ảnh
						</button>
						</div>
					)}

					<div className='text-right'>
						{contextHolder}
						<input type='submit' value='Đăng' className='px-[30px] py-[12px] bg-[#ff3951] text-white rounded-full cursor-pointer border border-solid border-[#ff3951] hover:bg-white hover:text-[#ff3951]'/>
					</div>
				</form>
			</div>
			<div className='w-4/5 mx-auto rounded-lg bg-slate-300'>
				<div className='text-center text-[30px] font-bold border-b-2 border-[#000] py-[10px]'>Bài viết</div>
			{
				items.map((item, index) => (
					<div key={index} className='mx-auto p-[20px]'>
						<div className='flex justify-center'>
							<img alt='' src={item.img} className='w-4/5 mx-auto rounded-lg'/>
						</div>
						<div className='my-[20px] w-4/5 mx-auto'>
							<p className='text-center text-[60px] break-all font-bold'>{item.title}</p>
						</div>
						<div className='mb-[20px] w-4/5 mx-auto'>
							<p className='text-[24px] break-all'>{item.content}</p>
						</div>
						<div className='text-right mb-[30px]'>
							<button className='px-[30px] py-[12px] bg-[#ff3951] text-white rounded-full cursor-pointer border border-solid border-[#ff3951] hover:bg-white hover:text-[#ff3951]' onClick={() => 
								{confirmAlert({
									title: 'Confirm to submit',
									message: 'Are you sure to do this.',
									buttons: [
									  {
										label: 'Yes',
										onClick: () => {
											onDeletePost(item.id)
											alert('Click Yes')}
									  },
									  {
										label: 'No',
										onClick: () => alert('Click No')
									  }
									]
								  });}}>Xóa</button>
						</div>
						<div className='border-2 border-dashed border-[#000]'></div>
					</div>
				))
			}
        	</div>
		</div>
	);
}
