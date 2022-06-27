import React from 'react';
import './services.scss';

const Services = () => {
   return (
      <div className="services-section">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="section-title">
                     <h2>Services</h2>
                  </div>
                  <div className="row">
                     <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1000">
                        <div className="services-container services-container-1 p-4">
                           <div className="img">
                              <img src={require('../../assets/front-end.png')} alt="frontend" />
                           </div>
                           <h2>Front End</h2>
                           <p>A responsive design makes your website accessible to all users, regardless of their device.</p>
                        </div>
                     </div>
                     <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-duration="1000">
                        <div className="services-container services-container-2 p-4 mt-0 mt-lg-5">
                           <div className="img">
                              <img src={require('../../assets/backend.png')} alt="backend" />
                           </div>
                           <h2>Node Js</h2>
                           <p>Clean, modern designs - optimized for performance, search engines, and converting users to customers.</p>
                        </div>
                     </div>
                     <div className="col-12 col-md-6 col-lg-4" data-aos="fade-left" data-aos-duration="1000">
                        <div className="services-container services-container-3 p-4" >
                           <div className="img">
                              <img src={require('../../assets/server.png')} alt="server" />
                           </div>
                           <h2>Mongo Db</h2>
                           <p>Get insights into who is browsing your site so that you can make smarter business decisions.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Services