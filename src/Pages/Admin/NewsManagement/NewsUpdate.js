import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import parse from 'html-react-parser'
import NewsApi from '../../../Apis/NewsApi';
import  {storage}  from '../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from "uuid";
import env from 'react-dotenv';
import PlaceholderImage from '../../../Assets/Images/avatarclone.jpg'
import Swal from "sweetalert2";


function NewsUpdate() {
  const [news, setNews] = useState({
    title: '',
    sub_header: '',
    image: '',
    content: ''
  })
  const [imageUrl, setImageUrl] = useState()

  const [title, setTitle] = useState(news.title)
  const [image, setImage] = useState(news.image)
  const [subHeader, setSubHeader] = useState(news.sub_header)
  const [content, setContent] = useState(news.content)
  const { newsId } = useParams()

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    NewsApi.getNewsById({
      newsId: newsId,
    })
    .then((res) => {
      console.log(res);
      setNews(res)
      setImage(res.image)
      setContent(res.content)
      setTitle(res.title)
      setSubHeader(res.sub_header)
    })
  }, [])

  const handleUpdateNews = () => {
    console.log(imageUrl, image);

    NewsApi.updateNews({
      news_id: newsId,
      title: title,
      sub_header: subHeader,
      image: imageUrl !== undefined ? imageUrl : image,
      content: content,
    }).then((res) => {
      console.log(res);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Sửa bài viết thành công',
        showConfirmButton: false,
        timer: 2000
      })
      navigate('/admin/news-management')
    });
  };

  const handleChangeImage = (e) => {
      let imageRef = ref(storage, `news/${e.target.files[0].name + v4()}`);
      uploadBytes(imageRef, e.target.files[0] ).then(() => {
        getDownloadURL(imageRef).then(async data => {
          await setImageUrl(data)
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Đổi hình ảnh thành công',
            showConfirmButton: false,
            timer: 500
          })
        })
      })
  }

  return (
    <form className="news-create">
      <div className="news-create-wrapper">
        <h1>SỬA BÀI VIẾT</h1>
        <p>Sửa bài viết mới UITWatch ở đây</p>
      </div>
      <div className="news-create-form">
        <div className="news-create-item">
          <p>Tên chủ đề</p>
          <input type="text" name="title" placeholder={news?.title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="news-create-item">
          <p>Tiêu đề phụ</p>
          <input type="text" name="subHeader" placeholder={news?.sub_header} onChange={e => setSubHeader(e.target.value)}/>
        </div>
        <div className="news-create-item">
          <p>Hình ảnh chung</p>
          <input type="file" name="image" onChange={e => {setImage(e.target.files[0]); handleChangeImage(e)}}/>
        </div>
        {
          typeof image !== "object" ? 
          (<img style={{ maxWidth: '200px' }} src={image} alt="img" />)
          : 
          (<img style={{ maxWidth: '200px' }} src={image !== null ? window.URL.createObjectURL(image) : PlaceholderImage} alt="img" /> )
        }
        <div className="news-create-item">
          <p>Nội dung</p>
          <CKEditor
            data = {content}
            editor = { ClassicEditor }
            // onReady = {editor => {
            //   // test
            // }}
            config = {
              {
                ckfinder: {
                  // uploadUrl: 'http://localhost:5000/uploads'
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
        <div onClick={handleUpdateNews}>CẬP NHẬT</div>
        <Link className="news-create-func--cancel" to="/admin/news-management">HỦY</Link>
      </div>
    </form>
  )
}

export default NewsUpdate