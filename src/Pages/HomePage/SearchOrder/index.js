import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SearchOrder.css'
import OrderApi from '../../../Apis/OrderApi'
import UserApi from '../../../Apis/UserApi';

function SearchOrder() {
  const [orderDate, setOrderDate] = useState();
  const [user, setUser] = useState({});

  useEffect(() => {
    UserApi.getMe({id: localStorage.getItem("userid")})
    .then(data => setUser({...data}));
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <form className="search-order">
        <div className="search-order--title">TRA CỨU ĐƠN HÀNG</div>
        <input type="date" className="search-order--input" placeholder="Ngày đơn hàng" onChange={(e) => setOrderDate(e.target.value)}/><br />
        <input type="text" className="search-order--input" placeholder="Email" value={user.firstName}/><br />
        <Link to={localStorage.getItem("role") === "user" ? `/result-search-order/${orderDate}` : ""} className="search-order--submit" style={{border: "none"}}>Tra cứu</Link>
      </form>
  )
}

export default SearchOrder
