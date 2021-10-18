import './Header.css';
// import Contact from '../Contact/Contact';
import { Link }  from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="button-container">
          <Link to="/"> 
            <button className="nav-button">Home</button>
          </Link>
          <Link to="/about/" >
           <button className="nav-button">About</button></Link>
          <Link to="/projects/" > 
           <button className="nav-button">Projects</button></Link>
          <Link to="/contact/">
          <button className="nav-button">Contact</button></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
