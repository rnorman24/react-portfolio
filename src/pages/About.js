import React from "react";
import styled from "react-emotion";
import HeaderWrapper from "./about/HeaderWrapper";

const Header = styled("header")(
  props => ({
    background: props.theme.bgColor
  }),
  {
    display: 'flex',
    margin: 'auto',
    padding: '1rem 5vw 12rem',
    minHeight: "100vh"    
  }
);

const About = () => (
  <Header>
    <HeaderWrapper />
  </Header>
);

export default About;

/* {
  <header
  className="masthead text-center text-white"
  style={{
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "cover",
    overflow: "hidden"
  }}
>
  <h1 className="text-uppercase">
    <strong>Ray Norman</strong>
  </h1>
  <img src={require("./images/rn-150-image.png")} alt="Raymond Norman" />
  <hr />
  <p className="text-faded mb-5">
    Start Bootstrap can help you build better websites using the Bootstrap CSS
    framework! Just download your template and start going, no strings
    attached!
  </p>
  <a className="btn btn-primary btn-xl" href="#about">
    Find Out More
  </a>
</header> */
