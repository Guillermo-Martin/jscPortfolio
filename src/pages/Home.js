import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Name</h1>
      <h2>Image will go here</h2>
      
      <h2><Link to="/about">About</Link></h2>
      <h2><Link to="/work">Work</Link></h2>
      <h2><Link to="/contact">Contact</Link></h2>
    </div>
  );
}

export default Home;