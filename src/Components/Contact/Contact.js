import '../../styles/desktop/Contact.scss';
import '../../styles/desktop/ImageOptimizer.scss';
import valley from '../../Assets/valley.webp';
import findStyleAndDesign from '../../findStyleAndDesign.js';
import ImageOptimizer from '../ImageOptimizer';


const Contact = ({pageMode, pageDesign}) => {
  return (
    <div className={findStyleAndDesign(pageMode, pageDesign, "contact")} id="contact">
      <section className={findStyleAndDesign(pageMode, pageDesign, "contact-container")}>
        <div className="contact-name"> 
          CONTACT SHAWN
        </div>
        <div className="contact-info"> 
          <div className="label-container"> 
            EMAIL
          </div>
          <ul> 
            <a href="mailto:shawnmcmahon17@gmail.com" className={pageMode === "Light Mode" ? " accent-text-light contact " : "accent-text-dark contact"}>
                <li>shawnmcmahondev@gmail.com</li>
            </a>
          </ul>
          <div className="label-container"> 
            LINKS
          </div>
          <ul> 
            <a href="https://github.com/shawnmcmahon" className={pageMode === "Light Mode" ? " accent-text-light contact " : "accent-text-dark contact"}>
                <li>Github</li>
            </a>
            <a href="https://www.linkedin.com/in/shawnpmcmahon/" className={pageMode === "Light Mode" ? " accent-text-light contact " : "accent-text-dark contact"}>
                <li>LinkedIn</li>
            </a>
          </ul>
        </div>
      </section>
      <div className="image-container">
        <ImageOptimizer 
          src={valley} 
          className="image" 
          alt="Mountain valley landscape"
          priority={true}
        />
          <a 
          href="https://www.istockphoto.com/photo/blyde-river-canyon-gm178925984-26592892" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="credit-link"
          aria-label="View photo on istockphoto"
        >
          <span className="credit-text">Photo by demerzel21 on istockphoto</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;