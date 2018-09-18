import React from 'react';
import styled from 'react-emotion';

const ImageStyle = styled('img')(
  {
    gridColumn: '2 / 3',
    gridRow: '2 / 3'
  }
)

const Image = () => (
  <ImageStyle src={require("../../../images/rn-150-image.png")} alt="Raymond Norman" />
)

export default Image;
