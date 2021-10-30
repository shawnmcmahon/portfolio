import '../../styles/desktop/Contact.scss';
import valley from '../../assets/valley.jpeg';

const Contact = ({pageMode}) => {
  return (
    <div id="contact">
      <section className={pageMode === "Light Mode" ? " light-background contact-container " : "dark-background contact-container"}> 
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
            <a href="https://calendly.com/shawnmcmahon/30min" className={pageMode === "Light Mode" ? " accent-text-light contact " : "accent-text-dark contact"}>
                <li>Schedule a Zoom Meeting</li>
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
                <li >LinkedIn</li>
            </a>
            <a href="https://twitter.com/DOPE_A_MEAN" className={pageMode === "Light Mode" ? " accent-text-light contact " : "accent-text-dark contact"}>
              <li >Twitter</li>
            </a>
          </ul>
          </div>
        </div>
      </section>
      <div className="contact-image-container">
        <img src={valley} className="contact-image" />
      </div>
    </div>
  );
}

export default Contact;