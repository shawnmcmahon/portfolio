import '../../styles/desktop/Header.scss';
import { useState } from 'react';
import { HashLink as ScrollLink } from 'react-router-hash-link';
import { Link }  from 'react-router-dom';
import sm_logo from '../../assets/sm_logo.png';

const Header = ({ pageStyle, handleStyleSwitch}) => {

  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo-container"> 
          <ScrollLink to="/#home"> 
            <img src={sm_logo} className="home-button" />
          </ScrollLink>
        </div>
        <div className="button-container">
        <label class="switch-wrap switch-html">
          <input type="checkbox" value={pageStyle} onChange={handleStyleSwitch} checked={pageStyle === "Dark Mode" ? true : false}/>
          <div class="switch"></div>
        </label>
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
