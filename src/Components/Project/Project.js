import './Project.css';
import { useState, useEffect } from 'react';

const Project = ({project}) => {
  console.log('project in project', project.pictures[0])
  const [photoPreview, setPhotoPreview] = useState(project.pictures[0]);

  // useEffect(() => {
 
  // }, [project])

  const changePhoto = (event) => {
    setPhotoPreview(event.target.id)
    console.log(event.target.id)
  }

  const visitRepo = () => {
    window.open(project.githubRepo)
  }

  const visitSite = () => {
    window.open(project.deployedSite)
  }

  return (
    <article className="project-outter-container"> 
      <div className="project-description-container"> 
        <h3 className="project-title">{project.title}</h3>
        <div className="project-button-container"> 
          <button className="project-button" onClick={visitRepo}>Github Repo </button>
          {!!project.deployedSite && <button className="project-button" onClick={visitSite}>Deployed Site</button>}
        </div>
        <p className="label">Date Completed</p>
            <p className="value">{project.dateCompleted}</p>
          <p className="label">Project Scope Time</p>
            <p className="value">{project.time}</p>
          <p className="label">Application Type</p>
            <p className="value">{project.applicationType}</p>
          <p className="label">Technologies Used</p>
            <ul className="tech-stack-list">
              <li className="tech">{project.technologiesUsed[0]}</li>
              <li className="tech">{project.technologiesUsed[1]}</li>
              <li className="tech">{project.technologiesUsed[2]}</li>
              <li className="tech">{project.technologiesUsed[3]}</li>
              <li className="tech">{project.technologiesUsed[4]}</li>
            </ul>
          <p className="label">Description</p>
            <p className="value">{project.description}</p>
          <ul className="label">Learning Goals
            <li className="value"> 
              {project.learningGoals[0]}
            </li>
            <li className="value"> 
            {project.learningGoals[1]}
            </li>
          </ul>
          <p className="label">Collaborators</p>
            <p className="value">{project.collaborators}</p>
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