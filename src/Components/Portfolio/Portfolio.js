import '../../styles/desktop/Portfolio.scss';
import '../../styles/desktop/ImageOptimizer.scss';

import Project from '../Project/Project';
import { useState } from 'react';
import ImagePreloader from '../ImagePreloader';
import bj1 from '../../Assets/better-jeopardy/bj1.png';
import bj2 from '../../Assets/better-jeopardy/bj2.png';
import bj3 from '../../Assets/better-jeopardy/bj3.png';
import ch1 from '../../Assets/codeherd/ch1.png';
import ch2 from '../../Assets/codeherd/ch2.png';
import ch3 from '../../Assets/codeherd/ch3.png';
import rt1 from '../../Assets/rancid-tomatillos/rt1.png';
import rt2 from '../../Assets/rancid-tomatillos/rt2.png';
import rt3 from '../../Assets/rancid-tomatillos/rt3.png';
import wc1 from '../../Assets/whats-cookin/wc1.png';
import wc2 from '../../Assets/whats-cookin/wc2.png';
import wc3 from '../../Assets/whats-cookin/wc3.png';
// import bap1 from '../../Assets/browse-a-pup/bap1.png';
// import bap2 from '../../Assets/browse-a-pup/bap2.png';
// import bap3 from '../../Assets/browse-a-pup/bap3.png';
import fl1 from '../../Assets/fit-lit/fl1.png';
import fl2 from '../../Assets/fit-lit/fl2.png';
import fl3 from '../../Assets/fit-lit/fl3.png';
import ttt1 from '../../Assets/tic-tac-toe/ttt1.png';
import ttt2 from '../../Assets/tic-tac-toe/ttt2.png';
import ttt3 from '../../Assets/tic-tac-toe/ttt3.png';
import sc1 from '../../Assets/static-comp/sc1.png';
import sc2 from '../../Assets/static-comp/sc2.png';
import sc3 from '../../Assets/static-comp/sc3.png';
import scc1 from '../../Assets/self-care-center/scc1.png';
import scc2 from '../../Assets/self-care-center/scc2.png';
import scc3 from '../../Assets/self-care-center/scc3.png';
import findStyleAndDesign from '../../findStyleAndDesign.js';



const Portfolio = ({ pageMode, pageDesign }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [portfolio] = useState([
    {
        number: 1, 
        title: 'Better Jeopardy',
        time: '60 Hours / 2 weeks',
        dateCompleted: '08/02/2021',
        applicationType: 'Fullstack',
        collaborators: ['Dean Cook, Bobby Vasquez'],
        technologiesUsed: ['React', 'Express', 'PostgreSQL', 'Cypress', 'Heroku'], 
        description: 'Better Jeopardy is a full-stack trivia game that reimagines the classic game show for users who want a more accessible experience. Built with React frontend and Express backend, this application features a PostgreSQL database storing authentic Jeopardy questions. Users can play through trivia rounds, save their scores, and compete for top positions on the leaderboard. The project demonstrates full-stack development skills including API creation, database management, and user authentication. Collaboratively developed with Dean Cook and Bobby Vasquez over a 2-week sprint, this project showcases modern web development practices with comprehensive testing using Cypress.',
        learningGoals: ['1. Create a custom API utilizing Express JS.', '2. Use PostgreSQL to create a database to store questions and saved games.'], 
        pictures: [
        bj1, bj2, bj3],
        githubRepo: 'https://github.com/shawnmcmahon/better-jeopardy',
        deployedSite: 'https://better-jeopardy.herokuapp.com/'
    }, 
    {
      number: 2, 
      title: 'Rancid Tomatillos',
      time: '60 Hours / 2 weeks',
      dateCompleted: '07/26/2021',
      applicationType: 'Frontend',
      collaborators: ['Bobby Vasquez'],
      technologiesUsed: ['React', 'CSS3', 'Github', 'Cypress', 'Heroku'], 
      description: 'Rancid Tomatillos is a React-based movie browsing application that provides users with comprehensive movie information and ratings. Built as a partner project with Bobby Vasquez, this frontend application consumes a movie API to display detailed film data including ratings, cast information, and movie posters. The project focuses on React fundamentals including component architecture, state management, and asynchronous data fetching. Features include movie search functionality, detailed movie pages, and responsive design. The application demonstrates modern React development practices with comprehensive testing using Cypress and deployment on Vercel.',
      learningGoals: ['1. Build a solid understanding of React fundamentals.', '2. Incorporate Cypress to test React components and asynchronous JS.'], 
      pictures: [
      rt1, rt2, rt3],
      githubRepo: 'https://github.com/shawnmcmahon/rancid-tomatillos',
      deployedSite: 'https://rancid-tomatillos-iota.vercel.app'
    },
    {
      number: 3, 
      title: 'CodeHerd',
      time: '60 Hours / 2 weeks',
      dateCompleted: '09/15/2021',
      applicationType: 'Fullstack',
      collaborators: ['Zach Green, Ashton Huxable, Leigh Pulzone,  Taija Warbelow'],
      technologiesUsed: ['React', 'GraphQL', 'PostgreSQL', 'Cypress', 'CircleCI'], 
      description: 'CodeHerd is a comprehensive project management application designed specifically for Turing School students to organize and track their development projects. Built as a collaborative effort with Zach Green, Ashton Huxable, Leigh Pulzone, and Taija Warbelow, this full-stack application features a React frontend with GraphQL integration and PostgreSQL backend. Students can create project profiles, store GitHub links, track collaborators, and maintain resource libraries for each project. The application demonstrates advanced development concepts including GraphQL queries and mutations, continuous integration with CircleCI, and team collaboration workflows. This project showcases the ability to work effectively in larger development teams while implementing modern web technologies.',
      learningGoals: ['1. Utilize Apollo/GraphQL to query and mutate data from the backend.', '2. Apply continous integration with CircleCI.'], 
      pictures: [
      ch1, ch2, ch3],
      githubRepo: 'https://github.com/shawnmcmahon/CodeHerd',
      deployedSite: 'https://codeherd.herokuapp.com/'
  },
    {
      number: 4, 
      title: 'What\'s Cooking?',
      time: '60 Hours / 2 weeks',
      dateCompleted: '06/15/2021',
      applicationType: 'Frontend',
      collaborators: ['Claire Fields, Lourdes Mendoza'],
      technologiesUsed: ['Javascript', 'Sass', 'Github', 'Mocha', 'Webpack'], 
      description: 'What\'s Cooking? is a smart recipe recommendation application that helps users discover meals they can prepare based on available ingredients in their pantry. Developed collaboratively with Claire Fields and Lourdes Mendoza, this JavaScript-based application features a sophisticated ingredient matching algorithm and user-friendly interface. The project involved refactoring and improving an existing codebase, implementing Sass/SCSS for better CSS organization, and creating an intuitive user experience. Users can input their available ingredients and receive personalized recipe suggestions with cooking instructions. The application demonstrates strong JavaScript fundamentals, modern CSS practices with Sass, and the ability to work with and improve existing codebases.',
      learningGoals: ['1. Refactor a pre-existing, broken code base into a functional application.', '2. Incorporate Sass/SCSS framework to dry up CSS.'], 
      pictures: [
      wc1, wc2, wc3],
      githubRepo: 'https://github.com/shawnmcmahon/refactor-tractor-wc',
      deployedSite: ''
  },
  {
    number: 5, 
    title: 'Static Comp',
    time: '6 Hours / 1 day',
    dateCompleted: '05/30/2021',
    applicationType: 'Frontend',
    collaborators: ['None'],
    technologiesUsed: ['HTML5', 'CSS', 'Github', 'Mocha', 'Normalize'], 
    description: 'Static Comp is a rapid-prototyping project that showcases the ability to quickly translate design mockups into functional HTML/CSS implementations. Completed in just 6 hours, this project features a responsive layout displaying the top 10 Billboard artists of the 2010 decade. The project demonstrates proficiency in HTML5, CSS3, and responsive design principles while working under tight time constraints. Key features include semantic HTML structure, modern CSS styling with normalize.css for consistent cross-browser rendering, and mobile-responsive design. This project highlights the ability to work efficiently under pressure while maintaining code quality and design accuracy.',
    learningGoals: ['1. Replicate a comp as quickly as possible.', '2. Render elements more consistently with normalize.css.'], 
    pictures: [
    sc1, sc2, sc3],
    githubRepo: 'https://github.com/shawnmcmahon/static-comp-2',
    deployedSite: 'https://shawnmcmahon.github.io/static-comp-2/'
},
{
  number: 6, 
  title: 'Fit Lit',
  time: '30 Hours / 1 week',
  dateCompleted: '04/07/2021',
  applicationType: 'Frontend',
  collaborators: ['Peter Muellerleile'],
  technologiesUsed: ['Javascript', 'CSS', 'Github', 'Mocha', 'Chart.js'], 
  description: 'Fit Lit is a comprehensive fitness tracking application designed for mobile users to monitor their health and wellness data. Developed in collaboration with Peter Muellerleile, this JavaScript-based application features data visualization using Chart.js to display user hydration, sleep patterns, and activity metrics. The project emphasizes responsive design principles, ensuring optimal user experience across all device sizes. Key features include interactive charts for data visualization, local storage for data persistence, and an intuitive mobile-first interface. The application demonstrates strong JavaScript fundamentals, modern data visualization techniques, and responsive web design practices.',
  learningGoals: ['1. Study responsive design by creating a mobile-friendly application.', '2. Data visualization of user information with Chart.js.'], 
  pictures: [
  fl1, fl2, fl3],
  githubRepo: 'https://github.com/shawnmcmahon/refactor-tractor-wc',
  deployedSite: 'https://fitlit-sm.netlify.app/'
},
{
  number: 7, 
  title: 'Tic Tac Toe',
  time: '30 Hours / 1 week',
  dateCompleted: '03/10/2021',
  applicationType: 'Frontend',
  collaborators: ['None'],
  technologiesUsed: ['Javascript', 'CSS3', 'Github', 'Git', 'HTML5'], 
  description: 'Tic Tac Toe is a classic game implementation that demonstrates fundamental JavaScript programming concepts and user interface design. This vanilla JavaScript application features a complete game engine with win detection, turn management, and persistent score tracking using local storage. The project showcases clean code architecture, event handling, and DOM manipulation skills. Players can enjoy pass-and-play 1v1 matches with a clean, intuitive interface. The application demonstrates the ability to build complete game logic from scratch while maintaining code readability and user experience quality.',
  learningGoals: ['1. Learn the fundementals of vanilla Javascript. ', '2. Incorporate local storage to have win count persist upon refresh.'], 
  pictures: [
  ttt1, ttt2, ttt3],
  githubRepo: 'https://github.com/shawnmcmahon/tic-tac-toe',
  deployedSite: 'https://shawnmcmahon.github.io/tic-tac-toe/'
},
{
  number: 8, 
  title: 'Self Care Center',
  time: '12 Hours / 3 Days',
  dateCompleted: '02/21/2021',
  applicationType: 'Frontend',
  collaborators: ['None'],
  technologiesUsed: ['Javascript', 'CSS3', 'Github', 'Git', 'HTML5'], 
  description: 'Self Care Center is a wellness application designed to provide users with daily inspiration through mantras and affirmations. This vanilla JavaScript project demonstrates fundamental web development skills including HTML5, CSS3, and JavaScript event handling. The application features a clean, calming interface that randomly generates motivational content to help users maintain positive mental health practices. Key features include dynamic content generation, smooth user interactions, and responsive design. This project showcases the ability to create meaningful applications that serve real user needs while demonstrating solid programming fundamentals.',
  learningGoals: ['1. Gain experience with Javascript, HTML, and CSS.', '2. Understand the purpose of event listeners.'], 
  pictures: [
  scc1, scc2, scc3],
  githubRepo: 'https://github.com/shawnmcmahon/self-care-center',
  deployedSite: 'https://shawnmcmahon.github.io/self-care-center/'
}
])

  const handleProjectNavigation = (index) => {
    setCurrentProjectIndex(index);
  };

  const currentProject = portfolio[currentProjectIndex];

  // Collect all project images for preloading
  const allProjectImages = portfolio.flatMap(project => project.pictures);

  return (
    <section className={findStyleAndDesign(pageMode, pageDesign, "projects-outter")} id="projects">
      <ImagePreloader images={allProjectImages} />
        <h2 className="portfolio-title">PROJECTS</h2>
        
        {/* Project Navigation */}
        <div className="project-navigation">
          {portfolio.map((project, index) => (
            <button
              key={index}
              onClick={() => handleProjectNavigation(index)}
              className={`project-nav-button ${currentProjectIndex === index ? 'active' : ''} ${pageMode === "Light Mode" ? "light-mode-button" : "dark-mode-button"}`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Current Project Display */}
        <div className='portfolio-container'> 
          {currentProject && (
            <Project 
              project={currentProject}
              key={currentProjectIndex}
              pageMode={pageMode}
              pageDesign={pageDesign}
            />
          )}
        </div>
    </section>
  );
}

export default Portfolio;