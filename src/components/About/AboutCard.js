import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">VIshal Raj </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I am currently in the 3rd year of pursuing a Bachelor's degree in Electronics and Communication Engineering (ECE) at NIT Andhra Pradesh.
            <br />
            I want to become a software developer.
            <br />
            <br />

            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Doing Exercises
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Vishal</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
