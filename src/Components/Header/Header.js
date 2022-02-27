import '../../styles/desktop/Header.scss';
// import '../../styles/tablet/Header-tablet.scss';
// import '../../styles/phone/Header-phone.scss';
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
      <header className="w-full flex flex-col justify-center fixed" tabIndex="-1">
        <nav className={navBar ? 'h-20 py-1 bg-black bg-opacity-80 flex items-center  transition duration-75 ease-out' : 
                                  'h-20 py-1 bg-black flex items-center transition duration-75 ease-linear'} tabIndex="-1">                          
          <div className="w-1/4"> 
            <ScrollLink to="/#home"> 
              <img src={sm_logo} alt="home button" className=" min-w-min h-20  border-none outline-none self-center pl-6 flex" />
            </ScrollLink>
          </div>
          <div className="flex w-full justify-end">
              <label className="switch-wrap switch-html">
                <input type="checkbox" value={pageMode} onChange={toggleTheme} checked={pageMode === "Dark Mode" ? true : false}/>
                <div className="switch"></div>
              </label>
              <div> 
                <ScrollLink smooth to="/#about" >
                <button className="text-white bg-transparent font-Prompt border-none text-base m-8 font-light w-28 h-20 cursor-pointer no-underline  hover:bg-seaGreen">About</button></ScrollLink>
                <ScrollLink to="/portfolio/#projects" > 
                <button className="nav-button">Portfolio</button></ScrollLink>
                <ScrollLink to="/contact/#contact">
                <button className="nav-button">Contact</button></ScrollLink>
              </div> 
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
