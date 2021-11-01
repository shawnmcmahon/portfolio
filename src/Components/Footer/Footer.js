import '../../styles/desktop/Footer.scss';
import linkedInLogo from '../../Assets/li.png';
import githubLogo from '../../Assets/gh.png';
import twitterLogo from '../../Assets/twitter.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact-info-container"> 
        <div className="contact-label-container"> 
          CONTACT SHAWN
        </div>
        <div className="contact-value-container"> 
          shawnmcmahon17@gmail.com
        </div>
        <div className="contact-label-container"> 
          MEET SHAWN
        </div>
        <div className="contact-value-container meeting-container"> 
            <a href="https://calendly.com/shawnmcmahon/one-on-one-call" className="meeting-value accent-text-dark">
              Schedule a Phone Call
            </a>
            <a href="https://calendly.com/shawnmcmahon/30min" className="meeting-value accent-text-dark">
              Schedule a Zoom Meeting
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
          <a href="https://twitter.com/DOPE_A_MEAN">
            <img src={twitterLogo} className="social-logo" alt="Twitter link"  /> 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;