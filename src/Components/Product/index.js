import React, { forwardRef } from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

function Product({ productId, img, name, type, price, discount }, ref) {
  const numberFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return (
    <div to={``} className="product" ref={ref}>
      <div>
        <img src={img} alt="img" />
      </div>
      <h3>{name && name.length > 40 ? `${name.slice(0, 40)}...` : name}</h3>
      <p>{type && type.brand ? type.brand : ''}</p>
      <div className="product__price" style={{ display: discount ? "flex" : "" }}>
        <p>{numberFormat.format(price)}</p>
        <p>{discount && numberFormat.format(discount)}</p>
      </div>

    </div>
  )
}

export default forwardRef(Product)