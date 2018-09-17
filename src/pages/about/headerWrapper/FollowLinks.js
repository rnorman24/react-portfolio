import React from "react";
import styled from "react-emotion";

const FollowLinkStyle = styled("p")({
  gridColumn: "3 / 6",
  gridRow: "5",
  fontSize: "0.9rem",
  borderBottom: "25px solid #f9423a",
  alignSelf: "start",
  justifyContent: "end",
  lineHeight: "1.3",
  paddingBottom: 5,
  fontWeight: "400"
});

const FollowLinks = () => (
  <FollowLinkStyle>
    <p className="follow-links">
      Follow <a href="#">@raymondnorman</a> on Twitter for more as it happens.
      <br />
      Contact me at <a href="#">email</a>.
    </p>
    <div className="workshop-link">
      <ul>
        <li>
          <a href="https://developer.mozilla.org/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">
            Firefox Grid Inspector
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes">
            Firefox Shape Path Editor
          </a>
        </li>
        <li>
          <a href="http://nightly.mozilla.org">Firefox Nightly</a>
        </li>
      </ul>
    </div>
  </FollowLinkStyle>
);

export default FollowLinks;
