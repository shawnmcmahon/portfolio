import '../../styles/desktop/Header.scss';
import { useState } from 'react';
import { HashLink as ScrollLink } from 'react-router-hash-link';
import { Link }  from 'react-router-dom';
import sm_logo from '../../assets/sm_logo.png';
import brush from '../../assets/brush.svg';

const Header = ({ pageMode, handleModeSwitch, handleDesignSwitch}) => {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }

    window.addEventListener('scroll', changeBackground)

  return (
    <header className="header">
      <nav className={navBar ? 'nav-bar-active' : 'nav-bar'}>
        <div className="logo-container"> 
          <ScrollLink to="/#home"> 
            <img src={sm_logo} className="home-button" />
          </ScrollLink>
        </div>
        <div className="button-container">
        <label className="switch-wrap switch-html">
          <input type="checkbox" value={pageMode} onChange={handleModeSwitch} checked={pageMode === "Dark Mode" ? true : false}/>
          <div className="switch"></div>
        </label>
          <button className="brush" onClick={handleDesignSwitch}><img src={brush} onClick={handleDesignSwitch}/></button>
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
