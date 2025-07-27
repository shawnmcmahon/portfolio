import '../../styles/desktop/Footer.scss';
import linkedInLogo from '../../Assets/li.png';
import githubLogo from '../../Assets/gh.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact-info-container"> 
        <div className="contact-label-container"> 
          CONTACT SHAWN
        </div>
        <div className="contact-value-container"> 
          shawnmcmahondev@gmail.com
        </div>
        <div className="contact-label-container"> 
          MEET SHAWN
        </div>
        <div className="contact-value-container meeting-container"> 
            <a href="https://calendly.com/shawnmcmahon/one-on-one-call" className="meeting-value accent-text-dark">
              Schedule a Phone Call
            </a>
        </div>
        <div className="contact-label-container"> 
          FOLLOW SHAWN
        </div>
        <div className="contact-value-container"> 
          <a href="https://github.com/shawnmcmahon">
            <img src={githubLogo} className="social-logo" alt="Github link" /> 
          </a>
          <a href="https://www.linkedin.com/in/shawnpmcmahon/">
            <img src={linkedInLogo} className="social-logo" alt="LinkedIn link"  /> 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;