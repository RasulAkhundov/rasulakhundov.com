import React from 'react';
import './contact.scss';

const Contact = () => {
   return (
      <div className="contact-section">
         <div className="container">
            <div className="col-12">
               <div className="section-title">
                  <h2>Get in touch</h2>
               </div>
            </div>
            <div className="row">
               <div className="col-12 col-sm-6 col-lg-4 mb-4 mt-sm-0 single-info-cover" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="300">
                  <div className="single-info my-location">
                     <i className="fa-solid fa-location-dot"></i>
                     <h3>My Location:</h3>
                     <span>Baku, Azerbaijan</span>
                  </div>
               </div>
               <div className="col-12 col-sm-6 col-lg-4 mt-0 mt-lg-5 single-info-cover" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="600">
                  <div className="single-info my-phone" style={{ background: '#222222' }}>
                     <i className="fa-solid fa-phone"></i>
                     <h3>Phone Number:</h3>
                     <span>+9945550744998</span>
                  </div>
               </div>
               <div className="col-12 col-sm-6 col-lg-4 mt-4 mt-lg-0 single-info-cover" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="900">
                  <div className="single-info email-address">
                     <i className="fa-solid fa-envelope"></i>
                     <h3>Email Address:</h3>
                     <span>resul.axundov2002@mail.ru</span>
                  </div>
               </div>
               <div className="col-12 col-lg-6 mt-5" data-aos="fade-right" data-aos-duration="400">
                  <div className="contact-form">
                     <div className="row">
                        <div className="col-12 col-sm-6 mb-3">
                           <div className="input-cover contact-form-name">
                              <input type="text" id="form-name" placeholder="Name"/>
                           </div>
                        </div>
                        <div className="col-12 col-sm-6 mb-3">
                           <div className="input-cover contact-form-email">
                              <input type="email" id="form-email" placeholder="Email"/>
                           </div>
                        </div>
                        <div className="col-12 mb-3">
                           <div className="input-cover contact-form-subject">
                              <input type="text" id="form-subject" placeholder="Subject"/>
                           </div>
                        </div>
                        <div className="col-12 mb-4">
                           <div className="input-cover contact-form-message">
                              <textarea name="message" id="form-message" placeholder="Message" style={{ maxHeight: '80px'}}></textarea>
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="input-cover contact-form-button">
                              <button type="button" id="send-message">SEND MESSAGE</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-6 mt-5" data-aos="fade-left" data-aos-duration="400">
                  <div className="mapouter">
                     <div className="gmap_canvas">
                        <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=baku,%20azerbaijan&t=k&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact