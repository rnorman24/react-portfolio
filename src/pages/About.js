import React from "react";
import styled from "react-emotion";
import Link from "../../node_modules/react-router-dom/Link";

const breakpoints = [500, 700, 820];

const mqMax = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

const Main = styled('main')(
  props => ({
    background: props.theme.bgColor
  }),
  {
  display: 'flex',
  minHeight: '100vh',
  margin: 'auto',
  padding: "1rem 5vw 12rem",
  [mqMax[0]]: {
    padding: 0
  }
});

const Section = styled("section")({
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "minmax(min-content, 1fr) 1fr 1fr minmax(30ch, 65ch) 1fr",
  gridTemplateRows: "min-content 4rem 8rem auto",
  gridGap: "1rem",
  fontSize: "1.3rem",
  fontWeight: "300",
  textRendering: "optimizeLegibility",
  fontKerning: "normal",
  a: {
    gridColumn: '2',
    [mqMax[0]]: {
      writingMode: "vertical-rl"
    }
  }
});

const Article = styled("article")({
  lineHeight: '1.4',
  fontFamily: "'Open Sans', sans-serif",
  gridRow: '2 / 5',
  gridColumn: '4',
  img: {
    clipPath: 'ellipse(50% 50%)',
    shapeOutside: 'ellipse()',
    float: 'left',
    margin: '1rem',
    maxWidth: '100%'
  }
});

const H1nth1 = styled('h1')({
  gridRow: "1",
  gridColumn: "3 / 6",
  margin: 0,
  fontSize: "calc(1.7rem + 1.8vw)",
  lineHeight: "1.1",
  fontFamily: "'Voces', cursive",
  textTransform: "none"
})

const H1nth2 = styled('h1')({
  writingMode: "vertical-rl",
  gridRow: '2 / 5',
  gridColumn: '3 / 4',
  justifySelf: "end",
  marginTop: -10,
  marginRight: -10,
  fontSize: "calc(0.5rem + 1.8vw)",
  lineHeight: "0.8em",
  color: '#00a3ff',
  textTransform: 'none'
})

const About = () => (
  <Main>
    <Section>
    <Link to="/">Home</Link>
    <H1nth1>About</H1nth1>
    <H1nth2>Raymond Norman</H1nth2>
    <Article>
      <img
        src={require("../images/rn-160-bwi-image.png")}
        alt="Raymond Norman"
      />
      <p>
      I'm a Full Stack Developer with a mission for improving web development through better design and function. I've participated in various roles from individual contributor to team lead and business owner for a variety companies in terms of size and purpose. As a result  of these various life experiences to draw from I've become a lifelong learner and experimenter with an eye on what is possible. 
      </p>
      <h3>Technical Skills</h3>
      <p>A six-month intensive certificate program focusing on: HTML5, CSS3, CSS Grid, Bootstrap, JavaScript, jQuery, Responsive Design, Node.js, Express.js, MySQL, MongoDB, React.js, Git, Heroku, Test Driven Development, User Authentication, and Computer Science Fundamentals.</p>
    </Article>
    </Section>
  </Main>
);

export default About;
