import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-outter" id="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
        <div className='portfolio-container'> 
          <article className="project-outter-container"> 
            <div className="project-description-container"> 
              <h3 className="project-title">Better Jeopardy</h3>
                <p className="label">Project Scope Time</p>
                  <p className="value">60 Hours / 2 Weeks</p>
                <p className="label">Collaborators</p>
                  <p className="value">Bobby H,  Dean C. </p>
                <p className="label">Technologies Used</p>
                  <ul className="tech-stack-list">
                    <li className="tech">React</li>
                    <li className="tech">Express</li>
                    <li className="tech">PostgreSQL</li>
                    <li className="tech">Cypress</li>
                    <li className="tech">Heroku</li>
                  </ul>
                <p className="label">Description</p>
                  <p className="value">Better Jeopardy is a trivia game geared towards users who aren't very good at Jeopardy. This nod to the classic game show includes questions from the show. The multiple-choice feature for each question allows users to enjoy the game without needing to be a walking encyclopedia. Users can save their scores and compete for the top spot on the high school board.</p>
                <ul className="label">Learning Goals
                  <li className="value"> 
                    1. Create a custom API utilizing Express JS
                  </li>
                  <li className="value"> 
                    2. Use PostgreSQL to create a database to store questions and saved games
                  </li>
                </ul>
            </div>
            <div className="project-images-container"> 
              Hi world
            </div>
          </article>
        </div>
    </section>
  );
}

export default Projects;