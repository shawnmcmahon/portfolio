import city from '../../assets/city1.jpeg';
import './Home.css';

const Home = () => {
  return (
    <section className="home-container" id="home">
      <div className="introduction-container">
        <section className="section-container home-name"> 
          <h1 className="name">Shawn McMahon</h1>
          <h3 className="tagline">Front-End Developer</h3>
        </section>
        <section className="section-container about" id="about">  
          <h3 className="bio-intro">My name is Shawn...</h3>

          <p className="bio-intro-second">...and I am on a mission to create beautiful, engaging websites. </p>

          <p>You have exactly 7 seconds to engage your audience. How do grab attention with so little time?</p>
            
          <p>You do it with exceptional design that speaks to your brand.</p>
  
          <p>I focus on helping content creators and business owners engage with their audience. Whether you are a musician, photographer, Twitch streamer, Youtuber, or any other solopenuer trying to reach the next level -</p>
              
          <p>Let's build something beautiful together. </p>
        </section>
      </div>
      <div className="image-container">
        <img src={city} className="image" />
      </div>
    </section>
  );
}

export default Home;