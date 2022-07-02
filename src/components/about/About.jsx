import React from 'react';
import './about.scss';

const About = () => {
   return (
      <div className="about-section">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="section-title">
                     <h2>About Me</h2>
                  </div>
               </div>
               <div className="col-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1000">
                  <div className="about-img">
                     <div className="image"></div>
                  </div>
               </div>
               <div className="col-12 col-lg-6 d-flex flex-column justify-content-center" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="about-content">
                     <h2>Hi, Im Rasul Akhundov</h2>
                     <p>Front End developer with industry experience building websites and web applications. I specialize in JavaScript. Experience working with Node Js and Mongo DB. Also have proffesional experience working with Scss BootStrap Jquery RestApi and React</p>
                     <a href="https://docs.google.com/uc?export=download&id=19SC5dBuz_HjDmTRuu_Kg8LugEU-ER-XJ">
                        <button type='button'><i className='fa-solid fa-download'></i> DOWNLOAD CV</button>
                     </a>
                  </div>
               </div>
               <div className="col-12 mt-5" data-aos="fade-up" data-aos-duration="1000">
                  <div className="about-info-section">
                     <div className="row">
                        <div className="col-12 col-md-6 mb-4 mb-md-0">
                           <ul>
                              <li>
                                 <span>City:</span>
                                 <span>Baku, Azerbaijan</span>
                              </li>
                              <li>
                                 <span>Degree:</span>
                                 <span>Computer Engineering</span>
                              </li>
                              <li>
                                 <span>Email:</span>
                                 <span>resul.axundov2002@mail.ru</span>
                              </li>
                           </ul>
                        </div>
                        <div className="col-12 col-md-6">
                           <ul>
                              <li>
                                 <span>Age:</span>
                                 <span>20</span>
                              </li>
                              <li>
                                 <span>Study:</span>
                                 <span>Baku Computer Vocational College</span>
                              </li>
                              <li>
                                 <span>Number:</span>
                                 <span>+994555074498</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About