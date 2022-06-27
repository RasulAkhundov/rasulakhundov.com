import React from 'react';
import './portfolio.scss';
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Portfolio = () => {
   return (
      <div className="portfolio-section">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="section-title">
                     <h2>Portfolio</h2>
                  </div>
               </div>
               <div className="portfolios">
                  <div className="row justify-content-center">
                     <Swiper className="swiper"
                        slidesPerView={4}
                        slidesPerGroup={1}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={20}
                        breakpoints={{
                           1200: {
                              slidesPerView: 4
                           },
                           991: {
                              slidesPerView: 3
                           },
                           768: {
                              slidesPerView: 2
                           },
                           0: {
                              slidesPerView: 1
                           }
                      }}
                     >
                        <SwiperSlide className="swiper-slide">
                           <div className="col-12">
                              <div className="single-portfolio-item">
                                 <div className="screen">
                                    <img className='image-1' src={require('../../assets/port-image-1.png')} alt="" />
                                 </div>
                                 <a href="https://personalblog-ar.netlify.app" target="_blank" rel="noreferrer"><button type='button'>VISIT</button></a>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                           <div className="col-12">
                              <div className="single-portfolio-item">
                                 <div className="screen">
                                    <img className='image-2' src={require('../../assets/port-image-2.png')} alt="" />
                                 </div>
                                 <a href="https://techvio-ar.netlify.app" target="_blank" rel="noreferrer"><button type='button'>VISIT</button></a>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                           <div className="col-12">
                              <div className="single-portfolio-item">
                                 <div className="screen">
                                    <img className='image-3' src={require('../../assets/port-image-3.png')} alt="" />
                                 </div>
                                 <a href="https://nft-ar.netlify.app" target="_blank" rel="noreferrer"><button type='button'>VISIT</button></a>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                           <div className="col-12">
                              <div className="single-portfolio-item">
                                 <div className="screen">
                                    <img className='image-4' src={require('../../assets/port-image-4.png')} alt="" />
                                 </div>
                                 <a href="https://petshop-ar.netlify.app" target="_blank" rel="noreferrer"><button type='button'>VISIT</button></a>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                           <div className="col-12">
                              <div className="single-portfolio-item">
                                 <div className="screen">
                                    <img className='image-5' src={require('../../assets/port-image-5.png')} alt="" />
                                 </div>
                                 <a href="https://boombox-ar.herokuapp.com" target="_blank" rel="noreferrer"><button type='button'>VISIT</button></a>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                           <div className="col-12">
                              <div className="single-portfolio-item">
                                 <div className="screen">
                                    <img className='image-6' src={require('../../assets/port-image-6.png')} alt="" />
                                 </div>
                                 <a href="https://quiz-az.herokuapp.com" target="_blank" rel="noreferrer"><button type='button'>VISIT</button></a>
                              </div>
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Portfolio