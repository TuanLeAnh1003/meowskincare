import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingOptions.css';

function SettingOptions() {

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");  
    localStorage.removeItem("role"); 
    navigate('/');
    window.location.reload();
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="setting">
      <h1>Tùy chọn tổng quan</h1>
      <div className="setting__option">
        <p>Ngôn ngữ của trang:</p>
        <select name="language" id="language">
          <option value="Vietnamese">Tiếng Việt</option>
          <option value="English">Tiếng Anh</option>
        </select>
      </div>
      <div className="setting__option">
        <p>Múi giờ:</p>
        <select name="time" id="time">
          <option value="utc+7">UTC + 7</option>
        </select>
      </div>
      <div className="setting__option">
        <p>Định dạng ngày tháng:</p>
        <select name="date-format" id="date-format">
          <option value="dmy">dd/mm/yyyy</option>
        </select>
      </div>
      <div className="setting__option">
        <p>Định dạng thời gian:</p>
        <select name="time-format" id="time-format">
          <option value="hms">hh:mm:ss</option>
        </select>
      </div>
      <div className="setting__option">
        <p>Đăng xuất:</p>
        <button onClick={handleLogOut}>Đăng xuất</button>
      </div>
    </div>
  )
}

export default SettingOptions