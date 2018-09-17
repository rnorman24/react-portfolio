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
  props => ({
    borderTop: '5 solid' `${props.theme.textColor}`
  }),
  {
    textAlign: 'left',
    padding: '2 0'
  }
);

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
      <DemoLi>
        <a href="../2017/workshop">Workshop Examples</a>
      </DemoLi>
    </DemoUl>
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
  </DemoStyle>
);

export default DemoList;
