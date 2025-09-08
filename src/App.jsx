import './styles/App.css';
import img from './assets/senthilnathan-img.jpg';
import { FaTelegramPlane, FaGraduationCap } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { FaBagShopping } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { IoIosMailUnread } from "react-icons/io";
import aerohub from "./assets/app-logo.jpg";
import texttoaudio from "./assets/text-to-audio.png";
import Navbar from './components/Navbar.jsx';

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='container'>
      <Navbar />

      {/* Home Section */}
      <section className='home-section' id='Home'>
        <section className='home-icons'>
          <a href="https://github.com/senthilnathan-es02"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/senthilnathan-developer/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-solid fa-envelope"></i></a>
        </section>

        <section className='home-content'>
          <h1>Senthilnathan,</h1>
          <h5><span>✋</span></h5>
          <h5>⏤⏤⏤ Web Developer</h5>
          <p>I'm a Web developer from Theni, and I'm very passionate and dedicated to my work.</p>
          <button onClick={scrollToContact}>
            Say Hello <span className='btn-span'><FaTelegramPlane /></span>
          </button>
        </section>

        <section className='home-img-section'>
          <img className='home-img' src={img} alt="home-img" />
        </section>
      </section>

      {/* About Section */}
      <section className='about-container' id='About'>
        <section className='about-head'>
          <h1>About me</h1>
          <p>My Introduction</p>
        </section>

        <section className='about-content'>
          <section className='about-img-content'>
            <img className='about-img' src={img} alt="about-img" />
          </section>
          <section className='about-details'>
<p>Hello, I’m Senthilnathan from Theni, proud of my roots in a family of weavers. I’m an alumnus of Freshworks STS Software Academy and currently a Frontend Intern at IITM CDOT Samgnya Technologies Foundation, where I build responsive and user-friendly interfaces. I’m focused on gaining real-world experience now and becoming a skilled full-stack developer in the future.</p>


            <a href="/Senthilnathan-resume.pdf" download>
              <button>
                Download CV <span><GrDocumentPdf /></span>
              </button>
            </a>

          </section>
        </section>
      </section>

      {/* Education Section */}
<section className="education-container" id="Education">
  <div className="education-head">
    <h1>Qualification</h1>
    <p>My personal journey</p>
  </div>

  <div className="education-grid">
    {/* Education */}
    <div className="edu-card">
      <h2><FaGraduationCap /> Education</h2>
      <h6>Student</h6>
      <p>GHSS</p>
      <span className="edu-date"><SlCalender /> 2010 - 2024</span>
    </div>

    {/* Experience 1 */}
    <div className="edu-card">
      <h2><FaBagShopping /> Experience</h2>
      <h6>Web Developer</h6>
      <p>Freshworks STS Software Academy</p>
      <span className="edu-date"><SlCalender /> 2024 - 2025</span>
    </div>

    {/* Experience 2 */}
    <div className="edu-card">
      <h2><FaBagShopping /> Experience</h2>
      <h6>Frontend Intern</h6>
      <p>IITM CDOT Samgnya Technologies Foundation</p>
      <span className="edu-date"><SlCalender /> 2025 - Present</span>
    </div>
  </div>
</section>


      {/* Skill Section */}
      <section className='skill-container' id='Skill'>
        <section className='skill-head'>
          <h1>Skill</h1>
          <p>My technical level</p>
        </section>

        <section className='skill-content'>
          {[
            "HTML5", "CSS3", "SASS", "JavaScript", "Bootstrap", "React.js",
            "Firebase", "Canva", "Figma"
          ].map((skill, index) => (
            <section className='skill' key={index}>
              <span><HiBadgeCheck /></span> <p>{skill}</p>
            </section>
          ))}
        </section>
      </section>

      <section className="projects" id="Project">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>Some things I've built recently</p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <img src={aerohub} alt="Aero Hub" />
            <div className="project-info">
              <h3>AeroHub</h3>
              <p>Flight ticket booking website with Firebase integration.</p>
              <a href="https://aero-hub-booking-project.netlify.app/" target="_blank" className="view-btn">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <img src={texttoaudio} alt="Text to Audio" />
            <div className="project-info">
              <h3>Text to Audio</h3>
              <p>Convert written text to speech using JavaScript Web APIs.</p>
              <a href="https://senthilnathan-es02.github.io/Text-To-Audio_converter/" target="_blank" className="view-btn">View Project</a>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className='contact-container' id='Contact'>
        <header className='contact-head'>
          <h1>Get in touch</h1>
          <p>Contact Me</p>
        </header>

        <section className='contact-details'>
          <section className='contact-email-section'>
            <p><IoIosMailUnread /></p>
            <p>Email</p>
            <p>Write me</p>
          </section>

          <form className="form-container">
            <p className="form-title">Write a mail</p>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your Email" />
            </div>

            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <textarea id="desc" rows="5" placeholder="Enter description"></textarea>
            </div>

            <button type="submit" className='form-btn'>Send Message</button>
          </form>
        </section>
      </section>

      {/* Footer */}
      <footer>
        <h1>Spritfull_Senthilnathan</h1>
        <p>© 2025 by Senthilnathan. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default App;
