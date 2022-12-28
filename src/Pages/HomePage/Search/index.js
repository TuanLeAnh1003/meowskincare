import React, { useEffect, useState } from 'react'
import Product from '../../../Components/Product'
import RolexImg from './../../../Assets/Images/rolex-img.svg'
import './Search.css';
import { actions, useStore } from '../../../Store';
import ProductApi from '../../../Apis/ProductApi';
import NewsApi from '../../../Apis/NewsApi';

function Search() {

  const [state, dispatch] = useStore();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if(!state.searchInput) return; 
    ProductApi.getProducts(state.searchInput)
    .then(data => setProductList(data));
  }, [state.searchInput])

  // const [type, setType] = useState();

  // const handleType = (e) => {
  //   setType(e.target.value);
  // }

  // useEffect(() => {
  //   console.log(type)
  //   if(type === "products") {
  //     if(!state.searchInput) return; 
  //     ProductApi.getAll()
  //     .then(data => setProductList(data.filter((item, i) => item.name.includes(state.searchInput))));
  //   } else {
  //     NewsApi.getAll()
  //     .then(data => setProductList(data.filter((item, i) => item.title.includes(state.searchInput))));
  //   }
  // }, [type])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="search">
      <div className="search-title">{state.searchInput ? `TÌM THẤY ${productList.length} KẾT QUẢ CHO "${state.searchInput}"` : "CHƯA NHẬP TỪ KHÓA!"}</div>
      {/*<div className="search-cate">
        <div className="search-cate-product" >
          <input className="search-cate-product-input" name="type" type="radio" id="product" value="products"/>
          <label className="search-cate-product-label">Sản phẩm</label>
          <input className="search-cate-post-input" name="type" type="radio" id="post" value="news"/>
          <label className="search-cate-post-label">Bài viết</label>
        </div>
  </div>*/}

      <div className="search-list">
        {
          productList.map((product, index) => (
            <div className="search-list-item" key={index}>
              <Product 
                productId={product._id}
                img={product.image}
                name={product.name}
                type={product.type}
                price={product.price}
                discount={product.discount}
              />
            </div>
          ))
        }
      </div>

      <button className="search-view-all">XEM TẤT CẢ SẢN PHẨM</button>
    </div>
  )
}

export default Search