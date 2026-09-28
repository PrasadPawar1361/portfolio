import {
  FaGithub,
  FaLinkedin,
  FaArrowRight
} from "react-icons/fa";

function Hero() {
  return (
    <section id="intro" className="hero section">

      <div className="hero-content">

        <p className="hero-small-title">
          Hello, I'm
        </p>

        <h1>
          Prasad <span>Pawar</span>
        </h1>

        <h2>
          IT Engineering Student
        </h2>

        <p className="hero-description">
          I am an IT Engineering student passionate about Java Full Stack
          Development, React.js, web technologies and problem solving.
          I enjoy building practical applications and continuously learning
          new technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn primary-btn">
            View Projects
            <FaArrowRight />
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>


          
         <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn secondary-btn"
  >
    Download Resume
  </a>



        </div>

        <div className="social-links">

          <a
            href="https://github.com/PrasadPawar1361"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/prasad-pawar-8586ab28a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="hero-image-container">

        <div className="image-background"></div>

        <img
          src="/src/assets/profile1.jpeg"
          alt="Prasad profile"
          className="profile-image"
        />

      </div>


    </section>
  );
}

export default Hero;