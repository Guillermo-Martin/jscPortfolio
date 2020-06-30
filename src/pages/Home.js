import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './../assets/styles/styles.css';

function Home() {
  return (
    
      <Container className='container Home-container'>
        {/* Image from:  https://randomuser.me/photos */}
        <Image src="https://randomuser.me/api/portraits/lego/5.jpg" roundedCircle />

        <h1>Name</h1>

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