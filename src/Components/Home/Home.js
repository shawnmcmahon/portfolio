import city from '../../assets/city1.jpeg';
import '../../styles/desktop/Home.scss';

const Home = ({ pageStyle }) => {

  const openResumeTab = () => {
    window.open('https://drive.google.com/file/d/1VfROQKUVu3f8b2sRP3eUIkWAxM9QQEMc/view?usp=sharing')
  }

  return (
    <section className="home-container" id="home">
      <div className={pageStyle === "Light Mode" ? " light-background introduction-container " : "dark-background introduction-container "} >
        <section className={pageStyle === "Light Mode" ? " light-background section-container home-name " : "dark-background section-container home-name"}> 
          <div className="name-container"> 
            <h1 className="name">Shawn McMahon</h1>
            <h3 className="tagline">Front-End Developer</h3>
            <button className="resume-button" onClick={openResumeTab}>Download Resume</button>
          </div>
        </section>
        <section className="section-container about" id="about">  
          <h3 className="bio-intro">My name is Shawn...</h3>

          <p className="bio-intro-second">...and I am on a mission to create beautiful, engaging websites. </p>

          <p className="bio-text">Introduced to programming when I was 16, I found my passion for front-end design during the days of Myspace. I spent countless hours as a bored teenager designing profile overlays using HTML / CSS, Adobe Dreamweaver, and Photoshop. In 2021 I decided to reignite this passion for logic and design by studying at Turing School of Software and Design.</p>
  
          <p className="bio-text">I am a front-end developer who specializes in Javascript and loves coding with React. I excel in client-centered, fast-paced environments. I am excited to utilize my past experience in management and real estate to bring strong leadership skills and an adventurous spirit into a new career as a software developer.</p>
              
          <p className="bio-text">Let's build something beautiful together. </p>
        </section>
      </div>
      <div className="image-container">
        <img src={city} className="image" />
      </div>
    </section>
  );
}

export default Home;