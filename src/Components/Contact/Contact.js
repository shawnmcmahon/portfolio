import '../../styles/desktop/Contact.scss';
import valley from '../../Assets/valley.jpeg';
import findStyleAndDesign from '../../findStyleAndDesign.js';


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
      <div className={findStyleAndDesign(pageMode, pageDesign, "contact-image-container")}>
        <img src={valley} alt="valley landscape of South Africa" className={findStyleAndDesign(pageMode, pageDesign, "contact-image")} />
      </div>
    </div>
  );
}

export default Contact;