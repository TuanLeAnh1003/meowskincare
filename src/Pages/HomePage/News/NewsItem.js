import React from 'react'
import './NewsItem.css'

import { Link } from 'react-router-dom';

function NewsItem({index, newsId, title, subHeader, img, date, width, height}) {

  return (
    <li key={index} className='news-item' style={{width: width, height: height}}>
      <div className="news-item-img-wrapper" style={{width: '100%', minHeight: '300px'}}>
        <img style={{width: '100%'}}className='news-item-img' src={img}  alt='news-item-img'></img>
      </div>
      <div className='news-item-title'>{title}</div>
      <div className='news-item-sub-header'>{subHeader}</div>
      <div className='news-item-bottom'>
        <Link to={`/watch-news/${newsId}`} className='news-item-more'>
          Đọc thêm
        </Link>
        <div className='news-item-date'>{date}</div>
      </div>
    </li>
  );
}

export default NewsItem