import {
  FaUniversity,
  FaRecycle,
  FaLaptopCode
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Bank Services Management System",
    icon: <FaUniversity />,
    description:
      "A web-based banking application that allows users to perform basic banking operations such as account creation, credit, debit, fund transfer and viewing account information.",
    technologies: [
      "Java",
      "JSP",
      "Servlet",
      "JDBC",
      "MySQL",
      "Tomcat"
    ],
    github: "https://github.com/",
    live: "#"
  },

  {
    id: 2,
    title: "Waste Management System",
    icon: <FaRecycle />,
    description:
      "A web application designed to provide information about waste management and encourage proper waste disposal and management practices.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java"
    ],
    github: "https://github.com/",
    live: "#"
  },

  {
    id: 3,
    title: "Future Project",
    icon: <FaLaptopCode />,
    description:
      "................................",
    technologies: [
      "React.js",
      "Java",
      "Spring Boot",
      "MySQL"
    ],
    github: "https://github.com/",
    live: "#"
  }
];

export default projects;