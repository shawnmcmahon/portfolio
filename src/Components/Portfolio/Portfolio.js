import '../../styles/desktop/Portfolio.scss';
import '../../styles/phone/Portfolio-phone.scss'

import Project from '../Project/Project';
import { useState } from 'react';
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
import findStyleAndDesign from '../../findStyleAndDesign.js';



const Portfolio = ({ pageMode, pageDesign }) => {
  const [portfolio] = useState([
      {
        number: 1, 
        title: 'CodeHerd',
        time: '60 Hours / 2 weeks',
        dateCompleted: '09/15/2021',
        applicationType: 'Fullstack',
        collaborators: ['Zach Green, Ashton Huxable, Leigh Pulzone,  Taija Warbelow'],
        technologiesUsed: ['React', 'GraphQL', 'PostgreSQL', 'Cypress', 'CircleCI'], 
        description: 'CodeHerd is a project management app where Turing students can store all the links to their projects. They can keep track of project collaborators and resources they may use for each individual project. And they can go back in time to view resources they have collected for previous projects.',
        learningGoals: ['1. Utilize Apollo/GraphQL to query and mutate data from the backend', '2. Apply continous integration with CircleCI'], 
        pictures: [
        ch1, ch2, ch3],
        githubRepo: 'https://github.com/shawnmcmahon/CodeHerd',
        deployedSite: 'https://codeherd.herokuapp.com/'
    },
    {
        number: 2, 
        title: 'Better Jeopardy',
        time: '60 Hours / 2 weeks',
        dateCompleted: '08/02/2021',
        applicationType: 'Fullstack',
        collaborators: ['Dean Cook, Bobby Vasquez'],
        technologiesUsed: ['React', 'Express', 'PostgreSQL', 'Cypress', 'Heroku'], 
        description: 'Better Jeopardy is a trivia game geared towards users who aren\'t very good at Jeopardy. This nod to the classic game show includes questions from the show. The multiple-choice feature for each question allows users to enjoy the game without needing to be a walking encyclopedia. Users can save their scores and compete for the top spot on the high school board.',
        learningGoals: ['1. Create a custom API utilizing Express JS', '2. Use PostgreSQL to create a database to store questions and saved games'], 
        pictures: [
        bj1, bj2, bj3],
        githubRepo: 'https://github.com/shawnmcmahon/better-jeopardy',
        deployedSite: 'https://better-jeopardy.herokuapp.com/'
    }, 
    {
      number: 3, 
      title: 'Rancid Tomatillos',
      time: '60 Hours / 2 weeks',
      dateCompleted: '07/26/2021',
      applicationType: 'Frontend',
      collaborators: ['Bobby Vasquez'],
      technologiesUsed: ['React', 'CSS3', 'Github', 'Cypress', 'Heroku'], 
      description: 'The goal of this partner project was to create a website where users can view movie information hosted from a Heroku API.',
      learningGoals: ['1. Build a solid understanding of React fundamentals', '2. Incorporate Cypress to test React components and asynchronous JS'], 
      pictures: [
      rt1, rt2, rt3],
      githubRepo: 'https://github.com/shawnmcmahon/rancid-tomatillos',
      deployedSite: 'https://rancid-tomatillos-smbv.herokuapp.com/'
    },
    {
      number: 4, 
      title: 'What\'s Cooking?',
      time: '60 Hours / 2 weeks',
      dateCompleted: '06/15/2021',
      applicationType: 'Frontend',
      collaborators: ['Claire Fields, Lourdes Mendoza'],
      technologiesUsed: ['Javascript', 'Sass', 'Github', 'Mocha', 'Webpack'], 
      description: 'The purpose of the app is to create a recipe helper that assists the user in understanding what they can cook based on the contents of their pantry.',
      learningGoals: ['1. Refactor a pre-existing, broken code base into a functional application', '2. Incorporate Sass/SCSS framework to dry up CSS'], 
      pictures: [
      wc1, wc2, wc3],
      githubRepo: 'https://github.com/shawnmcmahon/refactor-tractor-wc',
      deployedSite: ''
  }
])


  const projectPreviews = portfolio.map((currentProject, index) => {
    return (
      <Project 
        project={currentProject}
        key={index}
        pageMode={pageMode}
        pageDesign={pageDesign}
      />
    )
  })

  return (
    <section className={findStyleAndDesign(pageMode, pageDesign, "projects-outter")} >
        <h2 className="portfolio-title">PROJECTS</h2>
        <p className={pageMode === "Light Mode" ? " accent-text-light warning " : "accent-text-dark warning"}>(Please be patient while Heroku loads the deployed sites)</p>
          <div className='portfolio-container'> 
            {!!portfolio && projectPreviews}
          </div>
    </section>
  );
}

export default Portfolio;