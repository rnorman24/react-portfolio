import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";

const ItemUl = styled("ul")({
  margin: 0
});

const hover = `(a:hover {color: #f9423})`;

const ItemLi = styled("li")({
  textAlign: "left",
  padding: "2px 0",
  a: {
    borderBottom: "none",
    textTransform: "uppercase",
    color: "#3c3b37",
    fontWeight: "700",
  }[hover]
});

const ItemList = () => (
  <ItemUl>
    <ItemLi>
      <Link to="/about">About</Link>
    </ItemLi>
    <ItemLi>
      <a href="https://drive.google.com/open?id=1vlyjqQrGfge007wC3uhl5BoPg11P0avS">
        Resume
      </a>
    </ItemLi>
  </ItemUl>
);

export default ItemList;
