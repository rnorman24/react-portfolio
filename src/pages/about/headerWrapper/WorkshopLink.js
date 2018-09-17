import React from "react";
import styled from "react-emotion";

const DemoStyle = styled("div")({
  gridColumn: "1 / 3",
  gridRow: "4 / span 2",
  fontWeight: "700",
  lineHeight: "1.2",
  alignSelf: "end"
});

const DemoUl = styled("ul")({
  margin: 0
});

const DemoLi = styled("li")(
  {
    borderTop: '5px solid #3c3b37',
    textAlign: 'left',
    padding: '2px 0'
  }
);

const WorkshopLink = () => (
  <WorkshopStyle>
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
  </WorkshopStyle>
);

export default WorkshopLink;
