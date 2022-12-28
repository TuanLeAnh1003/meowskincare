import React, { useEffect } from 'react';
import './ResponseManagement.css';

function ResponseManagement() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="res-mng">
      <h1>Phản hồi và bình luận</h1>
      <table>
        <thead>
          <tr>
              <th>Tác giả</th>
              <th>Email</th>
              <th>Bình luận</th>
              <th>Trả lời cho</th>
              <th>Đã đăng vào</th>
          </tr>
        </thead>
        <tbody>
          {Array(20).fill().map((_, i) => (
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default ResponseManagement