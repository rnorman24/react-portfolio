import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import imgUrl from "./img/vizArc-bg.png";

const About = () => (
  <Fragment>
    <header
      className="masthead text-center text-white d-flex"
      style={{
        backgroundImage: "url(" + imgUrl + ")",
        backgroundSize: "cover",
        overflow: "hidden"
      }}
    >
      <Container className="my-auto">
        <Row>
          <Col lg="10" className="mx-auto">
            <h1 className="text-uppercase">
              <strong>Ray Norman</strong>
            </h1>
            <img src={require("./img/rn-150-image.png")} alt="Ray Norman" />
            <hr />
          </Col>

          <Col lg="8" className="mx-auto">
            <p className="text-faded mb-5">
              Start Bootstrap can help you build better websites using the
              Bootstrap CSS framework! Just download your template and start
              going, no strings attached!
            </p>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger"
              href="#about"
            >
              Find Out More
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  </Fragment>
);

export default About;
