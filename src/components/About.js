import React from "react";
import imgUrl from "./images/vizArc-bg.png";

const About = () => (
  <header
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
  </header>
);

export default About;
