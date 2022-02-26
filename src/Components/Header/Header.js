import '../../styles/desktop/Header.scss';
import '../../styles/tablet/Header-tablet.scss';
import '../../styles/phone/Header-phone.scss';
import { useState } from 'react';
import { HashLink as ScrollLink } from 'react-router-hash-link';
import sm_logo from '../../Assets/sm_logo.png';
import brush from '../../Assets/brush.svg';
import menu from '../../Assets/menu.svg';
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

// <nav className={navBar ? 'nav-bar-active' : 'nav-bar'} tabIndex="-1">
  

  return (
    <div className={pageMode ? "Dark Mode" : "Light Mode"}>
      <header className={findStyleAndDesign(pageMode, pageDesign, 'header')} tabIndex="-1">
        <nav className={navBar ? 'w-full h-20 py-1 bg-black flex items-center' : 'w-full h-20 py-1 bg-black flex items-center'} tabIndex="-1">
          <div className="logo-container"> 
            <ScrollLink to="/#home"> 
              <img src={sm_logo} alt="home button" className="home-button" />
            </ScrollLink>
          </div>
          {window.innerWidth <= 650 && 
              <label className="switch-wrap switch-html">
                <input type="checkbox" value={pageMode} onChange={toggleTheme} checked={pageMode === "Dark Mode" ? true : false}/>
                <div className="switch"></div>
              </label>
            }
          <div className="button-container">
            {window.innerWidth > 650 && 
              <label className="switch-wrap switch-html">
                <input type="checkbox" value={pageMode} onChange={toggleTheme} checked={pageMode === "Dark Mode" ? true : false}/>
                <div className="switch"></div>
              </label>
            }
            {/* <button className="brush" onClick={handleDesignSwitch}><img src={brush} onClick={handleDesignSwitch}/></button> */}
            {/* <button class="hamburger" id="hamburger"> 
              <i class="fas fa-bars"></i>
            </button>
              <ul class="nav-ul" id="nav-ul">
                <ScrollLink smooth to="/#about" ><li>About</li></ScrollLink> 
                <ScrollLink to="/portfolio/#projects" ><li>Portfolio</li></ScrollLink>
                <ScrollLink to="/contact/#contact"><li>Contact </li></ScrollLink>
              </ul> */}
            {/* {window.innerWidth <= 650 && 
              <img src={menu} className="menu-button"/>
            }
            {window.innerWidth > 650 && */}
              <> 
                <ScrollLink smooth to="/#about" >
                <button className="nav-button">About</button></ScrollLink>
                <ScrollLink to="/portfolio/#projects" > 
                <button className="nav-button">Portfolio</button></ScrollLink>
                <ScrollLink to="/contact/#contact">
                <button className="nav-button">Contact</button></ScrollLink>
              </> 
            {/* } */}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
