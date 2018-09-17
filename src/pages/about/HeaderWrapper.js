import React from "react";
import styled, { css } from "react-emotion";

const HeaderWrapper = styled("div")(
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

const H1nth1 = styled('h1:nth-child(1)')(
  {
    gridColumn: '1 / 4',
    textAlign: 'right',
    fontSize: "calc(1.3rem + 1.8vw)",
    margin: 0,
    lineHeight: "1.2rem"
  }
)

const H1nth2 = styled('h1:nth-child(2)')(
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
  <HeaderWrapper>
      <H1nth1>The Experimental Project Lab</H1nth1>
      <H1nth2>of Raymond Norman</H1nth2>
      <img src={require("../images/rn-150-image.png")} alt="Raymond Norman" />
      <div className="demo-list">
        <ul>
          <li>
            <a href="https://youtube.com/layoutland">Layout Land videos</a>
          </li>
          <li>
            <a href="http://layout.land">Layout Land website</a>
          </li>
          <li>
            <a href="http://jensimmons.com/post/feb-27-2017/learn-css-grid">
              Learn how to use CSS Grid
            </a>
          </li>
          <li>
            <a href="http://jensimmons.com/presentation/real-art-direction-web">
              Revolutionize Your Page: Real Art Direction on the Web
            </a>
          </li>
          <li>
            <a href="http://jensimmons.com/presentation/progressing-our-layouts">
              Progressing Our Layouts
            </a>
          </li>
          <li>
            <a href="http://jensimmons.com/presentation/modern-layouts-getting-out-our-ruts">
              Modern Layouts: Getting Out of Our Ruts
            </a>
          </li>
          <li>
            <a href="http://jensimmons.com">jensimmons.com</a>
          </li>
          <li>
            <a href="../2017/workshop">Workshop Examples</a>
          </li>
        </ul>
      </div>
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
    
  </HeaderWrapper>
);

export default HeaderWrapper;
