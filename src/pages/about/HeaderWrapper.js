import React from "react";
import styled from "react-emotion";

import DemoList from './headerWrapper/DemoList';

const HeaderGrid = styled("div")(
  props => ({
    background: props.theme.bgColor
  }),
  {
    width: '66vw',
    display: 'grid',
    margin: 'auto',
    gridTemplateColumns: 'auto 1fr 1fr 1fr 0.5fr',
    gridTemplateRows: "auto 1fr 1fr auto auto",
    gridGap: '1rem',
    transform: 'rotate(-45deg)'    
  }
);

const H1nth1 = styled('h1')(
  {
    gridColumn: '1 / 4',
    textAlign: 'right',
    fontSize: "calc(1.3rem + 1.8vw)",
    margin: 0,
    lineHeight: "1.2rem"
  }
)

const H1nth2 = styled('h1')(
    props => ({
      color: props.theme.red
    }),
    {
      writingMode: 'vertical-lr',
      gridColumn: '3 / 4',
      gridRow: '2 / 5',
      justifySelf: 'end',
      marginTop: -10,
      marginRight: -10,
      fontSize: "calc(1.3rem + 1.8vw)",
      lineHeight: "1.2rem"
    }
);

const HeaderWrapper = () => (
  <HeaderGrid>
      <H1nth1>The Experimental Project Lab</H1nth1>
      <H1nth2>of Raymond Norman</H1nth2>
      <img src={require("../../images/rn-150-image.png")} alt="Raymond Norman" />
      <DemoList />
  </HeaderGrid>
);

export default HeaderWrapper;
