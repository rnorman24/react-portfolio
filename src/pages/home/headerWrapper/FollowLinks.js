import React from "react";
import styled from "react-emotion";

const breakpoints = [500, 700, 820];

const mqMax = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
);

const FollowLinkStyle = styled("p")(
  props => ({
    color: props.theme.textColor
  }),
  {
    gridColumn: "3 / 6",
    gridRow: "5",
    fontSize: "0.9rem",
    borderBottom: "25px solid #f9423a",
    alignSelf: "start",
    justifyContent: "end",
    lineHeight: "1.3",
    paddingBottom: 5,
    fontWeight: "400",
    margin: 0,
    [mqMax[2]]: {
      borderBottom: '20px solid #f9423a'
    },
    [mqMax[0]]: {
      gridColumn: '1 / 4',
      gridRow: '3',
      borderBottom: '10px solid #f9423a'
    },
    span: {
      display: 'flex'
    }
    
  }
);

const FollowLinks = () => (
  <FollowLinkStyle>
    
    Check out my <a href="https://github.com/rnorman24/"><span><img src={require("./github-32.png")} class="social" alt="GitHub" /></span>GitHub</a> page.
    <br />
    Contact me at <a href="#">nray24@gmail.com</a>.
  </FollowLinkStyle>
);

export default FollowLinks;
