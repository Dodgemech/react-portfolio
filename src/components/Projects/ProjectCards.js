import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom"

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link}  target="_blank">
          {"View Project"}
        </Button>
        <Button variant="priamry" href={props.link2} target="_blank">
        {"View Live"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
