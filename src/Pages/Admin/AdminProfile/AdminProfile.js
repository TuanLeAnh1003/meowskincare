import React, {useState, useEffect} from 'react';
import UserApi from '../../../Apis/UserApi';
import './AdminProfile.css';

function AdminProfile() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="ad-pfl">
      <h1>HỒ SƠ CỦA TÔI</h1>
      <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      <div className="ad-pfl__cols">
        <div className="ad-pfl__col-1">
          <div className="ad-pfl__field">
            <p>Họ:</p>
            <input type="text" />
          </div>
          <div className="ad-pfl__field">
            <p>Tên:</p>
            <input type="text" />
          </div>
          <div className="ad-pfl__field">
            <p>Email:</p>
            <input type="text" />
          </div>
          <div className="ad-pfl__field">
            <p>Số điện thoại:</p>
            <input type="text" />
          </div>
          <div className="ad-pfl__field">
            <p>Giới tính:</p>
            <div className="ad-pfl__genders">
              <div className="ad-pfl__gender">
                <input name="gender" type="radio" value="Nam" />Nam
              </div>
              <div className="ad-pfl__gender">
                <input name="gender" type="radio" value="Nam" />Nữ
              </div>
              <div className="ad-pfl__gender">
                <input name="gender" type="radio" value="Nam" />Khác
              </div>
            </div> 
          </div>
          <div className="ad-pfl__field">
            <p>Ngày sinh:</p>
            <div className="ad-pfl__date">
              <select name="" id="">
                {Array(31).fill().map((_, i) => (
                  <option key={i} value={i+1}>{i+1}</option>
                ))}
              </select>
              <select name="" id="">
                {Array(12).fill().map((_, i) => (
                  <option key={i} value={i+1}>{i+1}</option>
                ))}
              </select>
              <select name="" id="">
                {Array(123).fill().map((_, i) => (
                  <option key={1} value={1900 + i}>{1900 + i}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="ad-pfl__field">
            <p></p>
            <div className="ad-pfl__button">
              <button>LƯU</button>
            </div>
          </div>
        </div>

        <div className="ad-pfl__col-2">
          <img src alt="avatar" /><br />
          <button>Chọn Ảnh</button>
          <p>Dung lượng file tối đa 1MB Định dạng: JPEG, PNG</p>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile