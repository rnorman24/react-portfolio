import React from 'react';
import styled from 'react-emotion';

const ItemUl = styled("ul")({
  margin: 0
});

const ItemLi = styled("li")({
  textAlign: "left",
  padding: "2px 0"
});

const WorkshopA = styled("a")({
  borderBottom: "none",
  textTransform: "uppercase",
  color: "#3c3b37",
  fontWeight: "700"
});

const ItemList = () => (
  <ItemUl>
  <ItemLi>
    <WorkshopA href="https://developer.mozilla.org/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">
      Firefox Grid Inspector
    </WorkshopA>
  </ItemLi>
  <ItemLi>
    <WorkshopA href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes">
      Firefox Shape Path Editor
    </WorkshopA>
  </ItemLi>
  <ItemLi>
    <WorkshopA href="http://nightly.mozilla.org">Firefox Nightly</WorkshopA>
  </ItemLi>
</ItemUl>
);

export default ItemList;