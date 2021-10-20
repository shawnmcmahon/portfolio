import './Contact.css';

const Contact = () => {
  return (
    <div>
      <section className="contact-container"> 
        <div className="name"> 
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
            SOCIAL MEDIA
          </div>
          <div clasName="contact-container">
          <ul> 
            <a href="https://github.com/shawnmcmahon" className="contact">
                <li>Github</li>
            </a>
            <a href="https://www.linkedin.com/in/shawnpmcmahon/" className="contact">
                <li>LinkedIn</li>
            </a>
          </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;