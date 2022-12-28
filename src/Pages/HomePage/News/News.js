import React, { useState, useEffect } from 'react'
import './News.css'
import NewsItem from './NewsItem'
import NewsApi from '../../../Apis/NewsApi'
import { Link } from 'react-router-dom'
import NewsPopularImage from './../../../Assets/Images/news-popular-image.svg'
import NewsImageItem from './../../../Assets/Images/news-item.svg'

function News() {
  const [newsList, setNewsList] = useState()
  const [firstNews, setFirstNews] = useState({
    _id: '',
    image: '',
    title: '',
    sub_header: '',
    date: '',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    NewsApi.getAll()
      .then((res) => {
        console.log(res);
        setFirstNews(res[0])
        setNewsList(res)
      })
  }, [])

  return (
    <div className="news">
      <div className="news-title">TIN TỨC VÀ BÀI VIẾT</div>

      <div className="news-popular">
        <div className="news-popular-image-wrapper">
          <img className="news-popular-image" src={firstNews.image} alt="news-img" />
        </div>
        <div className="news-popular-right">
          <div className="news-popular-right-title">{firstNews.title}</div>
          <div className="news-popular-right-sub-header">{firstNews.sub_header}</div>
          <div className="news-popular-right-bottom">
            <Link to={`/watch-news/${firstNews._id}`} className="news-popular-right-bottom-more">Đọc thêm</Link>
            <div className="news-popular-right-bottom-date">{firstNews.date}</div>
          </div>
        </div>
      </div>

      <ul className="news-item-list">
        {
          newsList?.map((element, index) => 
          index > 0 &&
          (
            <NewsItem 
              key={index}
              index={index}
              newsId={element._id}
              title={element.title}
              subHeader={element.sub_header}
              img={element.image}
              date={element.date}
              content={element.content}
              width={570}
              height={500}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default News