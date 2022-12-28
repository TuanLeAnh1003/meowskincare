import React, { useEffect } from 'react';
import './CustomerManagement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function OrderManagement() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="cus-mng">
      <div className="cus-title">
        <h1>Quản lí khách hàng</h1>
        <div className="cus-search">
          <input type="text" placeholder='Tìm khách hàng ...'/>
          <div className="cus-icon">
            <FontAwesomeIcon icon={solid('magnifying-glass')} />
          </div>
          
        </div>

      </div>
      
      <table>
        <thead>
          <tr>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Ngày sinh</th>
              <th>Địa chỉ</th>
              <th>Số đơn hàng</th>
              <th>Tổng chi</th>
          </tr>
        </thead>
        <tbody>
          {Array(20).fill().map((_, i) => (
            <tr>
              <td>Tiger Nixon</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td style={{width: "150px"}}>
                64/15 Nguyên Hồng, Phường 1 Gò Vấp
                64/15 Nguyên Hồng, Phường 1 Gò Vấp
              </td>
              <td>System Architect</td>
              <td>System Architect</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default OrderManagement