import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './styles/App.css';
import img from './assets/senthilnathan-img.jpg';
import { FaEnvelope, FaGithub, FaGraduationCap, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { GrDocumentPdf } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { FaBagShopping } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { IoIosMailUnread } from "react-icons/io";
import Navbar from './components/Navbar.jsx';

const terminalCommands = [
  { cmd: 'cat profile.json', output: `{\n  "name": "Senthilnathan",\n  "role": "Software Developer",\n  "roots": "Theni (Family of Weavers)",\n  "current": "IITM CDOT Samgnya"\n}` },
  { cmd: 'npm run skills', output: `> Loading skills...\nHTML5, CSS3, SASS, JavaScript,\nBootstrap, React.js, Python, Firebase,\nCanva, Figma\n\nStatus: Online & active.` },
  { cmd: 'git commit -m "update portfolio"', output: `[main a8c7d91] Update portfolio theme\n 2 files changed, 452 insertions(+)\n create mode 100644 App.css` },
  { cmd: 'clear', output: '' },
];

function Terminal() {
  const [lines, setLines] = useState([]);
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  
  useEffect(() => {
    let timer1, timer2;
    const currentCommand = terminalCommands[currentCmdIndex];
    let charIndex = 0;
    
    setTypedText('');
    const interval = setInterval(() => {
      if (charIndex < currentCommand.cmd.length) {
        setTypedText(prev => prev + currentCommand.cmd[charIndex]);
        charIndex++;
      } else {
        clearInterval(interval);
        timer1 = setTimeout(() => {
          if (currentCommand.cmd === 'clear') {
            setLines([]);
          } else {
            setLines(prev => [
              ...prev, 
              { type: 'cmd', text: currentCommand.cmd }, 
              { type: 'output', text: currentCommand.output }
            ].slice(-6));
          }
          timer2 = setTimeout(() => {
            setCurrentCmdIndex(prev => (prev + 1) % terminalCommands.length);
          }, 3000);
        }, 500);
      }
    }, 60);

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [currentCmdIndex]);

  return (
    <div className="dev-terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot close"></div>
          <div className="terminal-dot minimize"></div>
          <div className="terminal-dot maximize"></div>
        </div>
        <div className="terminal-title">developer@senthilnathan:~</div>
      </div>
      <div className="terminal-body">
        {lines.map((line, idx) => (
          <div key={idx} style={{ marginBottom: '10px' }}>
            {line.type === 'cmd' ? (
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span style={{ color: 'var(--text-primary)' }}>{line.text}</span>
              </div>
            ) : (
              <pre style={{ whiteSpace: 'pre-wrap', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>{line.text}</pre>
            )}
          </div>
        ))}
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span>{typedText}</span>
          <span className="terminal-cursor"></span>
        </div>
      </div>
    </div>
  );
}

// Framer motion animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardHover = {
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

function App() {
  const currentYear = new Date().getFullYear();
  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = `Portfolio enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    window.location.href = `mailto:eswarensenthil@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className='container'>
      <Navbar />

      {/* Home Section */}
      <motion.section 
        className='home-section' 
        id='Home'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.section className='home-icons' variants={fadeInUp}>
          <motion.a whileHover={{ scale: 1.2, y: -2 }} href="https://github.com/senthilnathan-es02" target="_blank" rel="noopener noreferrer" aria-label="Visit Senthilnathan's GitHub profile"><FaGithub /></motion.a>
          <motion.a whileHover={{ scale: 1.2, y: -2 }} href="https://www.linkedin.com/in/senthilnathan-developer/" target="_blank" rel="noopener noreferrer" aria-label="Visit Senthilnathan's LinkedIn profile"><FaLinkedin /></motion.a>
          <motion.a whileHover={{ scale: 1.2, y: -2 }} href="mailto:eswarensenthil@gmail.com" aria-label="Email Senthilnathan"><FaEnvelope /></motion.a>
        </motion.section>

        <motion.section className='home-content' variants={fadeInUp}>
          <h1>Senthilnathan E</h1>
          <h5>Software Developer</h5>
          <p>I'm a software developer from Theni, and I'm passionate and dedicated to my work.</p>
          <button onClick={scrollToContact}>
            Say Hello <span className='btn-span'><FaTelegramPlane /></span>
          </button>
        </motion.section>

        <motion.section className='home-img-section' variants={fadeInUp}>
          <Terminal />
        </motion.section>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className='about-container' 
        id='About'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.section className='about-head' variants={fadeInUp}>
          <h1>About Me</h1>
          <p>My introduction</p>
        </motion.section>

        <section className='about-content'>
          <motion.section className='about-img-content' variants={fadeInUp}>
            <img className='about-img' src={img} alt="about-img" />
          </motion.section>
          <motion.section className='about-details' variants={fadeInUp}>
            <p>Hello, I’m Senthilnathan from Theni, proud of my roots in a family of weavers. I’m an alumnus of Freshworks STS Software Academy and currently a software developer at IITM CDOT Samgnya Technology Foundation, where I build responsive and user-friendly interfaces. I’m focused on gaining real-world experience now and becoming a skilled full-stack developer in the future.</p>

            <a href="/Senthilnathan-resume.pdf" download style={{ textDecoration: 'none' }}>
              <button>
                Download CV <span><GrDocumentPdf /></span>
              </button>
            </a>
          </motion.section>
        </section>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        className="education-container" 
        id="Education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="education-head" variants={fadeInUp}>
          <h1>Qualification</h1>
          <p>My personal journey</p>
        </motion.div>

        <motion.div className="education-grid" variants={staggerContainer}>
          {/* Education */}
          <motion.div className="edu-card" variants={{ ...fadeInUp, ...cardHover }} whileHover="hover">
            <h2><FaGraduationCap /> Education</h2>
            <h6>Student</h6>
            <p>GHSS</p>
            <span className="edu-date"><SlCalender /> 2010 - 2024</span>
          </motion.div>

          {/* Experience 1 */}
          <motion.div className="edu-card" variants={{ ...fadeInUp, ...cardHover }} whileHover="hover">
            <h2><FaBagShopping /> Experience</h2>
            <h6>Web Development Trainee</h6>
            <p>Freshworks STS Software Academy</p>
            <span className="edu-date"><SlCalender /> 2024 - 2025</span>
          </motion.div>

          {/* Experience 2 */}
          <motion.div className="edu-card" variants={{ ...fadeInUp, ...cardHover }} whileHover="hover">
            <h2><FaBagShopping /> Experience</h2>
            <h6>Software Developer</h6>
            <p>IITM CDOT Samgnya Technology Foundation</p>
            <span className="edu-date"><SlCalender /> 2025 - Present</span>
          </motion.div>

           <motion.div className="edu-card" variants={{ ...fadeInUp, ...cardHover }} whileHover="hover">
            <h2><FaBagShopping /> Degree Qualification</h2>
            <h6>Bachelor of Computer Applications — Currently Pursuing</h6>
            <p>University of Madras</p>
            <span className="edu-date"><SlCalender /> 2025 - Present</span>
          </motion.div>
        </motion.div>

        
      </motion.section>

      {/* Skill Section */}
      <motion.section 
        className='skill-container' 
        id='Skill'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.section className='skill-head' variants={fadeInUp}>
          <h1>Skills</h1>
          <p>My technical level</p>
        </motion.section>

        <motion.section className='skill-content' variants={staggerContainer}>
          {[
            "HTML5", "CSS3", "SASS", "JavaScript", "Bootstrap", "React.js" , "Python",
            "Firebase", "Canva", "Figma"
          ].map((skill, index) => (
            <motion.section 
              className='skill' 
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, borderColor: 'var(--text-primary)' }}
            >
              <span><HiBadgeCheck /></span> <p>{skill}</p>
            </motion.section>
          ))}
        </motion.section>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="projects" 
        id="Project"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="projects-header" variants={fadeInUp}>
          <h1>My Projects</h1>
          <p>Some things I've built recently</p>
        </motion.div>

        <motion.div className="projects-grid" variants={staggerContainer}>
          <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -8 }}>
           
            <div className="project-info">
              <h3>AeroHub</h3>
              <p>Flight ticket booking website with Firebase integration.</p>
              <a href="https://aero-hub-v2.netlify.app/" target="_blank" rel="noopener noreferrer" className="view-btn">View Project</a>
            </div>
          </motion.div>

          <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -8 }}>
          
            <div className="project-info">
              <h3>Nesavaali Thozhil</h3>
              <p>An e-commerce website for buying sarees online.</p>
              <a href="https://nesavaali-thozhil.onrender.com/" target="_blank" rel="noopener noreferrer" className="view-btn">View Project</a>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className='contact-container' 
        id='Contact'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.header className='contact-head' variants={fadeInUp}>
          <h1>Get in touch</h1>
          <p>Contact Me</p>
        </motion.header>

        <div className='contact-details'>
          <motion.a className='contact-email-section' variants={fadeInUp} href="mailto:eswarensenthil@gmail.com" aria-label="Email Senthilnathan">
            <p><IoIosMailUnread /></p>
            <p>Email</p>
            <p>eswarensenthil@gmail.com</p>
          </motion.a>

          <motion.form className="form-container" variants={fadeInUp} onSubmit={handleSubmit}>
            <p className="form-title">Write an email</p>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>

            <button type="submit" className='form-btn'>Send Message</button>
          </motion.form>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Spiritful_Senthilnathan</h1>
        <p>© {currentYear} by Senthilnathan. All rights reserved.</p>
      </motion.footer>
    </section>
  );
}

export default App;
