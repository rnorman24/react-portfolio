import React from 'react';
import styled from 'react-emotion';

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

const ListItems = () => (
  <ItemLi>
  <ItemA href="https://developer.mozilla.org/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">
  Firefox Grid Inspector
</ItemA>
</ItemLi>

<ItemLi>
<ItemA href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes">
  Firefox Shape Path Editor
</ItemA>
</ItemLi>
<ItemLi>
<ItemA href="http://nightly.mozilla.org">Firefox Nightly</ItemA>
</ItemLi>
);

export default ListItems;