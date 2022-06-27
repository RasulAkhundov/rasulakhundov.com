import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

function App() {

  const onMouseMove = (e) => {
    $('.cursor-pointer').css('left', `${e.pageX}px`);
    $('.cursor-pointer').css('top', `${e.pageY}px`);
  }
  document.addEventListener('mousemove', onMouseMove);

  //Page Open Function
  const pageOpen = () => {
    console.log("wef")
    $('#page-opening-button').addClass('loading-button-animation');

    setTimeout(function () {
      console.log("Wefwef")
      $("#loading-wrapper").addClass('loading-page-animation');
    }, 1500);

    setTimeout(function () {
      $("#loading-wrapper-cover").addClass('loading-cover-animation');
      $("body, html").css('overflow', 'visible');
      $("body").css('overflow-x', 'hidden');
    }, 2000);
  }

  return (
    <Router>
      <div className="app">
        <div className='loading-wrapper-cover' id='loading-wrapper-cover'></div>
        <div className='loading-wrapper' id='loading-wrapper'>
          <p className='opening-background-text'>
            RASUL
          </p>
          <button type='button' id='page-opening-button' onClick={pageOpen}>RASUL</button>
        </div>
        <div className="cursor-pointer" id="cursor-pointer">
          <div className="circle"></div>
        </div>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*'
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;