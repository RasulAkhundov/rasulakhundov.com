import React from 'react';
import './navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {

   const [menuActive, setMenuActive] = useState(false);
   const navigate = useNavigate();

   const menuOpen = () => {
      if (menuActive === false) {
         $('#menu-container').removeClass('menu-close-animation');
         $('#menu-container').addClass('menu-open-animation');
         return setMenuActive(true);
      } else {
         $('#menu-container').removeClass('menu-open-animation');
         $('#menu-container').addClass('menu-close-animation');
         return setMenuActive(false);
      }
   }

   $(window).scroll(() => {
      let scrollY = window.scrollY;

      if (scrollY > 0) {
         $('.nav-bar').css('background', '#1d1e20');
      } else {
         $('.nav-bar').css('background', 'transparent');
      }
   })

   return (
      <div className="nav-bar">
         <div className="menu-container" id='menu-container'>
            <div className="container">
               <div className="row">
                  <div className="col-12 col-md-6 mb-3 d-flex justify-content-center justify-content-md-start mb-md-0">
                     <div className="route-section">
                        <ul>
                           <li onClick={() => {navigate('/'); menuOpen()}}>
                              <p>01</p>
                              Home
                           </li>
                           <li onClick={() => {navigate('/about'); menuOpen()}}>
                              <p>02</p>
                              About
                           </li>
                           <li onClick={() => {navigate('/services'); menuOpen()}}>
                              <p>03</p>
                              Services
                           </li>
                           <li onClick={() => {navigate('/skills'); menuOpen()}}>
                              <p>04</p>
                              Technical Skills
                           </li>
                           <li onClick={() => {navigate('/projects'); menuOpen()}}>
                              <p>05</p>
                              Projects
                           </li>
                           <li onClick={() => {navigate('/contact'); menuOpen()}}>
                              <p>06</p>
                              Contact
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-12 col-md-6">
                     <div className="contact-area">
                        <div className="contact-block">
                           <h3>EMAIL</h3>
                           <p>resul.axundov2002@mail.ru</p>
                        </div>
                        <div className="contact-block">
                           <h3>CALL ME</h3>
                           <p>994 55 507 44 98</p>
                        </div>
                        <div className="contact-block">
                           <h3>ADDRESS</h3>
                           <p>Baku, Azerbaijan</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="navbar-content">
               <div className="logo" style={{ cursor: 'pointer' }}>
                  <a onClick={() => { navigate('/'); scroll.scrollToTop() }}><img src={require('../../assets/logo.png')} alt="" /></a>
               </div>
               <div className="menu-burger">
                  <label htmlFor="check">
                     <input type="checkbox" id='check' />
                     <div className="line line-1"></div>
                     <div className="line line-2"></div>
                     <div className="line line-3"></div>
                     <div className="menu-toggle-button" onClick={menuOpen}></div>
                  </label>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar