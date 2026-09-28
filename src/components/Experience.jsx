import { FaJava, FaReact, FaDatabase } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="section">

      <div className="section-heading">

        <p>MY JOURNEY</p>

        <h2>Learning & Experience</h2>

      </div>

      <div className="timeline">

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaJava />
          </div>

          <div className="timeline-content">

            <span>Java Full Stack Development</span>

            <h3>Backend Development</h3>

            <p>
              Learning Java, JDBC, JSP, Servlets, Maven and Spring Boot
              while building practical backend applications.
            </p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaReact />
          </div>

          <div className="timeline-content">

            <span>Frontend Development</span>

            <h3>React.js</h3>

            <p>
              Learning React components, props, state, events,
              hooks and responsive user interfaces.
            </p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaDatabase />
          </div>

          <div className="timeline-content">

            <span>Database</span>

            <h3>SQL & Database Development</h3>

            <p>
              Working with MySQL, database design, SQL queries,
              relationships and backend database connectivity.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;