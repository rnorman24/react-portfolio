import React from "react";
import styled from "react-emotion";

const breakpoints = [500, 700, 820];

const mqMax = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
);

const ProjectStyle = styled("div")({
  gridColumn: "1 / 3",
  gridRow: "4 / span 2",
  fontWeight: "700",
  lineHeight: "1.2",
  alignSelf: "end",
  [mqMax[1]]: {
    gridColumn: '3 / -1',
    gridRow: '6'
  },
  [mqMax[0]]: {
    gridColumn: '1 / -1',
    gridRow: '4'
  }
});

const ProjectUl = styled("ul")({
  margin: 0
});

const ProjectLi = styled("li")(
  {
    borderTop: '5px solid #3c3b37',
    textAlign: 'left',
    padding: '2px 0'
  }
);

const BorderBottomStyle = {
  borderBottom: '5px solid #3c3b37'
}

const ProjectList = () => (
  <ProjectStyle>
    <ProjectUl>
      <ProjectLi>
        <a href="https://guarded-peak-20346.herokuapp.com/">Beer Label Search Project</a>
      </ProjectLi>
      <ProjectLi>
        <a href="https://salty-taiga-65994.herokuapp.com/">Friend Finder Project</a>
      </ProjectLi>
      <ProjectLi>
        <a href="https://github.com/rnorman24/bamazon">
          bamazon MySQL Project
        </a>
      </ProjectLi>
      <ProjectLi style={BorderBottomStyle}>
        <a href="https://rnorman24.github.io/NYTSearch/">
          New York Times Search Project
        </a>
      </ProjectLi>
    </ProjectUl>
  </ProjectStyle>
);

export default ProjectList;
