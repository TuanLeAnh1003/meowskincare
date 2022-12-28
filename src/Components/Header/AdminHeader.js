import React, {useState, useEffect} from 'react';
import './AdminHeader.css';
import watch from '../../Assets/Images/image 1.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import UserApi from '../../Apis/UserApi';
import autoAvatar from '../../Assets/Images/avatarclone.jpg';


function AdminHeader() {

  const [user, setUser] = useState({});

  useEffect(() => {
    UserApi.getMe({id: localStorage.getItem("userid")})
    .then(data => setUser({...data}));
  }, [])

  return (
    <div className="ad-header">
      <Link to="/" className="ad-header__logo">
        <img src={watch} alt="watch" />
        <div>
          <h3>UITWatch</h3>
          <span>SINCE 2021</span>
        </div>
      </Link>

      <div className="ad-header__item">
        <FontAwesomeIcon icon={solid('house')} />
        <h3>UIT WATCH</h3>
      </div>

      <div className="ad-header__item">
        <FontAwesomeIcon icon={solid('house')} />
        <h3>BÁN HÀNG</h3>
      </div>

      <div className="ad-header__item ad-header__user">
        <p>Chào, {`${user.lastName} ${user.firstName}`}</p>
        <img src={user.image ? user.image : autoAvatar} alt="avatar"/>
      </div>
    </div>
  )
}

export default AdminHeader