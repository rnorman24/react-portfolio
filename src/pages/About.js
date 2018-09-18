import React from "react";
import styled from "react-emotion";
import HeaderWrapper from "./about/HeaderWrapper";

const breakpoints = [500, 700, 820, 1000, 1300, 1800];

const mqMax = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
);

const mqMin = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
);

const Header = styled("header")(
  props => ({
    background: props.theme.bgColor
  }),
  {
    display: 'flex',
    margin: 'auto',
    padding: '1rem 5vw 12rem',
    [mqMax[2]]: {
      paddingTop: '5rem',
      paddingBottom: '5rem'
    },
    [mqMin[3]]: {
      paddingBottom: '15rem'
    },
    [mqMin[4]]: {
      paddingBottom: '25rem'
    },
    [mqMin[5]]: {
      paddingBottom: '30rem'
    },
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
