import {
  FaGraduationCap,
  FaCode,
  FaBullseye,
  FaLightbulb
} from "react-icons/fa";

function About() {

  const information = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      text: "Bachelor of Engineering in Information Technology"
    },
    {
      icon: <FaCode />,
      title: "Current Learning",
      text: "Java Full Stack Development, React.js, Spring Boot and SQL"
    },
    {
      icon: <FaBullseye />,
      title: "Career Goal",
      text: "Become a skilled software developer and build real-world applications"
    },
    {
      icon: <FaLightbulb />,
      title: "Interests",
      text: "Web Development, Java, Problem Solving and New Technologies"
    }
  ];

  return (
    <section id="about" className="section about-section">

      <div className="section-heading">

        <p>GET TO KNOW ME</p>

        <h2>About Me</h2>

      </div>

      <div className="about-content">

        <div className="about-text">

          <h3>
            Building my skills one project at a time.
          </h3>

          <p>
            I am an IT Engineering student interested in software
            development and modern web technologies.
          </p>

          <p>
            I am currently focusing on Java Full Stack Development,
            React.js, SQL and Spring Boot. I enjoy learning by building
            practical projects and solving programming problems.
          </p>

          <p>
            My goal is to become a strong software developer who can
            understand both frontend and backend development.
          </p>

        </div>

        <div className="about-cards">

          {information.map((item, index) => (
            <div className="about-card" key={index}>

              <div className="about-icon">
                {item.icon}
              </div>

              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default About;