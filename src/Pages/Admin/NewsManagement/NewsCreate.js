import React, { useState, useEffect } from 'react'
import './NewsCreate.css'
import { Link, useNavigate } from 'react-router-dom'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import NewsApi from '../../../Apis/NewsApi'
import UserApi from '../../../Apis/UserApi'
import  {storage}  from '../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from "uuid";
import Swal from "sweetalert2";
import PlaceholderImage from '../../../Assets/Images/avatarclone.jpg'


function NewsCreate() {
  const [content, setContent] = useState()
  const [title, setTitle] = useState()
  const [image, setImage] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [subHeader, setSubHeader] = useState()

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChangeImage = (e) => {
    let imageRef = ref(storage, `news/${e.target.files[0].name + v4()}`);
      uploadBytes(imageRef, e.target.files[0] ).then(() => {
        getDownloadURL(imageRef).then(async data => {
          await setImageUrl(data)
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Thêm hình ảnh thành công',
            showConfirmButton: false,
            timer: 500
          })
        })
      })
  }

  const handleCreateNews = () => {
      console.log(imageUrl);
      NewsApi.createNews({
        userId: localStorage.getItem("userid"),
        title: title,
        subHeader: subHeader,
        image: imageUrl,
        content: content
      })
      .then((res) => {  
        console.log(res);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Tạo bài viết thành công',
          showConfirmButton: false,
          timer: 2000
        })
        navigate('/admin/news-management')
      })
  }

  console.log(process.env.REACT_APP_API_URL);

  return (
    <form className="news-create">
      <div className="news-create-wrapper">
        <h1>TẠO BÀI VIẾT</h1>
        <p>Tạo bài viết mới UITWatch ở đây</p>
      </div>
      <div className="news-create-form">
        <div className="news-create-item">
          <p>Tên chủ đề</p>
          <input type="text" name="title" placeholder="Nhập chủ đề ..." onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="news-create-item">
          <p>Tiêu đề phụ</p>
          <input type="text" name="subHeader" placeholder="Nhập tiêu đề phụ ..." onChange={e => setSubHeader(e.target.value)}/>
        </div>
        <div className="news-create-item">
          <p>Hình ảnh chung</p>
          <input type="file" name="image" onChange={e => {setImage(e.target.files[0]); handleChangeImage(e)}}/>
        </div>
        {
          typeof image !== "object" ? 
          (<img style={{ maxWidth: '200px' }} src={image || PlaceholderImage} alt="img" />)
          : 
          (<img style={{ maxWidth: '200px' }} src={image !== null ? window.URL.createObjectURL(image) : PlaceholderImage} alt="img" /> )
        }
        <div className="news-create-item">
          <p>Nội dung</p>
          <CKEditor
            editor = { ClassicEditor }
            // onReady = {editor => {
            //   // test
            // }}
            config = {
              {
                ckfinder: {
                  // uploadUrl: 'http://localhost:5000/uploads' // được nè
                  uploadUrl: `${process.env.REACT_APP_API_URL}/uploads`
                  // uploadUrl: `https://uitwatch.herokuapp.com/uploads`
                }
              }
            }
            onChange = {(event, editor) => {
              const data = editor.getData();
              setContent(data)
            }}
          />
        </div>
      </div>
      <div className="news-create-func">
        <div onClick={handleCreateNews}>TẠO</div>
        <Link className="news-create-func--cancel" to="/admin/news-management">HỦY</Link>
      </div>
    </form>
  )
}

export default NewsCreate
