import React, { useEffect, useState } from 'react';
import './AdminSignIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Logo from '../../Assets/Images/logo.png';

function AdminSignIn({handleShowAdmSignIn}) {
  const [show, setShow] = useState(false);

  const handleEye = () => {
    setShow(!show);
  }

  const handleExitAdmSignIn = () => {
    handleShowAdmSignIn(false);
  }

  return (
    <div className="signInWrap" onClick={handleExitAdmSignIn}>
      <div className="signIn" onClick={e => e.stopPropagation()}>

        <div></div>

        <div className="signIn_form">
          <FontAwesomeIcon icon={solid('circle-xmark')} onClick={handleExitAdmSignIn}/><br />
          <img src={Logo} alt="Logo" />
          <h1>QUẢN LÝ CỬA HÀNG</h1>
          <input type="email" placeholder="Email hoặc số điện thoại" />
          <div className="signIn_password">
            <input type={show ? "text" : "password"} placeholder="Mật khẩu" />
            {!show &&  <div onClick={handleEye}><FontAwesomeIcon icon={solid('eye')} /></div>}
            {show && <div onClick={handleEye}><FontAwesomeIcon icon={solid('eye-slash')} /></div>}
          </div>
          <div className="signIn_check">
            <input type="checkbox" name="remember" />
            <label htmlFor="remember">Ghi nhớ</label>
          </div>
          <button>Đăng nhập</button>
          <a href="#">Quên mật khẩu?</a>
        </div>
      </div>
    </div>
  )
}

export default AdminSignIn
