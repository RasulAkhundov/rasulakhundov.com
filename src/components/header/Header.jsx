import React from 'react';
import './header.scss';
import { animateScroll as scroll } from 'react-scroll';

const Header = () => {
   return (
      <header>
         <div className="bottom-navigation-button">
            <div className="container d-flex justify-content-end">
               <div className="scroll-button">
                  <div className="dot"></div>
                  <div className="movedButton" onClick={() => scroll.scrollTo(1000)}>
                     <div className="mouse-dot"></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="fixed-social-icons">
                <a href="https://www.facebook.com/rasul.axundov.7/" target="_blank" rel='noreferrer'><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/_raxundov_/" target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/rasul-axundov-bb34b0192/" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin-in"></i></a>
                <span>Follow Me</span>
            </div>
         <div className="container">
            <div className="row justify-content-center align-items-center">
               <div className="col-12 col-lg-8">
                  <div className="header-info-cover">
                     <div className="header-info-content">
                        <div className="header-image"></div>
                        <h2>RASUL AXUNDOV</h2>
                        <span>I'M WEB DEVELOPER</span>
                        <div className="header-social-icons">
                           <a href="https://www.facebook.com/rasul.axundov.7/" target="_blank" rel='noreferrer'>
                              <i className="fa-brands fa-facebook-f"></i>
                           </a>
                           <a href="https://www.linkedin.com/in/rasul-axundov-bb34b0192/" target="_blank" rel='noreferrer'>
                              <i className="fa-brands fa-linkedin-in"></i>
                           </a>
                           <a href="https://www.instagram.com/_raxundov_/" target="_blank" rel='noreferrer'>
                              <i className="fa-brands fa-instagram"></i>
                           </a>
                           <a href="https://github.com/RasulAkhundov" target="_blank" rel='noreferrer' style={{ margin: 0 }}>
                              <i className="fa-brands fa-github"></i>
                           </a>
                        </div>
                        <div className="header-buttons">
                           <a href="/contact" className='contact' style={{marginRight: '15px'}}>
                              <button type='button'>CONTACT ME</button>
                           </a>
                           <a href="https://docs.google.com/uc?export=download&id=19SC5dBuz_HjDmTRuu_Kg8LugEU-ER-XJ">
                              <button type='button'><i className='fa-solid fa-download'></i> DOWNLOAD CV</button>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header