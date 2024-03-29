import city from '../../Assets/city1.jpeg';
import '../../styles/desktop/Home.scss';
import '../../styles/desktop/App.scss';
import '../../styles/phone/Home-phone.scss'
import findStyleAndDesign from '../../findStyleAndDesign.js';


const Home = ({ pageMode, pageDesign }) => {

  // const openResumeTab = () => {
  //   window.open('https://drive.google.com/file/d/1VfROQKUVu3f8b2sRP3eUIkWAxM9QQEMc/view?usp=sharing','_newtab' )
  // }

  

  return (
    <section className="home-container" id="home">
      <div className={findStyleAndDesign(pageMode, pageDesign, "introduction-container")}>
        <section className={findStyleAndDesign(pageMode, pageDesign, "section-container")}> 
          <div className="name-container"> 
            <h1 className={findStyleAndDesign(pageMode, pageDesign, "name")}>Shawn McMahon</h1>
            <h3 className={pageMode === "Light Mode" ? " accent-text-light tagline " : "accent-text-dark tagline"}>Front-End Developer</h3>
            <a href="https://docs.google.com/document/d/11ite_mAdxjYxbDNQXdxBqxpPtHTy-JRf/edit?usp=sharing&ouid=117421148088217152052&rtpof=true&sd=true"> 
              <button className={findStyleAndDesign(pageMode, pageDesign, "resume-button")}>Download Resume</button>
            </a>
          </div>
        </section>
        <section className={findStyleAndDesign(pageMode, pageDesign, "section-container-inner")} id="about"> 
          <div className="about"> 
            <h3 className="bio-intro">My name is Shawn...</h3>

            <p className={pageMode === "Light Mode" ? " accent-text-light bio-intro-second " : "accent-text-dark bio-intro-second"}>...and I am on a mission to create beautiful, engaging websites. </p>

            <p className="bio-text">Introduced to programming when I was 16, I found my passion for front-end design during the days of Myspace. I spent countless hours as a bored teenager designing profile overlays using HTML / CSS, Adobe Dreamweaver, and Photoshop. In 2021 I decided to reignite this passion for logic and design by studying at Turing School of Software and Design.</p>
    
            <p className="bio-text">I am a front-end developer who specializes in Javascript and loves coding with React. I excel in client-centered, fast-paced environments. I am excited to utilize my past experience in management and real estate to bring results-driven leadership and client-focused interpersonal skills into a new career as a software developer.</p>
                
            <p className="font-bold underline text-xl">Let's build something beautiful together. </p>
          </div> 
        </section>
        <section className={findStyleAndDesign(pageMode, pageDesign, "section-container-concave")}> 
          <p className={pageMode === "Light Mode" ? " accent-text-light bio-intro-second center-text" : "accent-text-dark bio-intro-second center-text"}> Technolgies I Use</p>

          <p className="bio-text center-text"> Front-end</p>
          <div className="icon-container"> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            className="tech-icon" alt="react logo"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" className="tech-icon" alt="javascript logo" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" className="tech-icon" alt="html 5 logo" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" className="tech-icon" alt="css 3 logo"/>
            <img src="https://camo.githubusercontent.com/9be0208aa516b4d1976412d27e9f73d851ea253f8ee005a0b600939f841bba8b/68747470733a2f2f7777772e63686172746a732e6f72672f6d656469612f6c6f676f2d7469746c652e737667" className="tech-icon" alt="chart js logo" />
            <img src="https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667" className="tech-icon" alt="figma logo" />
          </div>
          <p className="bio-text center-text"> Back-End</p>
          <div className="icon-container"> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" className="tech-icon" alt="express logo"/>
            <img src="https://raw.github.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg" className="tech-icon" alt="postgre sql logo" />
            <img src="https://raw.github.com/devicons/devicon/master/icons/graphql/graphql-plain.svg" className="tech-icon" alt="graph ql logo"/>
            <img src="https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667" className="tech-icon" alt="postman logo" />
          </div>
          <p className="bio-text center-text"> Testing</p>
          <div className="icon-container"> 
            <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" className="tech-icon" alt="cypress logo" />
            <img src="https://camo.githubusercontent.com/4253eb6921d60a216772940978dea3a0cf2113f2f29b5545720d3b5b6960e467/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6d6f6368616a732f6d6f6368616a732d69636f6e2e737667" className="tech-icon" alt="mocha logo" />
          </div>
          <p className="bio-text center-text"> Hosting</p>
          <div className="icon-container"> 
            <img src="https://camo.githubusercontent.com/df12cb598044a3f38efc1f45e3580558c324cf8789b79487125044eeebcc4dee/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6865726f6b752f6865726f6b752d69636f6e2e737667" className="tech-icon" alt="heroku logo" />
          </div>
        </section>
      </div>
      <div className="image-container">
        <img src={city} className="image" alt="New York City street at sunset"/>
      </div>
    </section>
  );
}

export default Home;