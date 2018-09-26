import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";

const ItemUl = styled("ul")({
  margin: 0
});

const ItemLi = styled("li")({
  textAlign: "left",
  padding: "2px 0",
  a: {
    borderBottom: "none",
    textTransform: "uppercase",
    color: "#3c3b37",
    fontWeight: "700"
  }
});

const ItemList = () => (
  <ItemUl>
    <ItemLi>
      <Link to="/about">About</Link>
    </ItemLi>
    <ItemLi>
      <Link to="/resume">Resume</Link>
    </ItemLi>
  </ItemUl>
);

export default ItemList;
