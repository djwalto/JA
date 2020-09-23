import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = (props) => {
  let loginLinkData = {
    path: '/adminlogin',
    text: 'Login',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/adminreports">
        <img
          className="JALogo"
          src="https://greaterkansascity.ja.org/contentAsset/image/ac1a740b-7a33-4563-906c-5324fec01b64/hostThumbnail/filter/Resize/resize_h/80"
        />
      </Link>

      <div>
        {/* <Link className="nav-link" to={loginLinkData.path}> */}
        {/* <Link className="nav-link" to="/adminlogin">
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
        {/* {loginLinkData.text} */}
        {/* <LogOutButton className="nav-link" /> 
        </Link> */}
        <LogOutButton className="nav-link" />
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            {/* <Link className="nav-link" to="/info">
              Info Page
            </Link> */}
            <LogOutButton className="nav-link" />
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        {/* <Link className="nav-link" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
