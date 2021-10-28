import '../../styles/desktop/Footer.css';
import linkedInLogo from '../../assets/li.png';
import githubLogo from '../../assets/gh.png';
import twitterLogo from '../../assets/twitter.png';

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
            <a href="https://calendly.com/shawnmcmahon/one-on-one-call" className="meeting-value">
              Schedule a Phone Call
            </a>
            <a href="https://calendly.com/shawnmcmahon/30min" className="meeting-value">
              Schedule a Zoom Meeting
            </a>
        </div>
        <div className="contact-label-container"> 
          FOLLOW SHAWN
        </div>
        <div className="contact-value-container"> 
          <a href="https://www.linkedin.com/in/shawnpmcmahon/">
            <img src={linkedInLogo} className="social-logo" /> 
          </a>
          <a href="https://github.com/shawnmcmahon">
            <img src={githubLogo} className="social-logo" /> 
          </a>
          <a href="https://twitter.com/DOPE_A_MEAN">
            <img src={twitterLogo} className="social-logo" /> 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;