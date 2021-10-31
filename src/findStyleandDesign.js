const findStyleAndDesign = (pageMode, pageDesign, cssClass) => {
  // Portfolio 
  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === "projects-outter") {
    return 'light-background projects-outter'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass ===  "projects-outter") {
    return 'dark-background projects-outter'
  }
  

  
  
  
  // Home
  // introduction container - flat 
  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === "introduction-container") {
    return 'light-background introduction-container'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass ===  "introduction-container") {
    return 'dark-background introduction-container'
  }

  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === "introduction-container") {
    return 'light-background introduction-container'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  "introduction-container") {
    return 'dark-background introduction-container'
  }

  // section container - top / flat 
  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === "section-container") {
    return ' extra-top-margin light-flat-background section-container home-name'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass ===  "section-container") {
    return ' extra-top-margin dark-flat-background section-container home-name'
  }

  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === "section-container") {
    return 'light-background neo-section-container home-name'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  "section-container") {
    return 'dark-background neo-section-container home-name'
  }


  // Resume button  
  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === "resume-button") {
    return 'light-mode-button resume-button'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass === "resume-button") {
    return 'dark-mode-button resume-button'
  }

  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === "resume-button") {
    return 'neo-light resume-button'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  "resume-button") {
    return 'neo-dark resume-button'
  }


  // section container - middle 
  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === "section-container-inner") {
    return 'light-background section-container'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass ===  "section-container-inner") {
    return 'dark-background section-container'
  }

  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === "section-container-inner") {
    return 'light-background neo-section-container-inner'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  "section-container-inner") {
    return 'dark-background neo-section-container-inner'
  }

  // section container - last 
  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === "section-container-concave") {
    return 'light-background section-container'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass ===  "section-container-concave") {
    return 'dark-background section-container'
  }


  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === "section-container-concave") {
    return 'light-background neo-section-container-concave'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  "section-container-concave") {
    return 'dark-background neo-section-container-concave'
  }

  // Name - flat

  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === "name") {
    return 'name'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass ===  "name") {
    return 'name'
  }

  // name - neo
  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === "name") {
    return 'neo-text-light name'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  "name") {
    return 'neo-text name'
  }

  // Header 

  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === 'header') {
    return 'header'
  } 

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass === 'header') {
    return 'header'
  } 

  if (pageMode = 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'header') {
    return 'neo-header'
  }

  if (pageMode = 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass === 'header') {
    return 'neo-header'
  }

  
  


}

export default findStyleAndDesign;