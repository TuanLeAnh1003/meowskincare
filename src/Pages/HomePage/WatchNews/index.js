import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './WatchNews.css'
import NewsApi from '../../../Apis/NewsApi'
import parse from 'html-react-parser'

import NewsPopularImage from './../../../Assets/Images/news-popular-image.svg'
import NewsImageItem from './../../../Assets/Images/news-item.svg'
import NewsItem from '../News/NewsItem'

function WatchNews() {
  const { newsId } = useParams()
  const [news, setNews] = useState()
  const [newsList, setNewsList] = useState()

  useEffect(() => {
    NewsApi.getNewsById({ newsId: newsId})
      .then((res) => {
        console.log(res);
        setNews(res)
      })
  }, [])

  useEffect(() => {
    NewsApi.getAll()
    .then((res) => {
      setNewsList(res)
    })
  }, [])

  return (
    <div className="watch-news">
      <div className="watch-news-img-wrapper">
        <img src={news?.image} alt="img" className="watch-news-img"/>
      </div>

      <div className="watch-news-main">
        <div className="watch-news-main-title">{news?.title}</div>
        <div className="watch-news-main-wrapper">
          <div className="watch-news-main-date">{news?.date}</div>
          <div className="watch-news-main-author">{news?.user_id}</div>
        </div>
        <div className="watch-news-main-subheader">{news?.sub_header}</div>
        <div className="watch-news-main-content">
          <div className="watch-news-main-content-word">{parse(news?.content || "")}</div>          
        </div>
        <div className="watch-news-main-wrapper">
          <div className="watch-news-main-date">{news?.date}</div>
          <div className="watch-news-main-author">{news?.user_id}</div>
        </div>
      </div>

      <div className="watch-news-other">
        <div className="watch-news-other-title">BÀI VIẾT KHÁC</div>
        <ul className="watch-news-other-wrapper">
          {
            newsList?.map((element, ind) => 
            element._id !== newsId && ind < 3 && 
            (
              <NewsItem
                key={ind} 
                newsId={ind}
                title={element.title}
                subHeader={element.sub_header}
                img={element.image}
                date={element.date}
                width={360}
                height={400}
            />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default WatchNews