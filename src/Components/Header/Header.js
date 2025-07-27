import '../../styles/desktop/Header.scss';
import { useState } from 'react';
import { HashLink as ScrollLink } from 'react-router-hash-link';
import sm_logo from '../../Assets/sm_logo.png';
import findStyleAndDesign from '../../findStyleAndDesign.js';

const Header = ({ pageMode, pageDesign, handleModeSwitch, handleDesignSwitch, toggleTheme}) => {
  const [navBar, setNavBar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={findStyleAndDesign(pageMode, pageDesign, 'header')} tabIndex="-1">
      <nav className={navBar ? 'nav-bar-active' : 'nav-bar'} tabIndex="-1">
        <div className="logo-container"> 
          <ScrollLink to="/#home"> 
            <img src={sm_logo} alt="home button" className="home-button" />
          </ScrollLink>
        </div>

        {/* Mobile Toggle Switch - Always visible on mobile */}
        <div className="mobile-switch-container">
          <label className="switch-wrap switch-html">
            <input type="checkbox" value={pageMode} onChange={toggleTheme} checked={pageMode === "Dark Mode" ? true : false}/>
            <div className="switch"></div>
          </label>
        </div>

        {/* Hamburger Menu Button - Tablet and Mobile */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'hamburger-active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Desktop Navigation */}
        <div className="button-container desktop-nav">
          <label className="switch-wrap switch-html">
            <input type="checkbox" value={pageMode} onChange={toggleTheme} checked={pageMode === "Dark Mode" ? true : false}/>
            <div className="switch"></div>
          </label>
          
          <ScrollLink smooth to="/#about">
            <button className="nav-button">About</button>
          </ScrollLink>
          <ScrollLink to="/portfolio/#projects">
            <button className="nav-button">Portfolio</button>
          </ScrollLink>
          <ScrollLink to="/contact/#contact">
            <button className="nav-button">Contact</button>
          </ScrollLink>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <nav className="mobile-nav">
            <ScrollLink smooth to="/#about" onClick={closeMobileMenu}>
              <button className="mobile-nav-button">About</button>
            </ScrollLink>
            <ScrollLink to="/portfolio/#projects" onClick={closeMobileMenu}>
              <button className="mobile-nav-button">Portfolio</button>
            </ScrollLink>
            <ScrollLink to="/contact/#contact" onClick={closeMobileMenu}>
              <button className="mobile-nav-button">Contact</button>
            </ScrollLink>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Header;
