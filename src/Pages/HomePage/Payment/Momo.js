import React, { useEffect } from 'react'
import YourOrder from './../../../Components/Order/YourOrder'
import './Momo.css'

import MomoLogo from './../../../Assets/Images/momo-logo.svg'
import MomoQr from './../../../Assets/Images/momo-qr.svg'
import OrderDetail from './../../../Components/Order/OrderDetail';

function Momo() {
  const order = {
    // Order
    orderId: "580",
    orderDate: "05/04/2022",
    totalPrice: 332000000,
    // User
    email: "19521179@gm.uit.edu.vn",
    address: "64/15 Nguyên Hồng Phường 1 Gò Vấp Thành Phố Hồ Chí Minh",
    firstName: "Duy An",
    lastName: "Nguyễn",
    phoneNumber: "0938269974",
    // Shipment
    shipment: "Miễn phí",
    // Payment
    payment: "Ví điện tử Momo",
    // Product
    productArray: [
      {
        productName: "Rolex Datejust Rhodium",
        productPrice: 132000000,
        cartQuantity: 1,
      },
      {
        productName: "Rolex Datejust Rhodium 2",
        productPrice: 100000000,
        cartQuantity: 2,
      }
    ]
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="momo">
      <div className="momo-left">
        <div className="momo-left-policy">Tuân thủ chính sách giao hàng và hoàn tiền từ MeowSkinCare. 
          <a href="/" className="momo-left-policy-detail">Xem chi tiết</a>
        </div>

        <div className="momo-left-desc">Quét mã thanh toán</div>
        <div className="momo-left-logo">
          <img src={MomoLogo} alt="momo-logo" />
        </div>

        <div className="momo-left-info">
          <div className="momo-left-info-item">Người nhận: <strong>Nguyễn Duy An</strong></div>
          <div className="momo-left-info-item">Số điện thoại: <strong>0938269974</strong></div>
          <div className="momo-left-info-item">Số tiền: <strong>{order.totalPrice}đ</strong></div>
          <div className="momo-left-info-item">Ghi chú chuyển tiền bạn ghi mã đơn hàng: <strong>{order.orderId}</strong></div>
        </div>

        <div className="momo-left-note">Nếu bạn đã thanh toán. Chúng tôi sẽ kiểm tra và giao hàng sớm nhất. Nếu không, hệ thống sẽ tự hủy đơn hàng sau 10 phút.</div>
      
        <div className="momo-left-qr">
          <img src={MomoQr} alt="qr" />
        </div>

        <div className="momo-left-handle">Đơn hàng sẽ xử lý tự động 5 - 10 phút</div>

        <OrderDetail 
          productArray={order.productArray}
          shipment={order.shipment}
          payment={order.payment}
          totalPrice={order.totalPrice}
          firstName={order.firstName}
          lastName={order.lastName}
          address={order.address}
          phoneNumber={order.phoneNumber}
          width={600}
        />
      </div>

      <div className="momo-right">
        <div className="momo-right-accept">Cảm ơn bạn. Đơn hàng của bạn đã được nhận.</div>
        <YourOrder 
          id = {order.orderId}  
          date = {order.orderDate}
          email = {order.email}
          totalPrice={order.totalPrice}
          payment={order.payment}
        />

        <button className="momo-right-export">Xuất hóa đơn</button>
      </div>
    </div>
  )
}

export default Momo