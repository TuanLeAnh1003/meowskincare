import React, { useEffect } from 'react';
import './Statistic.css';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function Statistic() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const data = {
    labels: ["Th4 1", "Th4 2", "Th4 3", "Th4 4", "Th4 5", "Th4 6", "Th4 7", "Th4 8", "Th4 9", "Th4 10", "Th4 11", "Th4 12"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65, 47, 53, 87, 23 ,26, 39],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76, 53, 85, 41, 44, 65, 47],
        fill: true,
        borderColor: "#742774"
      }
    ]
  };

  return (
    <div className="stt">
      <h1>Báo cáo</h1>
      <div className="stt__choose">
        <p>Phạm vi ngày: </p>
        <div className="stt__by-month">
          <select className="stt__list">
            {Array(12).fill().map((_, i) => (
              <option key={i}>{i+1}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="stt__efficiency">
        <p>Hiệu suất: </p>
        <div className="stt__line"></div>
      </div>

      <div className="stt__table">
        <table>
        <tbody>
        <tr>
            <td>
              <p><b>Tổng bán</b></p>
              <p>3.800.000.000đ</p>
            </td>
            <td>
              <p><b>Tổng sau chiết khấu</b></p>
              <p>2.900.000.000đ</p>
            </td>
            <td>
              <p><b>Đơn hàng</b></p>
              <p>711</p>
            </td>
            <td>
              <p><b>Sản phẩm đã bán</b></p>
              <p>1152</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><b>Khách hàng</b></p>
              <p>952</p>
            </td>
            <td>
              <p><b>Lượt xem</b></p>
              <p>1.893.234</p>
            </td>
            <td>
              <p><b>Tổng số sản phẩm</b></p>
              <p>420</p>
            </td>
            <td>
              <p><b>Thành viên</b></p>
              <p>45</p>
            </td>
          </tr>
        </tbody>
          
        </table>
      </div>

      <Line data={data} />
    </div>
  )
}

export default Statistic