import React from 'react';
import Navbar from './../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About() {
  return (
    <Container>
      
      <Navbar />
     
      <Row>
        <Col>Column 1</Col>
        <Col>Column 2</Col>
      </Row>
    </Container>
  )
}

export default About;