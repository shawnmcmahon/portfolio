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
          <div clasName="contact-container">
            shawnmcmahon17@gmail.com
          </div>
          <div className="label-container"> 
            SOCIAL MEDIA
          </div>
          <div clasName="contact-container">
          <a href="https://github.com/shawnmcmahon" className="contact">
              Github
          </a>
          <a href="https://www.linkedin.com/in/shawnpmcmahon/" className="contact">
              LinkedIn
          </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;