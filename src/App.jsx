import "./styles/App.css";

import img from "./assets/senthilnathan-img.jpg";
import aerohub from "./assets/app-logo.jpg";

import Navbar from "./components/Navbar.jsx";

import {
  FaTelegramPlane,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";

import { GrDocumentPdf } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { FaBagShopping } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { IoIosMailUnread } from "react-icons/io";

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="container">
      <Navbar />

      {/* ================= HOME ================= */}
      <section className="home-section" id="Home">
        <section className="home-icons">
          <a href="https://github.com/senthilnathan-developer" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/senthilnathan-developer/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:eswarensenthil@gmail.com">
            <FaEnvelope />
          </a>
        </section>

        <section className="home-content">
          <h1>Senthilnathan,</h1>
          <h5>
            <span>✋</span>
          </h5>
          <h5>⏤⏤⏤ Software Developer</h5>
          <p>
            I'm a Software developer from Theni, and I'm very passionate and
            dedicated to my work.
          </p>
          <button onClick={scrollToContact}>
            Say Hello{" "}
            <span className="btn-span">
              <FaTelegramPlane />
            </span>
          </button>
        </section>

        <section className="home-img-section">
          <img className="home-img" src={img} alt="Senthilnathan" />
        </section>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-container" id="About">
        <section className="about-head">
          <h1>About me</h1>
          <p>My Introduction</p>
        </section>

        <section className="about-content">
          <section className="about-img-content">
            <img className="about-img" src={img} alt="About" />
          </section>

          <section className="about-details">
            <p>
              Hello, I’m Senthilnathan from Theni, proud of my roots in a family
              of weavers. I’m an alumnus of Freshworks STS Software Academy and
              currently a Software Developer at IITM CDOT Samgnya Technologies
              Foundation, where I build responsive and user-friendly interfaces.
            </p>

            <a href="/Senthilnathan-resume.pdf" download>
              <button>
                Download CV{" "}
                <span>
                  <GrDocumentPdf />
                </span>
              </button>
            </a>
          </section>
        </section>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="education-container" id="Education">
        <div className="education-head">
          <h1>Qualification</h1>
          <p>My Personal Journey</p>
        </div>

        <div className="education-grid">
          <div className="edu-card">
            <h2>
              <FaGraduationCap /> Education
            </h2>
            <h6>Student</h6>
            <p>GHSS</p>
            <p>Theni</p>
            <span className="edu-date">
              <SlCalender /> 2010 - 2024
            </span>
          </div>

          <div className="edu-card">
            <h2>
              <FaBagShopping /> Experience
            </h2>
            <h6>Web Developer Trainee</h6>
            <p>Freshworks STS Software Academy</p>
            <p>Chennai</p>
            <span className="edu-date">
              <SlCalender /> 2024 - 2025
            </span>
          </div>

          <div className="edu-card">
            <h2>
              <FaBagShopping /> Experience
            </h2>
            <h6>Software Developer</h6>
            <p>IITM CDOT Samgnya Technologies Foundation</p>
            <p>Chennai</p>
            <span className="edu-date">
              <SlCalender /> 2025 - Present
            </span>
          </div>

          <div className="edu-card">
            <h2>
             <FaGraduationCap />
              Degree Qualification
            </h2>
            <h6>
              Bachelor of Computer Applications (BCA) – Currently Pursuing
            </h6>
            <p>University of Madras</p>
            <p>Chennai</p>
            <span className="edu-date">
              <SlCalender /> 2025 - Present
            </span>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="skill-container" id="Skill">
        <section className="skill-head">
          <h1>Skill</h1>
          <p>My Technical level</p>
        </section>

        <section className="skill-content">
          {[
            "HTML5",
            "CSS3",
            "SASS",
            "JavaScript",
            "Bootstrap",
            "React.js",
            "Firebase",
            "Canva",
            "Figma"
          ].map((skill, index) => (
            <section className="skill" key={index}>
              <span>
                <HiBadgeCheck />
              </span>
              <p>{skill}</p>
            </section>
          ))}
        </section>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="projects" id="Project">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>Some things I've built recently</p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <img src={aerohub} alt="AeroHub" />
            <div className="project-info">
              <h3>AeroHub</h3>
              <p>Flight ticket booking website with Firebase integration.</p>
              <a
                href="https://aero-hub-v2.netlify.app/"
                target="_blank"
                className="view-btn"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://nesavaalithozhil.netlify.app/assets/Nesavaali%20Thozhil%20logo-D0jAu4PJ.png"
              alt="Nesavaali Thozhil"
            />
            <div className="project-info">
              <h3>Nesavaalithozhil</h3>
              <p>This is the authentic website for buying sarees online.</p>
              <a
                href="https://nesavaalithozhil.netlify.app/"
                target="_blank"
                className="view-btn"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-container" id="Contact">
        <header className="contact-head">
          <h1>Get in touch</h1>
          <p>Contact Me</p>
        </header>

        <section className="contact-details">
          <section className="contact-email-section">
            <p>
              <IoIosMailUnread />
            </p>
            <p>Email</p>
            <p>Write me</p>
          </section>

          <form className="form-container">
            <p className="form-title">Write a mail</p>

            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your Name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your Email" />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea rows="5" placeholder="Enter description"></textarea>
            </div>

            <button type="submit" className="form-btn">
              Send Message
            </button>
          </form>
        </section>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <h1>Senthilnathan</h1>
        <p>© 2025 by Senthilnathan. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default App;
