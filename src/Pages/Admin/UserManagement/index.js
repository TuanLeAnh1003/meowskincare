import React, { useState } from 'react'
import './UserManagement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom'

function UserManagement() {
  const [hideDeletePopup, setHideDeletePopup] = useState(false)

  const listUser = [
    {
      lastName: 'Nguyễn',
      firstName: 'Duy An',
      phoneNumber: '132154877',
      birthday: '16-01-2001',
      email: 'duyan@gmail.com',
      address: 'ăbudiuwqdbijhqwjkn',
      role: 'admin'
    },
    {
      lastName: 'Nguyễn',
      firstName: 'Duy An',
      phoneNumber: '132154877',
      birthday: '16-01-2001',
      email: 'duyan@gmail.com',
      address: 'ăbudiuwqdbijhqwjkn',
      role: 'admin'
    },
    {
      lastName: 'Nguyễn',
      firstName: 'Duy An',
      phoneNumber: '132154877',
      birthday: '16-01-2001',
      email: 'duyan@gmail.com',
      address: 'ăbudiuwqdbijhqwjkn',
      role: 'admin'
    },
    {
      lastName: 'Nguyễn',
      firstName: 'Duy An',
      phoneNumber: '132154877',
      birthday: '16-01-2001',
      email: 'duyan@gmail.com',
      address: 'ăbudiuwqdbijhqwjkn',
      role: 'admin'
    },
    {
      lastName: 'Nguyễn',
      firstName: 'Duy An',
      phoneNumber: '132154877',
      birthday: '16-01-2001',
      email: 'duyan@gmail.com',
      address: 'ăbudiuwqdbijhqwjkn',
      role: 'admin'
    },
    {
      lastName: 'Nguyễn',
      firstName: 'Duy An',
      phoneNumber: '132154877',
      birthday: '16-01-2001',
      email: 'duyan@gmail.com',
      address: 'ăbudiuwqdbijhqwjkn',
      role: 'admin'
    }
  ]

  return (
    <div className="user-mng">
      <h1>Quản lý thành viên</h1>
      <div className="user-mng-wrap">
        <Link className="user-mng-create" to='/admin/user-create'>Tạo thành viên</Link>
        <div className="user-mng-search">
          <input type="text" placeholder="Tìm sản phẩm ..." />
          <FontAwesomeIcon className="user-mng-search--icon" icon={solid('search')} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
              <th>Họ</th>
              <th>Tên</th>
              <th>Số điện thoại</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th>Vai trò</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user, i) => (
            <tr key={i}>
              <td>{user.lastName}</td>
              <td>{user.firstName}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.birthday}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.role}</td>
              <td>
                <FontAwesomeIcon icon={solid('eye')} />{"  "}
                <Link to="/admin/user-update" style={{textDecoration: 'none', color: '#855446'}}>
                  <FontAwesomeIcon icon={solid('pen')} />{"  "}
                </Link>
                <FontAwesomeIcon icon={solid('trash')} style={{cursor: 'pointer'}} onClick={e => setHideDeletePopup(true)}/>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
      {
        hideDeletePopup && (
          <div className="user-mng-delete-wrapper" onClick={e => setHideDeletePopup(false)}>
            <div className="user-mng-delete" onClick={e => e.stopPropagation()}>
              <h3>Xóa thành viên</h3>
              <FontAwesomeIcon className="user-mng-delete-icon" icon={solid('circle-xmark')} onClick={e => setHideDeletePopup(false)}/>
              <p>Bạn có chắc mình muốn xóa thành viên này?</p>
              <button>
                Hủy bỏ
              </button>
              <button>
                Xóa luôn
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default UserManagement