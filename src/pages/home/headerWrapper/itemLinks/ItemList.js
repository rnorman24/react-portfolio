import React from "react";
import styled from "react-emotion";

const ItemUl = styled("ul")({
  margin: 0
});

const ItemLi = styled("li")({
  textAlign: "left",
  padding: "2px 0"
});

const ItemA = styled("a")({
  borderBottom: "none",
  textTransform: "uppercase",
  color: "#3c3b37",
  fontWeight: "700"
});

const ItemList = () => (
  <ItemUl>
    <ItemLi>
      <ItemA href="https://developer.mozilla.org/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">
        About
      </ItemA>
    </ItemLi>
    <ItemLi>
      <ItemA href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes">
        Resume
      </ItemA>
    </ItemLi>
  </ItemUl>
);

export default ItemList;
