import React from "react";
import styled from "react-emotion";
import Link from "../../node_modules/react-router-dom/Link";

const Main = styled('main')({
  display: 'flex',
  minHeight: '100vh',
  margin: 'auto',
  padding: "1rem 5vw 12rem"
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
    gridColumn: '2'
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
    margin: '1rem'
  }
});

const H1nth1 = styled('h1')({
  gridRow: "1",
  gridColumn: "3 / 6",
  margin: 0,
  fontSize: "3.6rem",
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        pulvinar ligula a orci vestibulum, sed iaculis orci posuere. Proin
        ornare orci non magna finibus luctus. Nulla facilisi. Sed a sollicitudin
        elit, id feugiat leo. Proin in justo imperdiet, pellentesque dolor quis,
        posuere justo. Duis cursus, ligula auctor volutpat fringilla, lacus
        felis porttitor urna, vel volutpat libero risus eget lectus. Nunc
        rhoncus in sapien vel fringilla. Vestibulum rutrum quis dui vitae
        viverra. Suspendisse non mauris quis lacus faucibus placerat. Duis vitae
        iaculis tortor. In quis efficitur risus. Duis sem libero, elementum
        accumsan auctor a, molestie id neque. Maecenas quis lobortis augue.
      </p>
    </Article>
    </Section>
  </Main>
);

export default About;
