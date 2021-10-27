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