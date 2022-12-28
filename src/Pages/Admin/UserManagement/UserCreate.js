import React from 'react'
import './UserCreate.css'
import { Link } from 'react-router-dom'

function UserCreate() {
  return (
    <form className="user-create">
      <div className="user-create-wrapper">
        <h1>TẠO THÀNH VIÊN</h1>
        <p>Tạo thành viên mới UITWatch ở đây</p>
      </div>
      <div className="user-create-form">
        <div className="user-create-item">
          <p>Họ</p>
          <input type="text" name="lastName" placeholder="Nhập họ"/>
        </div>
        <div className="user-create-item">
          <p>Tên</p>
          <input type="text" name="firstName" placeholder="Nhập tên"/>
        </div>
        <div className="user-create-item">
          <p>Mật khẩu</p>
          <input type="password" name="password" placeholder="Nhập mật khẩu"/>
        </div>
        <div className="user-create-item">
          <p>Email</p>
          <input type="email" name="email" placeholder="Nhập email"/>
        </div>
        <div className="user-create-item">
          <p>Vai trò</p>
          <input type="text" name="role" placeholder="Nhập vai trò"/>
        </div>
      </div>
      <div className="user-create-func">
        <button>TẠO</button>
        <Link className="user-create-func--cancel" to="/admin/user-management">HỦY</Link>
      </div>
    </form>
  )
}

export default UserCreate