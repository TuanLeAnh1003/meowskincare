import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsApi from '../../../Apis/NewsApi';
import './NewsManagement.css';
import Swal from "sweetalert2";

function NewsManagement() {
  const [hideDeletePopup, setHideDeletePopup] = useState(false)
  const [newsList, setNewsList] = useState()
  const [firstName, setFirstName] = useState()
  const [removeNews, setRemoveNews] = useState()

  useEffect(() => {
    NewsApi.getAll()
    .then((res) => {
      setNewsList(res)
    })
  }, [])

  const handleDeleteNews = () => {
    NewsApi.removeNews({
      newsId: removeNews
    })
    .then((res) => {
      console.log(res);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Xóa bài viết thành công',
        showConfirmButton: false,
        timer: 2000
      })
      window.location.reload()
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="news-mng">
      <h1>Quản lý bài viết</h1>
      <div className="news-mng-wrap">
        <Link className="news-mng-create" to='/admin/news-create'>Tạo bài viết</Link>
        <div className="news-mng-search">
          <input type="text" placeholder="Tìm bài viết ..." />
          <FontAwesomeIcon className="news-mng-search--icon" icon={solid('search')} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
              <th>Tiêu đề</th>
              <th>Tiêu đề phụ</th>
              <th>Tác giả</th>
              <th>Hình ảnh</th>
              <th>Thời gian</th>
              <th>Nội dung</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
          {newsList?.map((news, i) => (
            <tr key={i}>
              <td>{news?.title}</td>
              {
                news?.sub_header?.length > 50 ? (
                  <td>
                    {
                      `${news?.sub_header.substring(0, 50)}...`
                    }
                  </td>
                ) : (
                  <td>{news?.sub_header}</td>
                )
              }
              <td>
              {
                news?.user_id?.length > 10 ? (
                  <td>
                    {
                      `${news?.user_id.substring(0, 10)}...`
                    }
                  </td>
                ) : (
                  <td>{news?.user_id}</td>
                )
              }
              </td>
              <td>
                <img style={{width: '100px'}} src={news?.image} alt="img" />
              </td>
              <td>{news?.date}</td>
              {
                news?.content?.length > 50 ? (
                  <td>
                    {
                      `${news?.content.substring(0, 50)}...`
                    }
                  </td>
                ) : (
                  <td>{news?.content}</td>
                )
              }
              <td>
                <FontAwesomeIcon icon={solid('eye')} />{"  "}
                <Link to={`/admin/news-update/${news?._id}`} style={{textDecoration: 'none', color: '#855446'}}>
                  <FontAwesomeIcon icon={solid('pen')} />{"  "}
                </Link>
                <FontAwesomeIcon icon={solid('trash')} style={{cursor: 'pointer'}} onClick={e => {setHideDeletePopup(true); setRemoveNews(news?._id)}}/>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
      {
        hideDeletePopup && (
          <div className="news-mng-delete-wrapper" onClick={e => setHideDeletePopup(false)}>
            <div className="news-mng-delete" onClick={e => e.stopPropagation()}>
              <h3>Xóa bài viết</h3>
              <FontAwesomeIcon className="news-mng-delete-icon" icon={solid('circle-xmark')} onClick={e => setHideDeletePopup(false)}/>
              <p>Bạn có chắc mình muốn xóa bài viết này?</p>
              <div>
                <button onClick={e => setHideDeletePopup(false)}>
                  Hủy bỏ
                </button>
                <div onClick={handleDeleteNews}>
                  Xóa luôn
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default NewsManagement