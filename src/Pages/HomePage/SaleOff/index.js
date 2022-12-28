import React, { useState, useEffect } from 'react';
import './SaleOff.css';
import Product from '../../../Components/Product';
import rolex1 from './../../../Assets/Images/rolex 1.png';
import banner from './../../../Assets/Images/Clearance-Sale-Desktop 1.png';
import ProductApi from '../../../Apis/ProductApi';

function SaleOff() {
  const [productList, setProductList] = useState()

  useEffect(() => {
    ProductApi.getDiscountProduct()
      .then((res) => {
        console.log(res);
        setProductList(res)
      })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="saleoff">
      <img src={banner} alt="banner" />
      {productList?.map((item, index) => (
        <div className="saleoff__product" key={index}>
          <Product 
            img={item.image}
            name={item.name}
            type={item.type}
            price={item.price}
            discount={item.discount}
          />
        </div>
      ))}
      
    </div>
  )
}

export default SaleOff