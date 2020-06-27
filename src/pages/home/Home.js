import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <Container className='container'>
      
        <h1>Name</h1>
        
        {/* Image from:  https://randomuser.me/photos */}
        <Image src="https://randomuser.me/api/portraits/lego/5.jpg" roundedCircle />
        
      
        <h2><Link to="/about">About</Link></h2>
        <h2><Link to="/work">Work</Link></h2>
        <h2><Link to="/contact">Contact</Link></h2>
      
    </Container>
    
  );
}

export default Home;