import React from "react";
import styled from "react-emotion";

import ItemList from './itemLinks/ItemList';

const breakpoints = [500, 700, 820];

const mqMax = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
);

const ItemContainer = styled("div")({
  gridColumn: "4 / 6",
  gridRow: "3",
  fontWeight: "700",
  alignSelf: "end",
  borderTop: '5px solid #3c3b37',
  borderBottom: '5px solid #3c3b37',
  [mqMax[2]]: {
    alignSelf: 'start',
    marginLeft: '1rem'
  },
  [mqMax[0]]: {
    gridColumn: '1 / -1',
    gridRow: '5',
    marginLeft: 0
  }
});

const ItemLinks = () => (
  <ItemContainer>
    <ItemList />
  </ItemContainer>
);

export default ItemLinks;
