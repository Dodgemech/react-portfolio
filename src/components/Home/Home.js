import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container  className="home-content">
          <Row>
            <Col md={0} className="home-header">
              <h1 style={{ paddingBottom: 15 }} md={0} className="heading">
                Hi There! My Name Is
                <strong className="main-name"> Travis Geers</strong>
              </h1>
              <h1 className="heading-name"> 
              </h1>
              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
                
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
