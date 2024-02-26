import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";


import Social from "../Contact/Social";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A web/mobile app developer. I have
              experience in building web applications and backend services.

              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript, Python, Dart. </b>
              </i>
              <br />
              <br />
              I keep myself updated with latest <i className="purple"> software</i> and <i className="purple"> hardware </i>technologies.
              <br />
              <br />
              I am a quick learner and always open to learning new technologies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Social />
        </Row>
      </Container>
    </Container >
  );
}
export default Home2;
