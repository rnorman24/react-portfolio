import React from "react";
import styled from "react-emotion";
import Link from "../../node_modules/react-router-dom/Link";

const Main = styled("main")({
  margin: "4rem",
  display: "grid",
  gridTemplateColumns: "100px 1fr 1fr minmax(40ch, 65ch) 1fr",
  gridTemplateRows: "min-content 4rem 8rem auto",
  gridGap: "1rem",
  fontSize: "1.3rem",
  fontWeight: "300",
  textRendering: "optimizeLegibility",
  fontKerning: "normal",
  color: "#00a3ff",

  h1: {
    gridRow: "1",
    gridColumn: "3 / 6",
    margin: 0,
    fontSize: "3.6rem",
    lineHeight: "1.1",
    fontFamily: "'Voces', cursive",
    textTransform: "none"
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

const About = () => (
  <Main>
    <Link to="/">Home</Link>
    <h1>About Raymond Norman</h1>
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
  </Main>
);

export default About;
