import React from "react";
import styled from "react-emotion";

const breakpoints = [500, 700, 820];

const mqMax = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
);

const WorkshopStyle = styled("div")({
  gridColumn: "4 / 6",
  gridRow: "3",
  fontWeight: "700",
  alignSelf: "end",
  borderTop: '5px solid #3c3b37',
  borderBottom: '5px solid #3c3b37'
});

const WorkshopUl = styled("ul")({
  margin: 0
});

const WorkshopLi = styled("li")({
  textAlign: "left",
  padding: "2px 0"
});

const WorkshopA = styled("a")({
  borderBottom: "none",
  textTransform: "uppercase",
  color: "#3c3b37",
  fontWeight: "700"
});

const WorkshopLink = () => (
  <WorkshopStyle>
    <WorkshopUl>
      <WorkshopLi>
        <WorkshopA href="https://developer.mozilla.org/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">
          Firefox Grid Inspector
        </WorkshopA>
      </WorkshopLi>
      <WorkshopLi>
        <WorkshopA href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes">
          Firefox Shape Path Editor
        </WorkshopA>
      </WorkshopLi>
      <WorkshopLi>
        <WorkshopA href="http://nightly.mozilla.org">Firefox Nightly</WorkshopA>
      </WorkshopLi>
    </WorkshopUl>
  </WorkshopStyle>
);

export default WorkshopLink;
