import '../../styles/desktop/Contact.scss';
import valley from '../../assets/valley.jpeg';

const Contact = () => {
  return (
    <div id="contact">
      <section className="contact-container extra-top-padding"> 
        <div className="contact-name"> 
          CONTACT SHAWN
        </div>
        <div className="contact-info"> 
          <div className="label-container"> 
            EMAIL
          </div>
          <div className="contact">
            shawnmcmahon17@gmail.com
          </div>
          <div className="label-container"> 
            CONNECT
          </div>
          <ul> 
            <a href="https://calendly.com/shawnmcmahon/one-on-one-call" className="contact meeting">
                <li>Schedule a Phone Call</li>
            </a>
            <a href="https://calendly.com/shawnmcmahon/30min" className="contact meeting">
                <li>Schedule a Zoom Meeting</li>
            </a>
          </ul>
          <div className="label-container"> 
            SOCIAL MEDIA
          </div>
          <div className="contact-container">
          <ul> 
            <a href="https://github.com/shawnmcmahon" className="contact">
                <li className="contact">Github</li>
            </a>
            <a href="https://www.linkedin.com/in/shawnpmcmahon/" className="contact">
                <li>LinkedIn</li>
            </a>
            <a href="https://twitter.com/DOPE_A_MEAN" className="contact">
              <li>Twitter</li>
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