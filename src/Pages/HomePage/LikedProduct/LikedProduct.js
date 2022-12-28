import React, { useState, useEffect } from 'react';
import CartProduct from '../../../Components/CartProduct';
import './LikedProduct.css';
import UserApi from '../../../Apis/UserApi';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
function LikedProduct() {
  const [likedProductList, setLikedProductList] = useState([])
  const userId = localStorage.getItem('userid')

  useEffect(() => {
    UserApi.getLikedProducts({userId: userId})
    .then((res) => {
      setLikedProductList(res);
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleRemoveAllLikeProduct = () => {
    UserApi.removeAllLikeProduct({userId: userId})
    .then((res) => {
      console.log(res);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Xóa toàn bộ sản phẩm khỏi danh sách yêu thích thành công',
        showConfirmButton: false,
        timer: 2000
      })
      window.location.reload();
    })
  }

  return (
    <div className="liked-product">
      <h2>DANH MỤC YÊU THÍCH</h2>
      <p>{likedProductList.length} sản phẩm</p>
      <div className="liked-product__line"></div>
      {
        likedProductList?.map((item, index) => (
          <CartProduct 
            index={index}
            image={item.image}
            name={item.name}
            price={item.price}
            productId={item._id}
            isOnLikePage={true}
          />
        ))
      }
      <div className="liked-product__buttons">
        <button style={{cursor: 'pointer'}} onClick={handleRemoveAllLikeProduct}>XÓA HẾT</button>
        <Link to='/sale'>TIẾP TỤC MUA HÀNG</Link>
      </div>
    </div>
  )
}

export default LikedProduct