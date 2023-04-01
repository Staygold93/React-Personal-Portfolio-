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
            <br />Originally from Los Angeles, i was always curious as to how technology worked 
            around me, this curiosity and urge in learning directed me towards a Full-Stack Development course at SMU. 
            
                
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
            <li className="about-activity">
              <ImPointRight /> Learning New things
            </li>
          </ul>

       
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
