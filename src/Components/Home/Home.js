import city from '../../Assets/city1.jpeg';
import reactIcon from '../../Assets/icons/react-original-wordmark.svg';
import javascriptIcon from '../../Assets/icons/javascript-original.svg';
import html5Icon from '../../Assets/icons/html5-original-wordmark.svg';
import css3Icon from '../../Assets/icons/css3-original-wordmark.svg';
import cypressIcon from '../../Assets/icons/cypressio-original-wordmark.svg';
import mochaIcon from '../../Assets/icons/mocha-original.svg';
import expressIcon from '../../Assets/icons/express-original-wordmark.svg';
import postgresIcon from '../../Assets/icons/postgresql-original-wordmark.svg';
import dotnetIcon from '../../Assets/icons/dot-net-plain-wordmark.svg';
import csharpIcon from '../../Assets/icons/csharp-original.svg';
import mssqlIcon from '../../Assets/icons/microsoftsqlserver-plain-wordmark.svg';
import '../../styles/desktop/Home.scss';
import '../../styles/desktop/App.scss';
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
            <h3 className={pageMode === "Light Mode" ? " accent-text-light tagline " : "accent-text-dark tagline"}>Sofware Engineer II</h3>
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
    
            <p className="bio-text">I am a Software Enginner who specializes in Javascript/React and C#/.NET applications. I excel in client-centered, fast-paced environments. I am excited to utilize my past experience in management and real estate to bring results-driven leadership and client-focused interpersonal skills into a new career as a software developer.</p>
                
            <p className="font-bold underline text-xl">Let's build something beautiful together. </p>
          </div> 
        </section>
        <section className={findStyleAndDesign(pageMode, pageDesign, "section-container-concave")}> 
          <p className={pageMode === "Light Mode" ? " accent-text-light bio-intro-second center-text" : "accent-text-dark bio-intro-second center-text"}> Technical Expertise</p>
          <div className="icon-container"> 
            <img src={reactIcon} className="tech-icon" alt="react logo"/>
            <img src={javascriptIcon} className="tech-icon" alt="javascript logo" />
            <img src={html5Icon} className="tech-icon" alt="html 5 logo" />
            <img src={css3Icon} className="tech-icon" alt="css 3 logo"/>
            <img src={expressIcon} className="tech-icon" alt="express logo"/>
            <img src={csharpIcon} className="tech-icon" alt="c# logo" />
            <img src={dotnetIcon} className="tech-icon" alt="dotnet logo" />
            <img src={mssqlIcon} className="tech-icon" alt="mssql logo" />
            <img src={postgresIcon} className="tech-icon" alt="postgre sql logo" />
            <img src={cypressIcon} className="tech-icon" alt="cypress logo" />
            <img src={mochaIcon} className="tech-icon" alt="mocha logo" />
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