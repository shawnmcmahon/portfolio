import '../../styles/desktop/Contact.scss';
import '../../styles/tablet/Contact-tablet.scss';
import '../../styles/phone/Contact-phone.scss';
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
          <div className="contact email">
            shawnmcmahon17@gmail.com
          </div>
          <div className="label-container"> 
            CONNECT
          </div>
          <ul> 
            <a href="https://calendly.com/shawnmcmahon/one-on-one-call" className={pageMode === "Light Mode" ? " accent-text-light contact " : "accent-text-dark contact"}>
                <li>Schedule a Phone Call</li>
            </a>
          </ul>
          <div className="label-container"> 
            SOCIAL MEDIA
          </div>
          <div className="contact">
          <ul> 
            <a href="https://github.com/shawnmcmahon" className={pageMode === "Light Mode" ? " accent-text-light contact " : "accent-text-dark contact"}>
                <li>Github</li>
            </a>
            <a href="https://www.linkedin.com/in/shawnpmcmahon/" className={pageMode === "Light Mode" ? " accent-text-light contact " : "accent-text-dark contact"}>
                <li>LinkedIn</li>
            </a>
            <a href="https://twitter.com/DOPE_A_MEAN" className={pageMode === "Light Mode" ? " accent-text-light contact " : "accent-text-dark contact"}>
              <li >Twitter</li>
            </a>
          </ul>
          </div>
        </div>
      </section>
      <div className={findStyleAndDesign(pageMode, pageDesign, "contact-image-container")}>
        <img src={valley} alt="valley landscape of South Africa" className={findStyleAndDesign(pageMode, pageDesign, "contact-image")} />
      </div>
    </div>
  );
}

export default Contact;