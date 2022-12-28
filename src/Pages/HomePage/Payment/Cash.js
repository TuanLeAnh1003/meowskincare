import React, { useEffect } from 'react'
import OrderDetail from './../../../Components/Order/OrderDetail'
import './Cash.css'
import YourOrder from './../../../Components/Order/YourOrder';

function Cash() {
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
    payment: "Trả tiền mặt khi giao hàng",
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
    <div className="cash">
      <div className="cash-left">
        <div className="cash-left-policy">Tuân thủ chính sách giao hàng và hoàn tiền từ MeowSkinCare. 
          <a href="/" className="cash-left-policy-detail">Xem chi tiết</a>
        </div>
        <div className="cash-left-desc">Trả tiền mặt khi giao hàng</div>
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

      <div className="cash-right">
        <div className="cash-right-accept">Cảm ơn bạn. Đơn hàng của bạn đã được nhận.</div>
        <YourOrder 
          id = {order.orderId}
          date = {order.orderDate}
          email = {order.email}
          totalPrice={order.totalPrice}
          payment={order.payment}
        />

        <button className="cash-right-export">Xuất hóa đơn</button>
      </div>
    </div>
  )
}

export default Cash