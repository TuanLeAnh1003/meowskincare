import React from 'react';
import './AdminFooter.css';
import watch from '../../Assets/Images/image 1.png';
import { Link } from "react-router-dom";

function AdminFooter() {
  return (
    <div className="ad-footer">
      <Link to="/" className="ad-footer__logo">
        <img src={watch} alt="watch" />
        <div>
          <h1>UITWatch</h1>
          <span>SINCE 2021</span>
        </div>
      </Link>
    </div>
  )
}

export default AdminFooter