import React, { useState, useEffect } from 'react'
import './Account.css'
import DuyAnAvatar from '../../../Assets/Images/DuyAnAvatar.jpg';
import autoAvatar from '../../../Assets/Images/avatarclone.jpg';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserApi from '../../../Apis/UserApi'
import { useNavigate } from 'react-router-dom';
import  {storage}  from '../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from "uuid";
import Swal from "sweetalert2";

function Account() {
  // var user = {
  //   firstName: "Duy An",
  //   lastName: "Nguyễn",
  //   email: "nduyan1601@gmail.com",
  //   phoneNumber: "0938269974",
  //   gender: "male",
  //   birthday: new Date("2001-01-16").toLocaleDateString('pt-PT'),
  //   avatar: DuyAnAvatar,
  // }


  const [user, setUser] = useState({});

  useEffect(() => {
    UserApi.getMe({id: localStorage.getItem("userid")})
    .then(data => setUser({...data}));
  }, [])

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");  
    localStorage.removeItem("role"); 
    navigate('/');
    window.location.reload();
  }

  const [image, setImage] = useState(null);
  // const [curentImage, setcurrentImage] = useState();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!image) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef).then(data => {
        UserApi.updateUser({
          userId: localStorage.getItem("userid"),
          lastName: lastName,
          firstName: firstName,
          phoneNumber: phoneNumber,
          birthday: birthday,
          image: data 
        })
        .then(data => {
          UserApi.getMe({id: localStorage.getItem("userid")})
          .then(data => {
            setUser({...data})
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Thay đổi thông tin thành công',
              showConfirmButton: false,
              timer: 2000
            })
            window.location.reload();
          });
        })
      });
    })

  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // console.log("image: ", image)

  return (
    <div className="account">
      <div className="account-nav">
        <div className="account-nav-name">{user.lastName} {user.firstName}</div>
        <div className="account-nav-update">
          <FontAwesomeIcon className="account-nav-update--icon" icon={solid("pen")} />
          <div className="account-nav-update--title">Sửa hồ sơ</div>
        </div>
        <div className="account-nav-update">
          <FontAwesomeIcon className="account-nav-update--icon" icon={solid("arrow-right-from-bracket")} />
          <div className="account-nav-update--title logout" onClick={handleLogOut}>Đăng xuất</div>
        </div>  
      </div>

      <form className="account-info">
        <div className="account-info-title">HỒ SƠ CỦA TÔI</div>
        <div className="account-info-desc">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
        <div className="account-info-wrap">
          <div className="account-info-left">
            <div className="account-info-left-item">
              <label>Họ:</label>
              <input type="text" placeholder={user.lastName} id="lastName" name="lastName" onChange={e => setLastName(e.target.value)}/>
            </div>
            <div className="account-info-left-item">
              <label>Tên:</label>
              <input type="text" placeholder={user.firstName} id="firstName" name="firstName" onChange={e => setFirstName(e.target.value)}/>
            </div>
            {/*<div className="account-info-left-item">
              <label>Email:</label>
              <input type="email" placeholder={user.email} name="email" onChange={e => setEmail(e.target.value === "" ? e.target.placeholder : e.target.value)}/>
  </div>*/}
            <div className="account-info-left-item">
              <label>Số điện thoại:</label>
              <input type="text" placeholder={user.phoneNumber} id="phoneNumber" name="phoneNumber" onChange={e => setPhoneNumber(e.target.value)}/>
            </div>
            {/*<div className="account-info-left-item">
              <label>Giới tính:</label>
              <div className="account-info-left-item-gender">
                <input type="radio" name="gender" value="male"/><label> Nam</label>
                <input type="radio" name="gender" value="female"/><label> Nữ</label>
                <input type="radio" name="gender" value="other"/><label> Khác</label>
              </div>
</div>*/}
            <div className="account-info-left-item">
              <label>Ngày sinh:</label>
              <input 
                id="bỉthday"
                type="date" 
                max={Date.now()} 
                value={birthday ? birthday : user.birthday} 
                onChange={e => setBirthday(e.target.value)}
              />
            </div>
          </div>

          <div className="account-info-right">
            {/*
              (selectedImage === null) ? (
                <img className="account-info-right-image" src={user.avatar} alt="" />
              ) : (
                <img className="account-info-right-image" src={window.URL.createObjectURL(selectedImage)} alt="" />
              )
            */}
            <img className="account-info-right-image" src={user.image ? user.image : autoAvatar} alt="" />

            <input type="file" name="Chọn ảnh" onChange={e => setImage(e.target.files[0])}/>
          </div>
        </div>
        <input className="account-info-submit" type="submit" onClick={handleSubmit} value="LƯU"/>
      </form>  
    </div>
  )
}

export default Account