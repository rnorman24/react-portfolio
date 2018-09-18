import React from "react";
import styled from "react-emotion";

const breakpoints = [500, 700, 820];

const mqMax = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
);

const DemoStyle = styled("div")({
  gridColumn: "1 / 3",
  gridRow: "4 / span 2",
  [mqMax[1]]: {
    gridColumn: '3 / -1',
    gridRow: '6'
  },
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

const BorderBottomStyle = {
  borderBottom: '5px solid #3c3b37'
}

const DemoList = () => (
  <DemoStyle>
    <DemoUl>
      <DemoLi>
        <a href="https://youtube.com/layoutland">Layout Land videos</a>
      </DemoLi>
      <DemoLi>
        <a href="http://layout.land">Layout Land website</a>
      </DemoLi>
      <DemoLi>
        <a href="http://jensimmons.com/post/feb-27-2017/learn-css-grid">
          Learn how to use CSS Grid
        </a>
      </DemoLi>
      <DemoLi>
        <a href="http://jensimmons.com/presentation/real-art-direction-web">
          Revolutionize Your Page: Real Art Direction on the Web
        </a>
      </DemoLi>
      <DemoLi>
        <a href="http://jensimmons.com/presentation/progressing-our-layouts">
          Progressing Our Layouts
        </a>
      </DemoLi>
      <DemoLi>
        <a href="http://jensimmons.com/presentation/modern-layouts-getting-out-our-ruts">
          Modern Layouts: Getting Out of Our Ruts
        </a>
      </DemoLi>
      <DemoLi>
        <a href="http://jensimmons.com">jensimmons.com</a>
      </DemoLi>
      <DemoLi style={BorderBottomStyle}>
        <a href="../2017/workshop">Workshop Examples</a>
      </DemoLi>
    </DemoUl>
  </DemoStyle>
);

export default DemoList;
