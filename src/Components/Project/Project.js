import '../../styles/desktop/Project.scss';
import '../../styles/desktop/ImageOptimizer.scss';

import { useState } from 'react';
import findStyleAndDesign from '../../findStyleAndDesign.js';
import ImageOptimizer from '../ImageOptimizer';


const Project = ({project, pageMode, pageDesign}) => {
  const [photoPreview, setPhotoPreview] = useState(project.pictures[0]);



  const changePhoto = (event) => {
    setPhotoPreview(event.target.id)
    console.log(event.target.id)
  }

  // const visitRepo = () => {
  //   window.open(project.githubRepo)
  // }

  // const visitSite = () => {
  //   window.open(project.deployedSite)
  // }

  return (
    <article className={findStyleAndDesign(pageMode, pageDesign, "project-outter-container")}>
      <div className="project-description-container"> 
        <h3 className="project-title">{project.title}</h3>
        <div className="project-button-container"> 
          <a href={project.githubRepo}> 
            <button className={pageMode === "Light Mode" ? " light-mode-button project-button " : "dark-mode-background project-button"}>Github Repo </button>
          </a>
          <a href={project.deployedSite}>
            {!!project.deployedSite && project.title !== 'CodeHerd' && <button className={pageMode === "Light Mode" ? " light-mode-button project-button " : "dark-mode-background project-button"}>Launch App</button>}
          </a>
        </div>
        <p className="label">Date Completed</p>
            <p className="value">{project.dateCompleted}</p>
          <p className="label">Application Type</p>
            <p className="value">{project.applicationType}</p>
          <p className="label">Description</p>
            <p className="value">{project.description}</p>
      </div>
      <div className="project-images-container"> 
        <div className="photo-display"> 
          <ImageOptimizer 
            src={photoPreview} 
            alt="project preview" 
            className="preview-photo"
            priority={true}
          />
        </div>
        <div className="thumbnail-gallery">
          <p className="thumbnail-label">Click thumbnails to view different screenshots:</p>
          <div className="thumbnail-container">
            <ImageOptimizer 
              src={project.pictures[0]} 
              alt="project thumbnail one" 
              className={`thumbnail ${photoPreview === project.pictures[0] ? 'thumbnail-active' : ''}`} 
              id={project.pictures[0]}  
              onClick={changePhoto} 
            />
            <ImageOptimizer 
              src={project.pictures[1]} 
              alt="project thumbnail two" 
              className={`thumbnail ${photoPreview === project.pictures[1] ? 'thumbnail-active' : ''}`} 
              id={project.pictures[1]}  
              onClick={changePhoto}  
            />
            <ImageOptimizer 
              src={project.pictures[2]}  
              className={`thumbnail ${photoPreview === project.pictures[2] ? 'thumbnail-active' : ''}`} 
              alt="project thumbnail three" 
              id={project.pictures[2]}  
              onClick={changePhoto}  
            />
          </div>
        </div>
        <div className="tech-section">
          <p className="label">Technologies Used</p>
          <ul className="tech-stack-list">
            <li className={pageMode === "Light Mode" ? " light-mode-button tech " : "dark-mode-button tech"}>{project.technologiesUsed[0]}</li>
            <li className={pageMode === "Light Mode" ? " light-mode-button tech " : "dark-mode-button tech"}>{project.technologiesUsed[1]}</li>
            <li className={pageMode === "Light Mode" ? " light-mode-button tech " : "dark-mode-button tech"}>{project.technologiesUsed[2]}</li>
            <li className={pageMode === "Light Mode" ? " light-mode-button tech " : "dark-mode-button tech"}>{project.technologiesUsed[3]}</li>
            <li className={pageMode === "Light Mode" ? " light-mode-button tech " : "dark-mode-button tech"}>{project.technologiesUsed[4]}</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Project;