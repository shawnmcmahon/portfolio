const findStyleAndDesign = (pageMode, pageDesign, cssClass) => {
  // App 
   // Contact - container 
   if (pageMode === 'Light Mode' && (pageDesign === 'Flat' || 'Neomorphism') && cssClass === 'app') {
    return 'light-background app'
  }

  if (pageMode === 'Dark Mode' && (pageDesign === 'Flat' || 'Neomorphism') && cssClass ===  'app') {
    return 'dark-background app'
  }


  // Contact - container 
  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === 'contact-container') {
    return 'light-background contact-container'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass ===  'contact-container') {
    return 'dark-background contact-container'
  }

  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'contact-container') {
    return 'neo-contact-container light-background'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  'contact-container') {
    return 'neo-contact-container dark-background'
  }

  // Contact - contact

  if (pageMode === 'Light Mode' && (pageDesign === 'Flat' || 'Neomorphism') && cssClass === 'contact') {
    return 'light-background contact'
  }

  if (pageMode === 'Dark Mode' && (pageDesign === 'Flat' || 'Neomorphism') && cssClass ===  'contact') {
    return 'dark-background contact'
  }

  // Contact - image container 

  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === 'contact-image-container') {
    return 'light-background contact-image-container'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat'  && cssClass ===  'contact-image-container') {
    return 'dark-background contact-image-container'
  }

  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'contact-image-container') {
    return 'light-background contact-image-container '
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism'  && cssClass ===  'contact-image-container') {
    return 'dark-background contact-image-container'
  }

  // Contact - contact image

  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === 'contact-image') {
    return 'light-background contact-image'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat'  && cssClass ===  'contact-image') {
    return 'dark-background contact-image'
  }

  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'contact-image') {
    return 'light-background contact-image '
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism'  && cssClass ===  'contact-image') {
    return 'dark-background contact-image '
  }
  
  
  
  // Portfolio 
  if (pageMode === 'Light Mode' && (pageDesign === 'Flat' || 'Neomorphism') && cssClass === 'projects-outter') {
    return 'light-background projects-outter'
  }

  if (pageMode === 'Dark Mode' && (pageDesign === 'Flat' || 'Neomorphism') && cssClass ===  'projects-outter') {
    return 'dark-background projects-outter'
  }


  // Project 

  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === 'project-outter-container') {
    return 'light-background project-outter-container project-divider'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat'  && cssClass ===  'project-outter-container') {
    return 'dark-background project-outter-container project-divider'
  }

  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'project-outter-container') {
    return 'light-background neo-project-outter-container '
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism'  && cssClass ===  'project-outter-container') {
    return 'dark-background neo-project-outter-container '
  }
  

  
  
  
  // Home
  // introduction container - flat 
  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === 'introduction-container') {
    return 'light-background introduction-container'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass ===  'introduction-container') {
    return 'dark-background introduction-container'
  }

  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'introduction-container') {
    return 'light-background introduction-container'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  'introduction-container') {
    return 'dark-background introduction-container'
  }

  // section container - top / flat 
  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === 'section-container') {
    return ' extra-top-margin light-flat-background section-container home-name'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass ===  'section-container') {
    return ' extra-top-margin dark-flat-background section-container home-name'
  }

  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'section-container') {
    return 'light-background neo-section-container home-name'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  'section-container') {
    return 'dark-background neo-section-container home-name'
  }


  // Resume button  
  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === 'resume-button') {
    return 'light-mode-button resume-button'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass === 'resume-button') {
    return 'dark-mode-button resume-button'
  }

  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'resume-button') {
    return 'neo-light resume-button'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  'resume-button') {
    return 'neo-dark resume-button'
  }


  // section container - middle 
  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === 'section-container-inner') {
    return 'light-background section-container'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass ===  'section-container-inner') {
    return 'dark-background section-container'
  }

  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'section-container-inner') {
    return 'light-background neo-section-container-inner'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  'section-container-inner') {
    return 'dark-background neo-section-container-inner'
  }

  // section container - last 
  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === 'section-container-concave') {
    return 'light-background section-container'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass ===  'section-container-concave') {
    return 'dark-background section-container'
  }


  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'section-container-concave') {
    return 'light-background neo-section-container-concave'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  'section-container-concave') {
    return 'dark-background neo-section-container-concave'
  }

  // Name - flat

  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === 'name') {
    return 'name'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass ===  'name') {
    return 'name'
  }

  // name - neo
  if (pageMode === 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'name') {
    return 'neo-text-light name'
  }

  if (pageMode === 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass ===  'name') {
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

  // Header - nav bar 

  if (pageMode === 'Light Mode' && pageDesign === 'Flat' && cssClass === 'nav-bar') {
    return 'nav-bar'
  } 

  if (pageMode === 'Dark Mode' && pageDesign === 'Flat' && cssClass === 'nav-bar') {
    return 'nav-bar'
  } 

  if (pageMode = 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'nav-bar-active' ) {
    return 'nav-bar'
  }

  if (pageMode = 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass === 'nav-bar-active' ) {
    return 'nav-bar'
  }

  if (pageMode = 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'nav-bar' ) {
    return 'neo-nav-bar'
  }

  if (pageMode = 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass === 'nav-bar' ) {
    return 'neo-nav-bar'
  }  

  if (pageMode = 'Light Mode' && pageDesign === 'Neomorphism' && cssClass === 'nav-bar-active' ) {
    return 'neo-nav-bar'
  }

  if (pageMode = 'Dark Mode' && pageDesign === 'Neomorphism' && cssClass === 'nav-bar-active' ) {
    return 'neo-nav-bar'
  }  

  
  


}

export default findStyleAndDesign;
