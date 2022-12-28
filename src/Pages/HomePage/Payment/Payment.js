import React, {useState, useEffect} from 'react';
import './Payment.css';
import MoMo from './../../../Assets/Images/image 11.png';
import OrderApi from '../../../Apis/OrderApi';
import { useNavigate } from 'react-router-dom';

function Payment() {

  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [payment, setPayment] = useState();

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if(payment === "MoMo") {
      navigate("/momo")
    } else if(payment === "ShipCode") {
      navigate("/cash")
    }
  }

  const handleChange = (e) => {
    setPayment(e.target.value)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="payment">
      <div className="payment__text">
        <p>Tuân thủ chính sách giao hàng và hoàn tiền từ MeowSkinCare. <span>Xem chi tiết</span></p>
        <div className="payment__line" style={{margin: "20px 0"}}></div>
      </div>

      
      <div className="payment__details">
        <div className="payment__info">
          <h3>THÔNG TIN THANH TOÁN</h3>

          <div className="payment__info-name payment__info-detail">
            <p>Họ và tên</p>
            <input placeholder="Nhập họ và tên" type="text" />
          </div>
          <div className="payment__info-email payment__info-detail">
            <p>Email</p>
            <input placeholder="Nhập email" type="text" />
          </div>
          <div className="payment__info-phone payment__info-detail">
            <p>Điện thoại</p>
            <input placeholder="Nhập số điện thoại" type="text" />
          </div>
          <div className="payment__info-address payment__info-detail">
            <p>Địa chỉ</p>
            <input placeholder="Nhập địa chỉ" type="text"  name="address" onChange={e => setAddress(e.target.value)}/>
          </div>
          {/*<div className="payment__info-city payment__info-detail">
            <p>Tỉnh/ Thành phố</p>
            <input placeholder="Tỉnh/ Thành phố" type="text" />
          </div>

          <div className="payment__info-wrapper">
            <div className="payment__info-district payment__info-detail">
              <p>Quận/ Huyện</p>
              <input placeholder="Quận/ Huyện" type="text" />
            </div>
            <div className="payment__info-ward payment__info-detail">
              <p>Phường/ Xã</p>
              <input placeholder="Phường/ Xã" type="text" />
            </div>  
  </div>*/}

          <div className="payment__info-note payment__info-detail">
            <p>Ghi chú cho đơn hàng</p>
            <textarea placeholder="Nhập ghi chú" onChange={e => setNote(e.target.value)}></textarea>
          </div>

          <h3>PHƯƠNG THỨC GIAO HÀNG</h3>
          <div className="payment__info-shipment">
            <input type="checkbox" name="standard" />
            <label htmlFor="standard">
              <span>Tốc độ tiêu chuẩn ( từ 2 - 5 ngày làm việc)</span>
              <b style={{textAlign: "right"}}>Miễn phí</b>
            </label>
          </div>
                    
          <div className="payment__info-shipment">
            <input type="checkbox" name="express" />
            <label htmlFor="express">
              <span>Giao hàng nhanh ( từ  2 tiếng - 1 ngày )</span>
              <b style={{textAlign: "right"}}>20.000đ</b>
            </label>
          </div>
        </div>

        <div className="payment__order">
          <h3>ĐƠN HÀNG CỦA BẠN</h3>
          <div className="payment__order-titles payment__order-flex">
            <h4>SẢN PHẨM</h4>
            <h4>TẠM TÍNH</h4>
          </div>

          <div className="payment__line"></div>

          <div className="payment__order-product payment__order-flex">
            <p>Rolex Datejust Rhodium x 1</p>
            <p>132.000.000đ</p>
          </div>

          <div className="payment__line"></div>

          <div className="payment__order-temporary payment__order-flex">
            <b>Tạm tính</b>
            <p>132.000.000đ</p>
          </div>

          <div className="payment__line"></div>

          <div className="payment__order-ship payment__order-flex">
            <b>Giao hàng</b>
            <p>Miễn phí</p>
          </div>

          <div className="payment__line"></div>

          <div className="payment__order-total payment__order-flex">
            <b>Tổng</b>
            <p>132.000.000đ</p>
          </div>

          <div className="payment__line"></div>

          <div className="payment__order-methods-wrapper">
            <div className="payment__order-methods">
              <div className="payment__order-method">
                <input id="radio-method1" type="radio" name="payment" value="Transfer" /> 
                <label htmlFor="radio-method1" className="payment__order-text">
                  <b>Chuyển khoản ngân hàng</b>
                </label>
              </div>
                      
              <div className="payment__order-method">
                <input id="radio-method2" type="radio" name="payment" value="ShipCode" onChange={e => handleChange(e)}/>  
                <label htmlFor="radio-method2" className="payment__order-text">
                  <b>Thanh toán khi nhận hàng</b>
                </label>
              </div>
                      
              <div className="payment__order-method">
                <input id="radio-method3" type="radio" name="payment" value="MoMo" onChange={e => handleChange(e)}/>
                <label htmlFor="radio-method3" className="payment__order-text">
                  <b>Quét mã MoMo</b>                
                  <img src={MoMo} alt="Logo_method"/>
                </label>
              </div>
            </div>

            <div className="payment__line"></div>

            <div className="payment__order-agreement">
              <input type="checkbox" name="agreement" />
              <label htmlFor="agreement">
                Tôi đã đọc và đồng ý với điều khoản và điều kiện của website.
              </label>
            </div>
            <button onClick={handlePlaceOrder}>Đặt hàng</button>
          </div>
          
          <p>Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, tăng trải nghiệm 
          sử dụng website, và cho các mục đích cụ thể khác đã được mô tả trong chính sách 
          riêng tư của chúng tôi.</p>
        </div>
      </div>

    </div>
  )
}

export default Payment