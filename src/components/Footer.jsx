import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>

          <h3>PRASAD</h3>

          <p>
            IT Engineering Student | Java Full Stack Developer
          </p>

        </div>

        <div className="footer-socials">

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

          <a href="prasadpawarpp1361@gmail.com">
            <FaEnvelope />
          </a>

          <a href="#intro">
            <FaArrowUp />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Prasad. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;