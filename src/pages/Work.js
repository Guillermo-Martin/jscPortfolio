import React from 'react';
import Navbar from './../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import burger from './../assets/images/burger.jpeg';


function Work() {
  return (

      <Container>

          <Navbar />
        
        
        <Row>
          <Col>
            <p className="Work-header">Illustrations</p>
            
            {/* Image from:  https://unsplash.com/ */}

            <a href={burger}>
              <Image src={burger} thumbnail className="Work-image" />
            </a>
            
            
            <a href="https://randomuser.me/api/portraits/men/88.jpg">
              <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            </a>
            
            <a href="https://randomuser.me/api/portraits/men/88.jpg">
              <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            </a>
            
            <a href="https://randomuser.me/api/portraits/men/88.jpg">
              <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            </a>
            
            <a href="https://randomuser.me/api/portraits/men/88.jpg">
              <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            </a>
            
            <a href="https://randomuser.me/api/portraits/men/88.jpg">
              <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            </a>
            
          </Col>

          <Col>
            <p className="Work-header">Graphic Design</p>
            
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
          </Col>
        </Row>

      </Container>
    
  )
}

export default Work;

// sample column
{/* <Col xs={3} md={2}>
  <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
</Col> */}