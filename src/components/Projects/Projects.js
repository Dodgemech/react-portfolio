import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import lair from "../../Assets/Projects/lair.JPG";
import planner from "../../Assets/Projects/planner.JPG";
import note from "../../Assets/Projects/note.jpg";
import ultimate from "../../Assets/Projects/ultimate.JPG";
import team from "../../Assets/Projects/team.JPG"
import quiz from "../../Assets/Projects/quiz.JPG";
import globogains from "../../Assets/Projects/globogains.jpg"

function Projects() {
  return (
    <section>
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          What I've Been <strong>Working On </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={10} className="project-card">
            <ProjectCard
              imgPath={globogains}
              isBlog={false}
              title="Globo Gains"
              description="A Gym buddy application made with the GARMEN stack based on the hit movie Dodgeball. Track your progress, share it in the community blog and see our list of recommended workouts! Created with HTML5, CSS3, JavaScript, Bootstrap, MongoDB, React, Apollo, GraphQL and JQuery. "
              link="https://github.com/palminski/perfidious-gains-goblins"
              link2="https://globogains.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lair}
              isBlog={false}
              title="The Lair of The Sphinx"
              description="Welcome to the Lair of the Sphinx. Within you will find myriad monsters with which to do battle. Unlike many monsters that will challenge adventurers physically, The ones within the Sphinx's lair challenge explorers mentally. Created with HTML5, CSS3, JavaScript, Bootstrap, Node, BCrypt, Express, MySQL, MySQL2, Sequelize and NanoID"
              link ="https://github.com/Dodgemech/The-Lair-of-the-Sphinx"
              link2="https://the-lair-of-the-sphinx.herokuapp.com/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ultimate}
              isBlog={false}
              title="Ultimate Brew Master"
              description="Ultimate Brew Master is a brewery location app that searches for breweries near searched location in input field and has the ability to persist through sessions with a favorites button. Created with HTML5, CSS3, JavaScript, JQuery, Google Fonts, Semantic UI, Open BreweriesDB API, and Giphy API. "
              link="https://github.com/Dodgemech/ultimate-brew-master-brewery-finder"
              link2="https://palminski.github.io/ultimate-brew-master-brewery-finder/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Coding Quiz"
              description="This code quiz was created to test proper funcionality and use of JavaScript and Web API's. Created with HTML5, CSS3, JavaScript, DOM Manipulation and Bootstrap."
              link="https://github.com/Dodgemech/Coding-Quiz"
              link2="https://dodgemech.github.io/Coding-Quiz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Note Taker"
              description="A node driven application deployed on Heroku that can be used to create, edit, save and delete notes persistently. Created with HTML5, CSS3, JavaScript, RESTful API's Node, and Express"
              link="https://github.com/Dodgemech/Note-Taker"
              link2="https://note-take-tjg.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={team}
              isBlog={false}
              title="Employee Tracker"
              description="A Node.js application that takes inquirer input and generates an html webpage for teams looking to organize roles. Created with HTML5, CSS3, JavaScript, RESTful API's, Node, Express and Inquirer"
              link="https://github.com/Dodgemech/team-profile-generator"
              link2=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={planner}
              isBlog={false}
              title="Work Day Planner"
              description="A simple planner application that allows the user to input their tasks for wach hour of the work day. Created with HTML5, CSS3, JavaScript, and Bootstrap"
              link="https://github.com/Dodgemech/Work-Day-Planner"
              link2="https://dodgemech.github.io/Work-Day-Planner/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Projects;
