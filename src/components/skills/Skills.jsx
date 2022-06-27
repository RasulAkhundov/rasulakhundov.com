import React from 'react';
import './skills.scss';

const Skills = () => {
   return (
      <div className="skills-section">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="section-title">
                     <h2>Technical Skills</h2>
                  </div>
               </div>
               <div className="col-12 col-md-6 mb-4 mb-md-0">
                  <div className="skills-list">
                     <div className="skills-title">
                        <div className="line"></div>
                     </div>
                     <div className="html list-element">
                        <div className="single-skill-header">
                           <span className="skill-name">HTML</span>
                           <span className="skill-percent">100%</span>
                        </div>
                        <div className="skill-bar">
                           <div className="progress-bar" style={{width: '100%'}} data-aos="fade-right" data-aos-duration="1000"></div>
                        </div>
                     </div>
                     <div className="css list-element">
                        <div className="single-skill-header">
                           <span className="skill-name">CSS</span>
                           <span className="skill-percent">100%</span>
                        </div>
                        <div className="skill-bar">
                           <div className="progress-bar" style={{width: '100%'}} data-aos="fade-right" data-aos-duration="1000"></div>
                        </div>
                     </div>
                     <div className="javascript list-element">
                        <div className="single-skill-header">
                           <span className="skill-name">JAVASCRIPT</span>
                           <span className="skill-percent">80%</span>
                        </div>
                        <div className="skill-bar">
                           <div className="progress-bar" style={{width: '80%'}} data-aos="fade-right" data-aos-duration="1000"></div>
                        </div>
                     </div>
                     <div className="scss list-element">
                        <div className="single-skill-header">
                           <span className="skill-name">SCSS</span>
                           <span className="skill-percent">100%</span>
                        </div>
                        <div className="skill-bar">
                           <div className="progress-bar" style={{width: '100%'}} data-aos="fade-right" data-aos-duration="1000"></div>
                        </div>
                     </div>
                     <div className="npm list-element">
                        <div className="single-skill-header">
                           <span className="skill-name">NPM</span>
                           <span className="skill-percent">70%</span>
                        </div>
                        <div className="skill-bar">
                           <div className="progress-bar" style={{width: '70%'}} data-aos="fade-right" data-aos-duration="1000"></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-md-6">
                  <div className="skills-list">
                     <div className="skills-title">
                        <div className="line"></div>
                     </div>
                     <div className="react list-element">
                        <div className="single-skill-header">
                           <span className="skill-name">REACT JS</span>
                           <span className="skill-percent">70%</span>
                        </div>
                        <div className="skill-bar">
                           <div className="progress-bar" style={{width: '70%'}} data-aos="fade-right" data-aos-duration="1000"></div>
                        </div>
                     </div>
                     <div className="node list-element">
                        <div className="single-skill-header">
                           <span className="skill-name">NODE JS</span>
                           <span className="skill-percent">70%</span>
                        </div>
                        <div className="skill-bar">
                           <div className="progress-bar" style={{width: '70%'}} data-aos="fade-right" data-aos-duration="1000"></div>
                        </div>
                     </div>
                     <div className="mongo list-element">
                        <div className="single-skill-header">
                           <span className="skill-name">MONGO DB</span>
                           <span className="skill-percent">80%</span>
                        </div>
                        <div className="skill-bar">
                           <div className="progress-bar" style={{width: '80%'}} data-aos="fade-right" data-aos-duration="1000"></div>
                        </div>
                     </div>
                     <div className="bootstrap list-element">
                        <div className="single-skill-header">
                           <span className="skill-name">BOOTSTRAP</span>
                           <span className="skill-percent">100%</span>
                        </div>
                        <div className="skill-bar">
                           <div className="progress-bar" style={{width: '100%'}} data-aos="fade-right" data-aos-duration="1000"></div>
                        </div>
                     </div>
                     <div className="git list-element">
                        <div className="single-skill-header">
                           <span className="skill-name">GIT</span>
                           <span className="skill-percent">70%</span>
                        </div>
                        <div className="skill-bar">
                           <div className="progress-bar" style={{width: '70%'}} data-aos="fade-right" data-aos-duration="1000"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Skills