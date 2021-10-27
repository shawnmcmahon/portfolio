import './Project.css';
import { useState, useEffect } from 'react';
import bj1 from '../../assets/better-jeopardy/bj1.png';
import bj2 from '../../assets/better-jeopardy/bj2.png';
import bj3 from '../../assets/better-jeopardy/bj3.png';

const Project = ({project}) => {
  console.log('project in project', project)
  const [photoPreview, setPhotoPreview] = useState('');

  // useEffect(() => {
 
  // }, [project])

  const changePhoto = (event) => {
    setPhotoPreview(event.target.id)
  }

  return (
    <article className="project-outter-container"> 
      <div className="project-description-container"> 
        <h3 className="project-title">{project.title}</h3>
          <p className="label">Project Scope Time</p>
            <p className="value">{project.time}</p>
          <p className="label">Collaborators</p>
            <p className="value">{project.collaborators}</p>
          <p className="label">Technologies Used</p>
            <ul className="tech-stack-list">
              <li className="tech">React</li>
              <li className="tech">Express</li>
              <li className="tech">PostgreSQL</li>
              <li className="tech">Cypress</li>
              <li className="tech">Heroku</li>
            </ul>
          <p className="label">Description</p>
            <p className="value">{project.description}</p>
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
        <div className="photo-display"> 
          <img src={photoPreview} className="preview-photo" />
        </div>
        <div className="project-thumbnail-container">
            <img src={project.pictures[0]} className="thumbnail" id={project.pictures[0]}  onClick={changePhoto} />
        </div> 
        <div className="project-thumbnail-container">
            <img src={project.pictures[1]} className="thumbnail" id={project.pictures[1]}  onClick={changePhoto}  />
        </div> 
        <div className="project-thumbnail-container">
            <img src={project.pictures[2]}  className="thumbnail" id={project.pictures[2]}  onClick={changePhoto}  />
        </div>
      </div>
    </article>
  );
}

export default Project;