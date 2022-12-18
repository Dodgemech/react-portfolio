import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi my name is <span>Travis Geers </span>
            from <span> Rio Rancho, NM</span>
            <br />As a Full Stack Developer I enjoy using a muiltitude of technologies to bring a crisp and quality product to the client. Currently I am earning an intensive Full Stack Coding Certificate at the University of Oregon. I am gaining experience in the foundations of web development while honing my skills in HTML5, CSS, Bootstrap, and JavaScript, jQuery, MERN, MySQL, React and GraphQL. I am someone who always wants to learn and enjoys problem-solving to create new solutions for making people's lives better. Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.
            <br />
            <br />
            Apart from coding, these are some other activites that i love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending Time With My Family
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Around With New Hardware
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying to Develop My Skillset Even Further 
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
