import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import watch from "../../Assets/Images/image 1.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import AdminSignIn from "../AdminSignIn/AdminSignIn";
import { Link } from "react-router-dom";
import { actions, useStore } from '../../Store';
import autoAvatar from '../../Assets/Images/avatarclone.jpg';
import UserApi from "../../Apis/UserApi";

function Header() {
  const [isSignInShowed, setIsSignInShowed] = useState(false);
  const [isSignUpShowed, setIsSignUpShowed] = useState(false);
  const [isAdminSignInShowed, setIsAdminSignInShowed] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);
  const [hideNavMobile, setHideNavMobile] = useState(false);

  const userId = localStorage.getItem('userid')

  const handleShowSignIn = () => {
    setIsSignInShowed(true);
  };

  const childShowSignIn1 = (a) => {
    setIsSignInShowed(a);
  };

  const childShowSignUp2 = (a) => {
    setIsSignUpShowed(a);
  };

  const childShowSignUp1 = (a) => {
    if (a) {
      setIsSignUpShowed(a);
      setIsSignInShowed(false);
    }
  };

  const childShowSignIn2 = (a) => {
    if (a) {
      setIsSignInShowed(a);
      setIsSignUpShowed(false);
    }
  };

  const handleShowAdminSignIn = () => {
    setIsAdminSignInShowed(true);
  };

  const childShowAdmSignIn = (a) => {
    setIsAdminSignInShowed(a);
  };


  const [searchInput, setSearchInput] = useState("");
  const [state, dispatch, isAuthen] = useStore();
  const [user, setUser] = useState({})

  const handleSearchInput = () => {
    dispatch(actions.getSearchInput(searchInput));
  }

  useEffect(() => {
    UserApi.getMe({id: localStorage.getItem("userid")})
    .then(data => setUser({...data}));
  }, [])

  return (
    <div className='header'>
      <div className='header-first'>
        <div className='header-first__search'>
          <Link to="/search" style={{textDecoration: "none", color: "#fff"}}><FontAwesomeIcon icon={solid("magnifying-glass")} onClick={handleSearchInput} /></Link>
          <input type='text' placeholder='Tìm sản phẩm...' onChange={e => setSearchInput(e.target.value)}/>
        </div>

        <div className='header-first__more'>
          <div className='header-first__more-item header-first__more-order'>
            {
              userId !== null && (
                <>
                  <FontAwesomeIcon icon={solid("box")} />
                  <Link to='/search-order'>Tra cứu đơn hàng</Link>
                </>
              )
            }
          </div>

          <div className='header-first__more-item header-first__more-like'>
            {
              userId !== null && 
              (
                <>
                  <FontAwesomeIcon icon={solid("heart")} />
                  <Link to='/liked-products'>Yêu thích</Link>
                </>
              )
            }
          </div>

          {isAuthen() 
            ?<Link to={localStorage.getItem("role") === "user" ? `account/${user._id}` : `/admin`} className="header-first__more-item header-first__more-search user-button">
              <p>Chào, {user.lastName} {user.firstName}</p>
              <img className="user-avatar" src={user.image ? user.image : autoAvatar} />
            </Link>
            :<div className="header-first__more-item header-first__more-search" onClick={handleShowSignIn}>
              <FontAwesomeIcon icon={solid('user')} />
              <span>Đăng nhập</span>
            </div>
          }
        </div>
      </div>

      <div className='header-second'>
        <FontAwesomeIcon icon={solid("bars")} className='header-second__bars' onClick={() => {setHideOverlay(true); setHideNavMobile(true)}}/>

        <Link to='/' className='header-second__logo'>
          <img style={{ width: "200px" }} src="https://cdn.bitrix24.vn/b23750033/bitrix24/6c4/6c42d51cb9be7008dcafc38731dceea3/logo_yMaJ1X4E.png" alt='watch' />
        </Link>

        <ul className='header-second__nav'>
          <Link to='/about'>GIỚI THIỆU</Link>
          <Link to='/sale'>SẢN PHẨM</Link>
          <Link to='/saleoff'>SALE OFF</Link>
          <Link to='/news'>TIN TỨC</Link>
          <Link to='/contact'>LIÊN HỆ</Link>
          <Link to='/policy'>CHÍNH SÁCH</Link>
        </ul>

        <Link to='/cart' className='header-second__cart'>
          <FontAwesomeIcon icon={solid("cart-shopping")} />
        </Link>
      </div>

      {
        hideOverlay && 
        <div className='header-overlay' onClick={() => {setHideOverlay(false); setHideNavMobile(false)}}></div>
      }

      {
        hideNavMobile && 
        <div className='header-mobile__nav-wrapper'>
          <Link to='/' className='header-second__logo-2'>
            <img src={watch} alt='watch' />
          </Link>
          <ul className='header-mobile__nav' onClick={() => {setHideOverlay(false); setHideNavMobile(false)}}>
            <Link to=''>GIỚI THIỆU</Link>
            <Link to='/sale'>SẢN PHẨM</Link>
            <Link to='/saleoff'>SALE OFF</Link>
            <Link to='/news'>TIN TỨC</Link>
            <Link to='/contact'>LIÊN HỆ</Link>
            <Link to='/policy'>CHÍNH SÁCH</Link>
          </ul>
          <FontAwesomeIcon
            icon={solid("times")}
            className='header-mobile__nav-icon'
            onClick={() => {setHideOverlay(false); setHideNavMobile(false)}}
          />
        </div>
      }


      {/* <div className='header-third'>
        <FontAwesomeIcon icon={solid("angle-left")} />
        <h2>FREE SHIP VỚI HÓA ĐƠN TỪ 800K</h2>
        <FontAwesomeIcon icon={solid("angle-right")} />
      </div> */}

      {isSignInShowed && (
        <SignIn
          handleShowSignIn1={childShowSignIn1}
          handleShowSignUp1={childShowSignUp1}
        />
      )}
      {isSignUpShowed && (
        <SignUp
          handleShowSignIn2={childShowSignIn2}
          handleShowSignUp2={childShowSignUp2}
        />
      )}
      {isAdminSignInShowed && (
        <AdminSignIn handleShowAdmSignIn={childShowAdmSignIn} />
      )}
    </div>
  );
}

export default Header;
