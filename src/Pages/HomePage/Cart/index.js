import React, { useState, useEffect, useCallback } from 'react';
import './Cart.css';
import CartProduct from './../../../Components/CartProduct/index';
import { Link } from 'react-router-dom'
import UserApi from '../../../Apis/UserApi';
import Swal from "sweetalert2";

function Cart() {
  const userId = localStorage.getItem("userid")
  const [totalPrice, setTotalPrice] = useState()

  const [cartsList, setCartsList] = useState([])

  const [updateQuantity, setUpdateQuantity] = useState()

  const handleCartQuantityChange = useCallback((cartQuantity, productId) => {
     setUpdateQuantity({
       cartQuantity: cartQuantity,
       productId: productId
     })
   }, [])

  useEffect(() => {
    UserApi.getCarts({ userId: userId })
    .then((res) => {
      setCartsList(res);
    })
  }, [updateQuantity])

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cartsList.length; i++) {
      total += Number(cartsList[i].price * cartsList[i].cartQuantity)
    }
    setTotalPrice(total)
  }, [cartsList])

  const handleRemoveAllCart = () => {
    UserApi.removeAllCart({userId: userId})
    .then((res) => {
      console.log(res);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Xóa toàn bộ sản phẩm khỏi giỏ hàng thành công',
        showConfirmButton: false,
        timer: 2000
      })
      window.location.reload();
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const numberFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return (
    <div className="cart">
      <div className="cart__products">
        <h3>GIỎ HÀNG</h3>
        {
          cartsList?.map((item, index) => (
            <CartProduct
              index={index}
              image={item.image}
              name={item.name}
              price={item.price}
              productId={item._id}
              cartQuantity={item.cartQuantity}
              onCartQuantityChange = {handleCartQuantityChange}
              isOnLikePage={false}
            />
          ))
        }
        <div className="cart__buttons">
          <button onClick={handleRemoveAllCart}>XÓA HẾT</button>
          <Link to='/sale'>TIẾP TỤC MUA HÀNG</Link>
        </div>
      </div>

      <div className="cart__order">
        <h3>GIỎ HÀNG CỦA BẠN</h3>
        <div className="cart__order-line"></div>

        {
          cartsList?.map((item, index) => (
            <div className="cart__order-info cart__order-item">
              <b>{item.name}</b>
              <p>{numberFormat.format(item.price)}</p>
              <b>{item.cartQuantity} x {item.name}</b>
              <p>{item.price * item.cartQuantity}</p>
            </div>
          ))
        }

        <div className="cart__order-line"></div>

        <div className="cart__order-temporary cart__order-item">
          <b>Tổng cộng</b>
          <h4>{numberFormat.format(totalPrice)}</h4>
        </div>

        <div className="cart__order-line"></div>

        <button><Link to="/payment" style={{textDecoration: "none", color: "#fff"}}>Tiếp tục thanh toán</Link></button>

      </div>
    </div>
  )
}

export default Cart