import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <button className="nav-button">About</button>
        <button className="nav-button">Projects</button>
        <button className="nav-button">Contact</button>
      </nav>
    </header>
  );
}

export default Header;
