import './Home.css';

const Home = () => {
  return (
    <section className="home-container">
      <div className="introduction-container">
        <section className="section-container home-name"> 
          <h1 className="name">Shawn McMahon</h1>
          <h3 className="tagline">Front-End Developer</h3>
        </section>
        <section className="section-container about" id="about">  
          About Me  

          This is the About Me Section
        </section>
      </div>
    </section>
  );
}

export default Home;