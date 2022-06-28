import React from 'react';
import './portfolio.scss';

const Portfolio = () => {
   return (
      <div className="portfolio-section">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="section-title">
                     <h2>Projects</h2>
                  </div>
               </div>
               <div className="portfolios">
                  <div className="row justify-content-center">
                     <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div className="single-portfolio-item">
                           <h3 className='text-white m-0 py-2 text-center'>Personal Blog</h3>
                           <div className="screen">
                              <img className='image-1 img-fluit' src={require('../../assets/port-image-1.png')} alt="" />
                           </div>
                           <a href="https://personalblog-ar.netlify.app" target="_blank" rel="noreferrer"><button type='button'>VISIT</button></a>
                        </div>
                     </div>
                     <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div className="single-portfolio-item">
                        <h3 className='text-white m-0 py-2 text-center'>Techvio</h3>
                           <div className="screen">
                              <img className='image-2' src={require('../../assets/port-image-2.png')} alt="" />
                           </div>
                           <a href="https://techvio-ar.netlify.app" target="_blank" rel="noreferrer"><button type='button'>VISIT</button></a>
                        </div>
                     </div>
                     <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div className="single-portfolio-item">
                        <h3 className='text-white m-0 py-2 text-center'>Crypto NFT</h3>
                           <div className="screen">
                              <img className='image-3' src={require('../../assets/port-image-3.png')} alt="" />
                           </div>
                           <a href="https://nft-ar.netlify.app" target="_blank" rel="noreferrer"><button type='button'>VISIT</button></a>
                        </div>
                     </div>
                     <div className="col-12 col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="single-portfolio-item">
                        <h3 className='text-white m-0 py-2 text-center'>Petfood Shop</h3>
                           <div className="screen">
                              <img className='image-4' src={require('../../assets/port-image-4.png')} alt="" />
                           </div>
                           <a href="https://petshop-ar.netlify.app" target="_blank" rel="noreferrer"><button type='button'>VISIT</button></a>
                        </div>
                     </div>
                     <div className="col-12 col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="single-portfolio-item">
                        <h3 className='text-white m-0 py-2 text-center'>Boombox News</h3>
                           <div className="screen">
                              <img className='image-5' src={require('../../assets/port-image-5.png')} alt="" />
                           </div>
                           <a href="https://boombox-ar.herokuapp.com" target="_blank" rel="noreferrer"><button type='button'>VISIT</button></a>
                        </div>
                     </div>
                     <div className="col-12 col-md-6 col-lg-4 ">
                        <div className="single-portfolio-item">
                        <h3 className='text-white m-0 py-2 text-center'>Random generator</h3>
                           <div className="screen">
                              <img className='image-6' src={require('../../assets/port-image-6.png')} alt="" />
                           </div>
                           <a href="https://random-generator.netlify.app/" target="_blank" rel="noreferrer"><button type='button'>VISIT</button></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Portfolio