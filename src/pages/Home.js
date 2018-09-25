import React from "react";
import styled from "react-emotion";
import HeaderWrapper from "./home/HeaderWrapper";

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

const Home = () => (
  <Header>
    <HeaderWrapper />
  </Header>
);

export default Home;
