import '../../styles/desktop/Header.scss';
import '../../styles/tablet/Header-tablet.scss';
import '../../styles/phone/Header-phone.scss';
import { useState } from 'react';
import { HashLink as ScrollLink } from 'react-router-hash-link';
import { Link }  from 'react-router-dom';
import sm_logo from '../../Assets/sm_logo.png';
import brush from '../../Assets/brush.svg';
import findStyleAndDesign from '../../findStyleAndDesign.js';

const Header = ({ pageMode, pageDesign, handleModeSwitch, handleDesignSwitch, toggleTheme}) => {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (pageDesign === 'Flat' && window.scrollY >= 50) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    }
    
    if (pageDesign === 'Flat') {
      window.addEventListener('scroll', changeBackground)
    }

  const handleNavBarDesign = () => {
    if (navBar) {
      return findStyleAndDesign(pageMode, pageDesign, 'nav-bar-active')
    } else {
      return findStyleAndDesign(pageMode, pageDesign, 'nav-bar')
    }
  } 


  

  return (
    <header className={findStyleAndDesign(pageMode, pageDesign, 'header')}>
      <nav className={navBar ? 'nav-bar-active' : 'nav-bar'}>
        <div className="logo-container"> 
          <ScrollLink to="/#home"> 
            <img src={sm_logo} className="home-button" />
          </ScrollLink>
        </div>
        <label className="switch-wrap switch-html">
          <input type="checkbox" value={pageMode} onChange={toggleTheme} checked={pageMode === "Dark Mode" ? true : false}/>
          <div className="switch"></div>
        </label>
        <div className="button-container">
          {/* <button className="brush" onClick={handleDesignSwitch}><img src={brush} onClick={handleDesignSwitch}/></button> */}
          {/* <button class="hamburger" id="hamburger"> 
            <i class="fas fa-bars"></i>
          </button>
            <ul class="nav-ul" id="nav-ul">
              <ScrollLink smooth to="/#about" ><li>About</li></ScrollLink> 
              <ScrollLink to="/portfolio/#projects" ><li>Portfolio</li></ScrollLink>
              <ScrollLink to="/contact/#contact"><li>Contact </li></ScrollLink>
            </ul> */}
          <ScrollLink smooth to="/#about" >
          <button className="nav-button">About</button></ScrollLink>
          <ScrollLink to="/portfolio/#projects" > 
          <button className="nav-button">Portfolio</button></ScrollLink>
          <ScrollLink to="/contact/#contact">
          <button className="nav-button">Contact</button></ScrollLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
