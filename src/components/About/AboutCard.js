import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aldo Perez </span>
            from <span className="purple"> Dallas, Texas.</span>
            <br />Im a Full-Stack Developer , striving to contibute to great projects all the while 
                learning in the process. 
            <br />
            <br />
            Apart from coding, some other activities that I enjoy
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hitting the Gym 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aldo Perez</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
