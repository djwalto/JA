// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// // import LogOutButton from '../LogOutButton/LogOutButton';
// import './MobileNavStyle.css';
// import mapStoreToProps from '../../redux/mapStoreToProps';
// import TestNav from '../MobileNav/TestNav';

// const MobileNav = (props) => {
//   let loginLinkData = {
//     path: '/login',
//     text: 'Login / Register',
//   };

//   if (props.store.user.id != null) {
//     loginLinkData.path = '/user';
//     loginLinkData.text = 'Home';
//   }

//   // let x = document.getElementById("myLinks");
//   // if (x.style.display === "block") {
//   //   x.style.display = "none";
//   // } else {
//   //   x.style.display = "block";
//   // }

//   return (
//     <TestNav />
//     // <div className="mobile-container">

//     //   <div className="topnav">
//     //     <a href="#home" className="active">Logo</a>
//     //     <div id="myLinks">
//     //       <a href="#news">News</a>
//     //       <a href="#contact">Contact</a>
//     //       <a href="#about">About</a>
//     //     </div>
//     //     <a href="javascript:void(0);" className="icon" >
//     //       <i className="fa fa-bars"></i>
//     //     </a>
//     //   </div>

//     //       <div >
//     //         <h3>Vertical Mobile Navbar</h3>
//     //         <p>This example demonstrates how a navigation menu on a mobile/smart phone could look like.</p>
//     //         <p>Click on the hamburger menu (three bars) in the top right corner, to toggle the menu.</p>
//     //       </div>

//     //       <div className="container">
//     //         <div className="content">
//     //           <h2></h2>
//     //           <p></p>
//     //           <a href="#" className="btn">
//     //             Hello, Johanna D!
//     //           </a>
//     //         </div>
//     //       </div>
//     //     </div >
//     //   );

//     // }
/* // <div className="nav">
    //   <Link to="/home">
    //     <h2 className="nav-title">Junior Achievement</h2>
    //   </Link>
    //   <div className="nav-right">
    //     <Link className="nav-link" to={loginLinkData.path}>
    //       {/* Show this link if they are logged in or not,
    //       but call this link 'Home' if they are logged in,
    //       and call this link 'Login / Register' if they are not */

/* //       {loginLinkData.text} */

/* //     </Link> */

//     {/* Show the link to the info page and the logout button if the user is logged in */}
//     {props.store.user.id && (
//       <> */}
//         <Link className="nav-link" to="/info">
//           Info Page
//         </Link>
//         <LogOutButton className="nav-link" />
//       </>
//     )}
//     {/* Always show this link since the about page is not protected */}
//     <Link className="nav-link" to="/about">
//       About
//     </Link>
//     <Link className="nav-link" to="/volunteer">
//       Volunteer
//     </Link>
//   </div>
// </div>
// );

//   )
// }
// export default connect(mapStoreToProps)(MobileNav);
