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
                    <li>React</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>Cypress</li>
                    <li>Heroku</li>
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