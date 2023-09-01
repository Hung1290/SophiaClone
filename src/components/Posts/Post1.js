import React, { useState } from 'react';
import axios from 'axios';

export const Post1 = () => {
    const [file, setFile] = useState(null);
	const onChangeFile = (event) => {
		const files = event.target.files;
		setFile(files[0]);
	};
	const onUpload = async () => {
		const form = new FormData();
		form.append('file', file);
		await axios.post('http://localhost:3000/post1', file, {
			headers: {
				'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer token',
			},
		});
	};
	const onRemoveFile = () => {
		setFile(null);
	};
	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<div>
				<div className="flex flex-col gap-4">
					<label>Hình ảnh sản phẩm ( Chọn 1 )</label>
					<input type="file" className="file" onChange={onChangeFile} />

					<p>Xem ảnh đã chọn</p>
					{file && (
						<div>
							<img
								src={URL.createObjectURL(file)}
								alt=""
								className="w-40 "
							/>
						</div>
					)}

					<div className="flex flex-row gap-4">
						<button type="button" onClick={onRemoveFile}>
							Xóa ảnh
						</button>
						<button type="button" onClick={onUpload}>
							Tải ảnh lên
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}