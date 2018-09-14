import React from "react";

const About = () => (
  <header>
    <div className="header-wrapper">
      <h1>The Experimental Project Lab</h1>
      <h1>of Raymond Norman</h1>
      <img src={require("./images/rn-150-image.png")} alt="Raymond Norman" />
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
    </div>
  </header>
);

export default About;

{
  /*  <header
  className="masthead text-center text-white"
  style={{
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "cover",
    overflow: "hidden"
  }}
>
  <h1 className="text-uppercase">
    <strong>Ray Norman</strong>
  </h1>
  <img src={require("./images/rn-150-image.png")} alt="Raymond Norman" />
  <hr />
  <p className="text-faded mb-5">
    Start Bootstrap can help you build better websites using the Bootstrap CSS
    framework! Just download your template and start going, no strings
    attached!
  </p>
  <a className="btn btn-primary btn-xl" href="#about">
    Find Out More
  </a>
</header> */
}
