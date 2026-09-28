import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiApachemaven,
  SiGithub
} from "react-icons/si";

function Skills() {

  const skills = [
    {
      name: "Java",
      icon: <FaJava />,
      category: "Programming"
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      category: "Programming"
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      category: "Frontend"
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      category: "Frontend"
    },
    {
      name: "React.js",
      icon: <FaReact />,
      category: "Frontend"
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot />,
      category: "Backend"
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      category: "Database"
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      category: "Database"
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      category: "Tools"
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      category: "Tools"
    },
    {
      name: "Maven",
      icon: <SiApachemaven />,
      category: "Tools"
    }
  ];

  return (
    <section id="skills" className="section">

      <div className="section-heading">
        <p>WHAT I WORK WITH</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <p>{skill.category}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;