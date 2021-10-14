import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="introduction-container">
        <div className="name-container"> 
          <h1 className="name">Shawn McMahon</h1>
          <h3 className="tagline">Front-End Developer</h3>
          <a href="https://www.linkedin.com/in/shawnpmcmahon/">
            <button className="social-button"> 
              LinkedIn
            </button>
          </a>
          <a href="https://github.com/shawnmcmahon">
            <button className="social-button"> 
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;