import './Portfolio.css';
import Project from '../Project/Project';
import { useState } from 'react';



const Portfolio = () => {
  const [portfolio, setPortfolio] = useState({
    projects: {
      betterJeopardy: {
        time: "60 Hours / 2 weeks",
        collaborators: ["Bobby v, Dean C"],
        technolgoiesUsed: ["React", "Express", "PostgreSQL", "Cypress", "Heroku"], 
        description: "Better Jeopardy is a trivia game geared towards users who aren't very good at Jeopardy. This nod to the classic game show includes questions from the show. The multiple-choice feature for each question allows users to enjoy the game without needing to be a walking encyclopedia. Users can save their scores and compete for the top spot on the high school board."
      },
        learningGoals: ["1. Create a custom API utilizing Express JS", "2. Use PostgreSQL to create a database to store questions and saved games"]
      // rancidTomatillos: {

      // }, 
      // whatsCookin: {

      // }
    }
  })

  return (
    <section className="projects-outter" id="projects">
      <h2 className="portfolio-title">Projects</h2>
        <div className='portfolio-container'> 
          <Project />
        </div>
    </section>
  );
}

export default Portfolio;