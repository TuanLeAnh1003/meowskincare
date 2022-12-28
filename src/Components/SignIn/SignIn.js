import React, { useEffect, useState } from 'react';
import './SignIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import SignInImg from '../../Assets/Images/Rectangle 383.png';
import Logo from '../../Assets/Images/logo.png';
import Facebook from '../../Assets/Images/SignIn_fb.png';
import Google from '../../Assets/Images/SignIn_gg+.png';
import UserApi from '../../Apis/UserApi';
// import SweetAlert from 'sweetalert2-react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { actions, useStore } from '../../Store';


function SignIn({handleShowSignIn1, handleShowSignUp1}) {
  const [show, setShow] = useState(false);

  const handleExitSignIn = () => {   
    handleShowSignIn1(false);
  }

  const handleShowSignUpBySignIn = () => {
    handleShowSignUp1(true);
  }

  const handleEye = () => {
    setShow(!show);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const [state, dispatch] = useStore();

  const navigate = useNavigate();

  const handleLogin = () => {
    if(email === "" || password === "") {
      alert("Email hoặc pasword còn trống!");
    } else {
      UserApi.login({
        email: email,
        password: password
      })
      .then(data => {
        console.log(data.user.role);
        dispatch(actions.login(data.accessToken));
        localStorage.setItem("token", data.accessToken)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Đăng nhập thành công',
            showConfirmButton: false,
            timer: 1500
          })
          handleExitSignIn();
        if(data.user.role !== "user") {
          navigate("/admin")
        }
        window.location.reload();
      })
      .catch(err => {
        console.log(err.response);
        if(err.response.data ===  "Không tìm thấy email!") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
          })
          setEmail("");
        } else if(err.response.data ===  "Sai mật khẩu!") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
          })
          setPassword("")
        } else {
          Swal.fire({
            icon: 'error',
            text: "Lỗi hệ thống!",
          })
        }
      })
    }
  }

  return (
    <div className="signInWrap" onClick={handleExitSignIn}>
      <div className="signIn" onClick={e => e.stopPropagation()}>

        <div></div>

        <div className="signIn_form">
          <FontAwesomeIcon icon={solid('circle-xmark')} onClick={handleExitSignIn}/><br />
          <img src="https://cdn.bitrix24.vn/b23750033/bitrix24/6c4/6c42d51cb9be7008dcafc38731dceea3/logo_yMaJ1X4E.png" alt="Logo" />
          <h1>KHÁCH HÀNG ĐĂNG NHẬP</h1>
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
          <div className="signIn_password">
            <input type={show ? "text" : "password"} placeholder="Mật khẩu" onChange={e => setPassword(e.target.value)}/>
            {!show &&  <div onClick={handleEye}><FontAwesomeIcon icon={solid('eye')} /></div>}
            {show && <div onClick={handleEye}><FontAwesomeIcon icon={solid('eye-slash')} /></div>}
          </div>
          <div className="signIn_check">
            <input type="checkbox" name="remember" />
            <label htmlFor="remember">Ghi nhớ</label>
          </div>
          <button onClick={handleLogin}>Đăng nhập</button>
          <a href="#">Quên mật khẩu?</a>
          <div className="signIn_method">
            <span className="line"></span>
            <span>Bạn có thể đăng nhập bằng</span>
            <span className="line"></span>
          </div>
          <div className="signIn_media">
            <img src={Facebook} alt="facebook" />
            <img src={Google} alt="google" />
          </div>
          <div className="signIn_toSignUp">
            <span>Chưa có tài khoản?</span>
            <button onClick={handleShowSignUpBySignIn}>Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
