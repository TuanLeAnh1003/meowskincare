import React from "react";
import "./OrderDetail.css";

function OrderDetail({productArray, shipment, payment, totalPrice, firstName, lastName, address, phoneNumber, width}) {
  return (
    <div className='result-search-order--detail' style={{width: width}}>
      <div className='result-search-order--detail-title'>CHI TIẾT ĐƠN HÀNG</div>
      <div className='result-search-order--detail-item'>
        <div className='result-search-order--detail-item-header'>SẢN PHẨM</div>
        <div className='result-search-order--detail-item-header'>TỔNG</div>
      </div>
      <hr className='result-search-order--detail-line' />
      {
        productArray.map((product, index) => (
          <div key={index} className='result-search-order--detail-item'>
            <div className='result-search-order--detail-item-normal'>
              {product.productName}
            </div>
            <div className='result-search-order--detail-item-quantity'>x {product.cartQuantity}</div>
            <div className='result-search-order--detail-item-bold'>
              {product.productPrice}đ
            </div>
          </div>
        ))
      }
      <hr className='result-search-order--detail-line' />

      <div className='result-search-order--detail-item'>
        <div className='result-search-order--detail-item-normal'>
          Giao nhận hàng
        </div>
        <div className='result-search-order--detail-item-bold'>
          {shipment}
        </div>
      </div>
      <hr className='result-search-order--detail-line' />

      <div className='result-search-order--detail-item'>
        <div className='result-search-order--detail-item-normal'>
          Phương thức thanh toán
        </div>
        <div className='result-search-order--detail-item-lighter'>
          {payment}
        </div>
      </div>
      <hr className='result-search-order--detail-line' />

      <div className='result-search-order--detail-item'>
        <div className='result-search-order--detail-item-bold'>Tổng cộng</div>
        <div className='result-search-order--detail-item-bold'>
          {totalPrice}đ
        </div>
      </div>
      <hr className='result-search-order--detail-line' />

      <div className='result-search-order--detail-address'>
        ĐỊA CHỈ GIAO HÀNG
      </div>

      <div className='result-search-order--detail-info'>
        <div className='result-search-order--detail-info-item'>
          {firstName} {lastName}
        </div>
        <div className='result-search-order--detail-info-item'>
          {phoneNumber}
        </div>
        <div className='result-search-order--detail-info-item'>
          {address}
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
