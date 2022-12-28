import React from 'react'
import './UserUpdate.css'
import { Link } from 'react-router-dom'

function UserUpdate() {
  const user = {
    lastName: 'Nguyễn',
    firstName: 'Duy An',
    password: '132456',
    email: 'anduy@gmail.com',
    role: 'admin'
  }

  return (
    <form className="user-create">
      <div className="user-create-wrapper">
        <h1>SỬA THÔNG TIN THÀNH VIÊN</h1>
        <p>Sửa thông tin thành viên mới UITWatch ở đây</p>
      </div>
      <div className="user-create-form">
        <div className="user-create-item">
          <p>Họ</p>
          <input type="text" name="lastName" placeholder={user.lastName}/>
        </div>
        <div className="user-create-item">
          <p>Tên</p>
          <input type="text" name="firstName" placeholder={user.firstName}/>
        </div>
        <div className="user-create-item">
          <p>Mật khẩu</p>
          <input type="password" name="password" placeholder={user.password}/>
        </div>
        <div className="user-create-item">
          <p>Email</p>
          <input type="email" name="email" placeholder={user.email}/>
        </div>
        <div className="user-create-item">
          <p>Vai trò</p>
          <input type="text" name="role" placeholder={user.role} />
        </div>
      </div>
      <div className="user-create-func">
        <button>SỬA</button>
        <Link className="user-create-func--cancel" to="/admin/user-management">HỦY</Link>
      </div>
    </form>
  )
}

export default UserUpdate
