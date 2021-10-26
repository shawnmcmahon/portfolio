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
          <h3 className="bio-intro">My name is Shawn...</h3>

          <p className="bio-intro-second">...and I am on a mission to create beautiful, engaging websites. </p>

          <p> You have exactly 7 seconds to engage your audience. How do grab attention with so little time? With exceptional design that speaks to your brand you make it hard for people to look away.</p>

          <p> </p>
        </section>
      </div>
    </section>
  );
}

export default Home;