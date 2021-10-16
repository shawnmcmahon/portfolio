import './Header.css';
import { Link }  from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="button-container">
          <Link to="/about/" />
           <button className="nav-button">About</button>
          <Link to="/projects/" /> 
           <button className="nav-button">Projects</button>
          <Link to="/contact/" />
          <button className="nav-button">Contact</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
