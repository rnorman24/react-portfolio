import React from "react";
import styled from "react-emotion";

import ProjectList from "./headerWrapper/ProjectList";
import ContactLinks from "./headerWrapper/ContactLinks";
import ItemLinks from "./headerWrapper/ItemLinks";
import Image from "./headerWrapper/Image";

const breakpoints = [500, 700, 820];

const mqMax = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

const HeaderGrid = styled("div")(
  props => ({
    background: props.theme.bgColor
  }),
  {
    width: "66vw",
    display: "grid",
    margin: "auto",
    gridTemplateColumns: "auto 1fr 1fr 1fr 0.5fr",
    gridTemplateRows: "auto 1fr auto auto auto",
    gridGap: "1rem",
    transform: "rotate(-45deg)",
    a: {
      textTransform: "uppercase",
      fontWeight: "700"
    },
    [mqMax[2]]: {
      transform: "rotate(0deg)"
    },
    [mqMax[0]]: {
      gridTemplateColumns: "auto 1fr 1fr 1fr 0.5fr",
      gridTemplateRows: "auto auto auto auto"
    }
  }
);

const H1nth1 = styled("h1")(
  props => ({
    color: props.theme.textColor
  }),
  {
    gridColumn: "1 / 4",
    [mqMax[0]]: {
      gridColumn: "1 / -1"
    },
    textAlign: "right",
    fontSize: "calc(1.3rem + 1.8vw)",
    margin: 0,
    lineHeight: "1.2em"
  }
);

const H1nth2 = styled("h1")(
  props => ({
    color: props.theme.red
  }),
  {
    writingMode: "vertical-lr",
    gridColumn: "3 / 4",
    gridRow: "2 / 5",
    justifySelf: "end",
    marginTop: -10,
    marginRight: -10,
    fontSize: "calc(1.3rem + 1.8vw)",
    lineHeight: "1.2em",
    [mqMax[0]]: {
      gridColumn: "5",
      gridRow: "2 / 4",
      marginRight: -5
    },
    [mqMax[2]]: {
      marginTop: -5
    }
  }
);

const HeaderWrapper = () => (
  <HeaderGrid>
    <H1nth1>The Experimental Projects of</H1nth1>
    <H1nth2>Raymond Norman</H1nth2>
    <Image
      src={require("../../images/rn-150-image.png")}
      alt="Raymond Norman"
    />
    <ProjectList />
    <ContactLinks />
    <ItemLinks />
  </HeaderGrid>
);

export default HeaderWrapper;
