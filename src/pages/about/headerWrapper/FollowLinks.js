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
    margin: 0
  }
);

const FollowLinks = () => (
  <FollowLinkStyle>
    Follow <a href="#">@raymondnorman</a> on Twitter for more as it happens.
    <br />
    Contact me at <a href="#">email</a>.
  </FollowLinkStyle>
);

export default FollowLinks;
