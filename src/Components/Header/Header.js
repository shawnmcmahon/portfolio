import './Header.css';
import { HashLink as ScrollLink } from 'react-router-hash-link';
import { Link }  from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="button-container">
          <ScrollLink to="/#home"> 
            <button className="nav-button">Home</button>
          </ScrollLink>
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
