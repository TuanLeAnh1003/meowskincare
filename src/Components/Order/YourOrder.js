import React from "react";
import "./YourOrder.css";

function YourOrder({id, date, email, totalPrice, payment}) {
  return (
    <div className='result-search-order--info'>
      <div className='result-search-order--info-title'>ĐƠN HÀNG CỦA BẠN</div>
      <ul className='result-search-order--info-list'>
        <li className='result-search-order--info-item'>
          Mã đơn hàng: {id}
        </li>
        <li className='result-search-order--info-item'>
          Ngày: {date}
        </li>
        <li className='result-search-order--info-item'>
          Email: {email}
        </li>
        <li className='result-search-order--info-item'>
          Tổng cộng: {totalPrice}đ
        </li>
        <li className='result-search-order--info-item'>
          Phương thức thanh toán: {payment}
        </li>
      </ul>
    </div>
  );
}

export default YourOrder;
