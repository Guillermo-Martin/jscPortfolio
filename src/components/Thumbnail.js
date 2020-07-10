import React from 'react';
import Image from 'react-bootstrap/Image';

function Thumbnail(props) {
  return(
      <a href={props.src}>
        <Image src={props.src} thumbnail className="Work-image" />
      </a>
  );
}

export default Thumbnail;