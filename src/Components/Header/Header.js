import '../../styles/desktop/Header.scss';
import { useState } from 'react';
import { HashLink as ScrollLink } from 'react-router-hash-link';
import sm_logo from '../../Assets/sm_logo.png';
// import brush from '../../Assets/brush.svg';
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


  

  return (
    <header className={findStyleAndDesign(pageMode, pageDesign, 'header')} tabIndex="-1">
      <nav className={navBar ? 'nav-bar-active' : 'nav-bar'} tabIndex="-1">
        <div className="logo-container"> 
          <ScrollLink to="/#home"> 
            <img src={sm_logo} alt="home button" className="home-button" />
          </ScrollLink>
        </div>
        <div className="button-container">
        <label className="switch-wrap switch-html">
          <input type="checkbox" value={pageMode} onChange={toggleTheme} checked={pageMode === "Dark Mode" ? true : false}/>
          <div className="switch"></div>
        </label>
          {/* <button className="brush" onClick={handleDesignSwitch}><img src={brush} onClick={handleDesignSwitch}/></button> */}
          <ScrollLink smooth to="/#about" tabIndex="-1">
          <button className="nav-button">About</button></ScrollLink>
          <ScrollLink to="/portfolio/#projects"tabIndex="-1" > 
          <button className="nav-button">Portfolio</button></ScrollLink>
          <ScrollLink to="/contact/#contact" tabIndex="-1">
          <button className="nav-button">Contact</button></ScrollLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
