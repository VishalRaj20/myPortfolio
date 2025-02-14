import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazonClone from "../../Assets/Projects/amazonClone.png";
import bookstore from "../../Assets/Projects/bookstore.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Currently, I am working on few more project.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "400px" }}>
          {/* Amazon Clone */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonClone}
              isBlog={false}
              title="Amazon Clone"
              description="A fully functional e-commerce platform inspired by Amazon, built using React.js and Firebase. Features include user authentication, product listing, cart functionality, and real-time database updates."
              ghLink="https://github.com/VishalRaj20/Amazon-clone"
              // demoLink="" // Add live demo link if available
            />
          </Col>
          {/* BookStore App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="BookStore App"
              description="An online bookstore platform with 1000+ books across various genres. Built with React.js, Node.js, and Express.js. Features include book search, category-based filtering, and user authentication."
              ghLink="https://github.com/VishalRaj20/BookStore"
              demoLink="" // Add live demo link if available
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
