import './Header.css';
import { HashLink as ScrollLink } from 'react-router-hash-link';
import { Link }  from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="button-container">
          <Link to="/"> 
            <button className="nav-button">Home</button>
          </Link>
          <ScrollLink smooth to="/#about" >
           <button className="nav-button">About</button></ScrollLink>
          <Link to="/projects/" > 
           <button className="nav-button">Portfolio</button></Link>
          <Link to="/contact/">
          <button className="nav-button">Contact</button></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
