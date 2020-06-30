import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className='container'>

      <h1>Name</h1>

      {/* Image from:  https://randomuser.me/photos */}
      <Image src="https://randomuser.me/api/portraits/lego/5.jpg" roundedCircle />


      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link>
            <Link to='/about'>About</Link>
          </Nav.Link>
        </Nav.Item>
      

        <Nav.Item>
          <Nav.Link>
            <Link to="/work">Work</Link>
          </Nav.Link> 
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link> 
        </Nav.Item>
      </Nav>

    </Container>

  );
}

export default Home;