import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });

  };

  return (
    <section id="contact" className="section contact-section">

      <div className="section-heading">

        <p>GET IN TOUCH</p>

        <h2>Contact Me</h2>

        <span>
          Have a project, opportunity or question? Feel free to contact me.
        </span>

      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's connect</h3>

          <p>
            I am always interested in learning about new opportunities,
            projects and technologies.
          </p>

          <div className="contact-item">

            <FaEnvelope />

            <div>
              <span>Email</span>
              <a href="prasadpawarpp1361@gmail.com">
                email
              </a>
            </div>

          </div>

          <div className="contact-item">

            <FaGithub />

            <div>
              <span>GitHub</span>
              <a
                href="https://github.com/PrasadPawar1361"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com
              </a>
            </div>

          </div>

          <div className="contact-item">

            <FaLinkedin />

            <div>
              <span>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/prasad-pawar-8586ab28a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com
              </a>
            </div>

          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <label htmlFor="name">
            Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="btn primary-btn"
          >
            Send Message
            <FaPaperPlane />
          </button>

          {submitted && (
            <p className="success-message">
              Thank you! Your message has been submitted on the frontend.
              Connect this form to a backend or email service to actually
              send messages.
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;