import './Portfolio.css';
import Project from '../Project/Project';
import { useState } from 'react';



const Portfolio = () => {
  const [portfolio, setPortfolio] = useState('')

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